import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logoipsum-282.svg';
import { MuseoModerno } from 'next/font/google';
import { cn } from '@/lib/utils';
const museo = MuseoModerno({
  weight: '700',
  subsets: ['latin'],
});
const Logo = () => {
  return (
    <div>
      <Link href={'/'} className="flex flex-col items-center gap-2">
        <Image src={logo} width={34} height={34} alt="Logo" priority />
        <h2 className={cn(museo.className, 'text-xl')}>Magic Social Media</h2>
      </Link>
    </div>
  );
};

export default Logo;
