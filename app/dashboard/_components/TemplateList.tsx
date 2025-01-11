'use client';
import React, { useEffect, useState } from 'react';
import { contentTemplates } from '@/lib/contentTemplate';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
const TemplateList = ({ searchInput }: { searchInput: string }) => {
  const [templateList, setTemplateList] = useState(contentTemplates);
  const searchParams = useSearchParams();
  const searchCategory = searchParams.get('category');

  useEffect(() => {
    if (searchCategory === 'All') {
      setTemplateList(contentTemplates);
    } else if (searchCategory) {
      const filteredTemplates = contentTemplates.filter(
        (item) => item.category === searchCategory
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [searchCategory]);

  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      const filtered = contentTemplates.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
      );
      setTemplateList(filtered);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [searchInput]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 ml-5">
      {templateList.map((contentTemplate, i) => (
        <div key={contentTemplate.slug}>
          <Link
            className="bg-white w-full rounded-lg h-[200px] p-4 text-center flex flex-col justify-center items-center"
            href={`/dashboard/${contentTemplate.slug}`}
          >
            <contentTemplate.icon className="h-12 mx-auto w-12"></contentTemplate.icon>
            <h2 className="mt- font-semibold">{contentTemplate.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TemplateList;
