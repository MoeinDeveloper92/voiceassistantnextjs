'use client';
import React from 'react';
import { CategoryProp } from './Categories';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import qs from 'query-string';

const CategoryItem = ({ item }: { item: CategoryProp }) => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const isSeleted = currentCategory === item.value;
  const handleOnClick = () => {
    const url = qs.stringifyUrl({
      url: pathName,
      query: {
        category: isSeleted ? null : item.value,
      },
    });

    router.push(url);
  };
  return (
    <Button
      onClick={handleOnClick}
      className={cn(
        'py-2 text-sm px-4 border rounded-full flex items-center cursor-pointer'
      )}
    >
      {item.name}
    </Button>
  );
};

export default CategoryItem;
