import React from 'react';
import Image from 'next/image';
import Logo from '@/components/Logo';
import { Auth } from '@/components/Auth';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
const page = async () => {
  const { userId } = await auth();
  if (userId) {
    return redirect('/dashboard');
  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 pt-[45px]  lg:px-6 h-14 flex items-center">
        <Logo />
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-3">
          <Auth />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap12 xl:grid-cols-[1fr_600px]">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Ultimate Ai Agent & Content generator
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Hello
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
