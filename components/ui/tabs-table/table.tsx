import * as React from 'react';
import { cn } from '@/lib/utils';

export const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className='inline-flex w-full overflow-auto rounded-md border-2 border-dwd-secondary1'>
    <table
      className={cn('w-full rounded-lg text-dwd-secondary1', className)}
      ref={ref}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    className={cn(
      'text-white bg-dwd-secondary1 [&_tr]:border-b-2 [&_tr]:border-b-dwd-secondary1',
      className
    )}
    ref={ref}
    {...props}
  />
));
TableHeader.displayName = 'Table Header';

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody className={cn(className)} ref={ref} {...props} />
));
TableBody.displayName = 'Table Body';

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    className={cn('even:bg-dwd-secondary2 even:bg-opacity-20', className)}
    ref={ref}
    {...props}
  />
));
TableRow.displayName = 'Table Row';

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    className={cn('px-4 py-2 text-left text-md font-semibold', className)}
    ref={ref}
    {...props}
  />
));
TableHead.displayName = 'Table Head';

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    className={cn(
      'px-4 py-2 text-sm first:border-r-2 first:border-r-dwd-secondary1 font-semibold',
      className
    )}
    ref={ref}
    {...props}
  />
));
TableCell.displayName = 'Table Cell';
