import React from 'react';
import { Link } from 'react-router-dom';
import coding from '../../assets/coding.png';
import photo from '../../assets/photo.jpg';
import { Frame } from '../../components/frame';

const transform = "transform transition-transform duration-300"
const hover = `${transform} hover:scale-110`
const cell = ``

const Cell: React.FC<{ bgColor: string, mirrored: boolean, text: string, link: string, bgImage: string, bgAlt: string }> = ({ bgColor, mirrored, link, text, bgAlt, bgImage }) => {
  return (<div className={`${bgColor} ${cell} w-1/2 h-screen flex relative`}>
    <img src={bgImage} alt={bgAlt} className="object-cover object-center h-full w-full" />
    <div className="absolute inset-0 bg-[#22211E] opacity-70"></div>
    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <Link to={link} className={`relative ${hover} cursor-pointer flex ${mirrored ? 'flex-row-reverse' : ''} `}>
        <Frame mirrored={mirrored} className={`${mirrored ? 'mr-[-3rem]' : 'ml-[-2rem]'} lg:h-[7.75rem] md:h-[5.25rem]`} />
        <div className={`text-white font-bold w-full relative  text-5xl  md:text-6xl lg:text-8xl pt-2`}>
          {text}
        </div>
      </Link>
    </div>
  </div>
  );
};


export const Component = function Start(props: DashboardProps): JSX.Element {
  const { className, ...other } = props;

  return (
    <div className={`${className} flex flex-col md:flex-row h-screen relative`} {...other}>
      <Cell bgColor="bg-gray-800" mirrored={false} text="CODING" link="/coding" bgAlt='Coding' bgImage={coding} />
      <Cell bgColor="bg-blue-500" mirrored={true} text="PHOTO" link="/photo" bgAlt='Shark' bgImage={photo} />
    </div>
  );
}

export type DashboardProps = React.HTMLAttributes<HTMLDivElement>;