import React from 'react';
import CategoryItem from './CategoryItem';
export interface CategoryProp {
  name: string;
  value: string;
}
const Categories = ({ items }: { items: CategoryProp[] }) => {
  return (
    <div className="flex flex-wrap gap-6 mr-4 ">
      {items.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Categories;
