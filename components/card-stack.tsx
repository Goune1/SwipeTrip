"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    imageUrl: 'bali.jpg',
    
  },
  {
    id: 1,
    imageUrl: 'rio.jpg',
    
  },
  {
    id: 2,  
    imageUrl: 'new-york.jpg',
    
  },
  {
    id: 3,  
    imageUrl: 'tokyo.jpg',
  },
];
