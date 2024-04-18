'use client';

import { FormEvent } from 'react';
import { Icons } from '@/components';
import Breadcrumb from '@/components/Layout/Header/Breadcrumb';
import PageTitle from '@/components/Layout/Header/PageTitle';

export default function Header() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <header className="flex justify-between items-end h-[150px] gap-md p-md">
      <div className="flex flex-col gap-md">
        <PageTitle />
        <Breadcrumb />
      </div>
      <div className="flex items-center">
        <form
          onSubmit={onSubmit}
          className="flex items-center p-md bg-white h-[40px] rounded-[40px]"
        >
          <input
            className="outline-none w-[180px] focus:w-[220px] transition ease-in-out duration-200"
            type="text"
            placeholder="Search"
          />
          <button>
            <Icons.Search />
          </button>
        </form>
      </div>
    </header>
  );
}
