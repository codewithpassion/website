/* SPDX-FileCopyrightText: 2024-present Codewithpassion */
/* SPDX-License-Identifier: MIT */

import { Link } from 'react-router-dom';

export function Logo(props: LogoProps): JSX.Element {
 const { className, ...other } = props;

 return (
   <div
     className={`py-4 px-8 flex items-center gap-4 ${className}`}
     {...other}
   >
     <div className="text-2xl font-bold">
        <Link to="/" className="text-primary-600">
        </Link>
     </div>
   </div>
 );
}

export type LogoProps = React.HTMLAttributes<HTMLDivElement>;