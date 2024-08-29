import { FC } from 'react';
import { cn } from '@/lib/utils';

interface Props {
className?: string;
title:string
items:Item[]


 1 21 
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}></div>
  );
};