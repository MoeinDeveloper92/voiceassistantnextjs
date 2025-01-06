'use client';
import 'regenerator-runtime/runtime';

import React from 'react';
import Button from '@/components/buttons/Button';

const page = () => {
  const startCovnersation = () => {
    console.log('Submitted!');
  };
  return (
    <div className="w-full max-sm:px-8  max-w-screen-md mx-auto">
      <div className="">
        <div className="pt-12 font-extrabold text-4xl  sm:text-8xl">
          <h2>WHERE TO EXPLORE</h2>
        </div>
      </div>

      <div className="text-md sm:text-lg mt-10 ">
        use your voice to converse in this GPT_POWERED APP to get suggestions on
        places to go in the country you wish to explore and visit! Simply tap on
        the button below to start the conversation!
      </div>
      <div className="pt-12">
        <Button title="Let's Go" callback={startCovnersation} />
      </div>
    </div>
  );
};

export default page;
