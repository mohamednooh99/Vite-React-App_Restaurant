import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../features/order/Search';
import Username from './../features/user/Username';

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between border-stone-400 bg-yellow-500 px-4 py-3 font-semibold uppercase sm:px-6">
      <Link className="text-sm tracking-widest max-sm:tracking-tighter" to="/">
        {' '}
        Fast React Pizza co.{' '}
      </Link>
      <Search className="basis-1/2" />
      <Username />
    </header>
  );
}
