/* SPDX-FileCopyrightText: 2024-present Codewithpassion */
/* SPDX-License-Identifier: MIT */


export function Skill(props: SkillProps): JSX.Element {
  const { className, ...other } = props;

  return (

    <div className={`flex flex-col items-start bg-sky-950 p-6 rounded-lg shadow-md ${className}`}>
      {other.logoSrc && (<img src={other.logoSrc} alt="TypeScript/JavaScript" className="w-10 h-10" />)}

      <h3 className={`${other.logoSrc ? 'mt-4' : ''} text-xl font-bold`}>{other.title}</h3>
      <p className="mt-2 text-white-700">
        {other.description}
        {other.children}
      </p>
    </div>

  );
}

export type SkillProps = {
  logoSrc?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

