'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List className={cn('px-4', className)} ref={ref} {...props} />
));
TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'relative text-md p-2 px-3 font-semibold rounded-t-md text-dwd-secondary1 z-10 hover:underline focus:outline-none',
      'data-[state=active]:z-30 data-[state=active]:bg-dwd-secondary1 data-[state=active]:text-white data-[state=active]:no-underline',
      'data-[state=active]:before:content-[" "] data-[state=active]:before:absolute data-[state=active]:before:bg-dwd-secondary1 before:w-2 before:h-1 before:bottom-0 before:-left-1 before:z-0',
      'data-[state=active]:after:content-[" "]  data-[state=active]:after:absolute  data-[state=active]:after:bg-dwd-secondary1  after:w-2  after:h-1  after:bottom-0  after:-right-1 after:z-0',
      className
    )}
    {...props}
  >
    <div className="absolute bg-background w-2 h-2  -left-2 rounded-md -bottom-0 z-10" />
    {children}
    <div className="absolute bg-background w-2 h-2 -right-2 rounded-md -bottom-0 z-10" />
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn(className)} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
