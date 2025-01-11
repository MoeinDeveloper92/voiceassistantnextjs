'use client';
import Logo from '@/components/Logo';
import React from 'react';
import { WandSparkles, History, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const menuList = [
  {
    name: 'Magic Tools',
    icon: WandSparkles,
    path: '/dashboard',
  },
  {
    name: 'output history',
    icon: History,
    path: '/dashboard/history',
  },
  {
    name: 'Upgrade',
    icon: CreditCard,
    path: '/dashboard/upgrade',
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <div className="p-5 bg-white h-screen flex flex-col ">
      <Logo />
      <div className="mt-10 h-max flex flex-col">
        {menuList.map((menu, i) => (
          <Link
            key={i}
            href={menu.path}
            className={`flex gap-2 mb-2 ${
              pathname === menu.path && 'bg-primary text-white hover:bg-black'
            } p-3 hover:bg-primary/40 hover:text-white cursor-pointer rounded-lg items-center`}
          >
            <menu.icon className="h-6 w-6"></menu.icon>
            <h2 className="text-lg">{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
