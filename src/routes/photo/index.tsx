import PhotoAlbum from "react-photo-album";
import photoheader from '../../assets/photoheader.jpg';

import { Link } from "react-router-dom";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import { useState } from "react";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import {photos} from "./photos";

export const Component = function PhotoPage() {
  const [index, setIndex] = useState(-1);
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
        <PhotoAlbum layout="rows" photos={photos} targetRowHeight={370} spacing={30} padding={0}
          onClick={({ index }) => setIndex(index)} />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </div>
  );
};

