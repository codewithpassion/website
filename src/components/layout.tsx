/* SPDX-FileCopyrightText: 2024-present Codewithpassion */
/* SPDX-License-Identifier: MIT */

import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Logo } from './logo';

/**
 * The main application layout.
 */
export function MainLayout(): JSX.Element {
  return (
    <Fragment>
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen w-screen">

        <Logo className="row-start-1 row-end-2 col-start-1 col-end-2 z-10" />

        <div className="col-start-1 col-end-[-1] row-start-1 row-end-[-1] pt-[60px]">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </Fragment>
  );
}

/**
 * The minimal app layout to be used on pages such Login/Signup,
 * Privacy Policy, Terms of Use, etc.
 */
export function BaseLayout(): JSX.Element {
  return (
    <Fragment>
      <Suspense>
        <Outlet />
      </Suspense>
    </Fragment>
  );
}