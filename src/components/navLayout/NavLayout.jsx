import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './NavLayout.module.css';

export default function NavLayout() {
  return (
    <div>
      <header>
        <menu className={css.menuStyle}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.link}>
            Movies
          </NavLink>
        </menu>
      </header>
      <Outlet />
    </div>
  );
}
