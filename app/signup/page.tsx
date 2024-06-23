"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
//@ts-ignore
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

import AlreadyLoggedIn from '@/components/alreadyLoggedIn';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Example: React.FC = () => {
  const [donnees, setDonnees] = useState<FormData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    document.title = "Créer un compte";

    const usernameCookie = Cookies.get('username');
    if (usernameCookie) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/signup', formData);
      const username = res.data.username;
      const email = res.data.email;
      console.log(username, email);

      Cookies.set('username', username);
      Cookies.set('email', email);
      Cookies.set('payment', false)

      router.push('/');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <AlreadyLoggedIn />
      ) : (
        <>
          <div className="flex min-h-screen bg-fuchsia-200 flex-1 flex-col px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                Créer un compte
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Pseudo
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={formData.username}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="block w-full pl-2 bg-slate-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Adresse E-Mail
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      className="block w-full pl-2 bg-slate-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Mot de passe
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                      className="block w-full pl-2 bg-slate-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Créer un compte
                  </button>
                </div>
              </form>

              <p className="mt-6 text-center text-sm text-gray-500">
                Déjà membre ?{' '}
                <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Se connecter
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Example;
