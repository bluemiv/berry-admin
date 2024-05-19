import React from 'react';
import { ROUTE_PATH } from '@/routes';
import { LinkButton } from '@/components';

const Logo = () => {
  return (
    <section className="h-[120px] flex flex-col items-center justify-center gap-md uppercase">
      <LinkButton to={ROUTE_PATH.ROOT} className="text-xl font-bold">
        Berry Admin
      </LinkButton>
      <span className="text-zinc-500">Dashboard</span>
    </section>
  );
};

export default Logo;
