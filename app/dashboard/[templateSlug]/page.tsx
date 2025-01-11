'use client';
import { contentTemplates } from '@/lib/contentTemplate';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import { Loader } from 'lucide-react';
import Editor from './_components/Editor';
const page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const params = useParams();
  const { templateSlug } = params;

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === templateSlug
  );
  console.log(selectedTemplate);
  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded  ">
        <h2 className="font-medium">{selectedTemplate?.name}</h2>
      </div>
      <form action="">
        <div className="flex flex-col gap-4 p-5 mt-5 bg-white">
          {selectedTemplate?.form?.map((form, i) => (
            <div key={form.name}>
              <label>{form.label}</label>
              {form.field === 'input' ? (
                <div className="mt-5">
                  <Input name="title" />
                </div>
              ) : (
                <div className="mt-5">
                  <Textarea name="description" className={cn('resize-none')} />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button type="submit" className="mt-5">
          {isLoading ? (
            <Loader className=" animate-spin"></Loader>
          ) : (
            'Generate Content'
          )}
        </Button>
      </form>
      <div>
        <Editor value="value" />
      </div>
    </div>
  );
};

export default page;
