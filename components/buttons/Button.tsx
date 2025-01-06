'use client';

import { useState } from 'react';

export interface ButtonProps {
  title: string;
  callback: () => void;
}

export default function Button(props: ButtonProps) {
  const [title, setTitle] = useState<string>(props.title);
  const onSubmit = (e: any) => {
    e.preventDefault();
    props.callback();
  };

  return (
    <div className="">
      <input
        type="submit"
        onClick={onSubmit}
        value={title}
        className="rounded bg-orange-600 w-full  h-10 md:h-16 cursor-pointer hover:bg-orange-400 transition duration-500"
      />
    </div>
  );
}
