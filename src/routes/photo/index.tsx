import PhotoAlbum from "react-photo-album";
import photoheader from '../../assets/photoheader.jpg';
import TubatahaMay20193110 from '../../assets/photos/underwater/Tubataha-May-2019-3110.jpg';

import { Link } from "react-router-dom";
import CliftonGardens2020070835 from '../../assets/photos/underwater/CliftonGardens-20200708-35.jpg';
import _DSC1201 from '../../assets/photos/underwater/_DSC1201.jpg';
import _DSC3851 from '../../assets/photos/underwater/_DSC3851.jpg';
import manatee1 from '../../assets/photos/underwater/_DSC6653.jpg';
import manatee2 from '../../assets/photos/underwater/_DSC7160.jpg';
import _DSC7207 from '../../assets/photos/underwater/_DSC7207.jpg';
import _DSC9156 from '../../assets/photos/underwater/_DSC9156.jpg';

const photos = [
  { src: manatee1, width: 800, height: 600 },
  { src: manatee2, width: 600, height: 800 },
  { src: _DSC7207, width: 600, height: 800 },
  { src: TubatahaMay20193110, width: 800, height: 600 },
  { src: _DSC3851, width: 800, height: 600 },
  { src: _DSC9156, width: 600, height: 800 },
  { src: _DSC1201, width: 600, height: 800 },
  { src: CliftonGardens2020070835, width: 600, height: 800 },
];

export const Component = function PhotoPage() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center p-8">
      {/* Header Section */}
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl font-bold text-white-900">
              Hello! <br />
              I'm <span className="text-yellow-500">Dominik Fretz</span>,<br />
              Welcome to my photography page!
            </h1>
            <br />
            <p className="mt-4 text-lg text-white-700">
              I love taking photos to show other how I see the world. <br />
              Whenever I can, this happens underwater. <br />
              You won't find many people shots here, but I hope you enjoy the photos I have taken.
            </p>
            <p className="mt-4 text-lg text-white-700">
              Interested in a poster or an exclusive, signed print?<br />Reach out here: <Link to="https://www.instagram.com/divewithpassion/">@divewithpassion</Link> <br />
            </p>

          </div>
          <div className="mt-8 md:mt-0 md:w-2/5 flex justify-center">
            <img src={photoheader} alt="Illustration" className="w-80 h-80 object-cover" />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16 w-full max-w-4xl">
        <PhotoAlbum layout="rows" photos={photos} targetRowHeight={370} spacing={30} padding={0} />
      </div>
    </div>
  );
};

