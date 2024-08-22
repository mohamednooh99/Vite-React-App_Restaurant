import React from 'react';
import { Link } from 'react-router-dom';
export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block bg-yellow-500 rounded uppercase text-sm  font-semibold   hover:bg-yellow-600 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2  tracking-wide disabled:cursoe-not-allowed ';
  const styles = {
    primary: base + ' px-3 py-2 md:px-6 md:py-4 ',
    small:
      base +
      ' px-3 py-2 md:px-5 md:py-2.5 max-sm:tracking-tighter text-xs  max-sm:p-1 ',
    secondary:
      'inline-block  border-2 px-3 py-2 md:px-6 md:py-4  rounded uppercase text-sm font-semibold hover:bg-stone-200 text-stone-400 hover:text-stone-700 transition-colors duration-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2  tracking-wide disabled:cursoe-not-allowed ',
    round:
      base + 'px-2 py-1 md:px-3.5 md:py-2 text-sm max-sm:px-1 max-sm:py-0.5 ',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {' '}
        {children}{' '}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
