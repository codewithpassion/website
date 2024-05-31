import React from 'react';

export function Frame(props: FrameProps): JSX.Element {
  const { className, mirrored, ...other } = props;
  return (
    <div className={`${className} ${mirrored ? 'transform scale-x-[-1] -translate-y-3' : ''}`} {...other}>
      <svg width="100" height="125" viewBox="0 0 100 127" className="absolute top-[-10%] left-0">
        <line x1="10" y1="4" x2="10" y2="125" stroke="white" strokeWidth="4" />
        <line x1="8" y1="4" x2="70" y2="4" stroke="white" strokeWidth="4" />
        <line x1="8" y1="125" x2="70" y2="125" stroke="white" strokeWidth="4" />
      </svg>
    </div>
  );
}

export type FrameProps = {
  mirrored?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
