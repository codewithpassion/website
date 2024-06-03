import moment from 'moment';
import React, { useMemo } from 'react';

const WorkHistory: React.FC<{ flag: string, startDate: Date, endDate: Date | undefined, title: string, url: string | undefined, companyName: string, type: string, location: string, lines: string[] }> = ({
  companyName,
  url,
  location,
  title,
  startDate,
  endDate,
  type,
  lines,
  flag
}) => {
  const duration = useMemo(() => {
    const startDateM = moment(startDate);
    const duration = moment.duration(moment(endDate).diff(startDateM));

    const years = duration.years() > 1 ? `${duration.years()} years` : duration.years() == 0 ? '' : `${duration.years()} year`;
    const months = duration.months() > 1 ? `${duration.months()} months` : duration.months() == 0 ? '' : `${duration.months()} month`;
    return `${years} ${months}`;

  }, [startDate, endDate]);

  return (

    <div className="relative mb-8">


      <span className="absolute -left-8 top-2.5 block size-3 bg-orange-500 rounded-full" role="none">
        <span className="absolute -left-px -top-px size-full bg-orange-500 rounded-full opacity-75 animate-ping md:size-3.5"
          style={{ "animationDuration": "1.25s" }}>
        </span>
      </span>

      <div className="mb-2 text-dark-blue-950 dark:text-slate-100">
        <h3 className="mb-0.5 font-medium text-heading-5 dark:text-slate-100">
          {title}
        </h3>
        <div
          className="flex items-center gap-2 font-[375] text-caption md:gap-2.5 md:text-body-3"
        >
          {url && (
            <a
              className="relative inline-block transition-colors hover:dark:text-slate-100 after:inline-block after:absolute after:inset-x-0 after:h-px after:bg-orange-500 after:transition-[height] hover:after:h-[0.1875rem] text-dark-blue-950 dark:text-slate-100 after:-bottom-0.5 md:after:bottom-0"
              href={url}
              rel="noreferrer"
              target="_blank"
            >{companyName}
            </a>
          )}
          {!url && companyName}

          <span className="size-1.5 rounded-full bg-neutral-300 dark:bg-slate-600" role="none"></span>
          <span className="flex items-center gap-x-2">
            <span className="grid w-6 h-3">
              <img src={flag} alt="flag" style={{ height: "1rem" }} />
            </span>{location}
          </span>
          <span className="size-1.5 rounded-full bg-neutral-300 dark:bg-slate-600" role="none"></span>
          {type}
        </div>
      </div>
      <div
        className="mb-3 font-normal text-caption text-neutral-700 dark:text-slate-400"
      >
        {moment(startDate).format('MMMM YYYY')} ‐ {endDate ? moment(endDate).format("MMM YYYY") : 'Present'} - {duration}
      </div>
      <ul className="pl-7 text-body-3">
        {lines.map((line) => (<>
          <li
            className="relative before:absolute before:top-3.5 before:-left-4 before:block before:size-1 before:bg-dark-blue-950 before:rounded-full before:dark:bg-slate-300"
          >
            {line}
          </li>
        </>))}
      </ul>
    </div>
  );
};

export { WorkHistory };
