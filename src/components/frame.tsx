import React from 'react';

export function Frame(props: FrameProps): JSX.Element {
  const { className, mirrored, ...other } = props;
  const verticalX = mirrored ? 68 : 10;
  return (
    <div className={`${className} absolute`} {...other}>
      <svg width="100" height="100%" viewBox="0 0 100 127" >
        <line x1={verticalX} y1="4" x2={verticalX} y2="125" stroke="white" strokeWidth="4" />
        <line x1="8" y1="4" x2="70" y2="4" stroke="white" strokeWidth="4" />
        <line x1="8" y1="125" x2="70" y2="125" stroke="white" strokeWidth="4" />
      </svg>
    </div>
  );
}

export type FrameProps = {
  mirrored?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
