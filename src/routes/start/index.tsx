import { Link } from 'react-router-dom';
import coding from '../../assets/coding.png';
import photo from '../../assets/photo.jpg';
import { Frame } from '../../components/frame';

const hover = 'transform transition-transform duration-300 hover:scale-110'

export const Component = function Start(props: DashboardProps): JSX.Element {
  const { className, ...other } = props;

  return (
    <div className={`${className} flex h-screen relative`} {...other}>
      {/* <div className="absolute w-full flex  z-10" style={{ top: '20px' }}>
        <Logo />
      </div> */}

      <div className="w-1/2 bg-gray-800 flex items-center justify-center overflow-hidden relative">
        <img src={coding} alt="Coding" className="object-cover object-center h-full w-full" />
        <div className="absolute inset-0 bg-[#22211E] opacity-70"></div>
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <Link to="/coding" className={`relative ${hover} cursor-pointer`}>
            <Frame />
            <div className="text-white text-8xl font-bold pl-16 relative" style={{ left: '-5%' }}>
              CODING
            </div>
          </Link>
        </div>
      </div>
      <div className="w-1/2 bg-blue-500 flex items-center justify-center overflow-hidden relative">
        <img src={photo} alt="Shark" className="object-cover object-center h-full w-full" />
        <div className="absolute inset-0 bg-[#22211E] opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className={`relative ${hover} cursor-pointer`}>
            <Frame mirrored />
            <div className="text-white text-8xl font-bold pl-16 relative" style={{ left: '-10%' }}>
              PHOTO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export type DashboardProps = React.HTMLAttributes<HTMLDivElement>;