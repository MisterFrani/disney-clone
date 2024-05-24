import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import CallApi from "../services/CallApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const widthSlider = window.innerWidth;

interface Movie {
  backdrop_path: string;
  name?: string;
  title?: string;
}

export default function Slider() {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);

  const imageSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    CallApi.getVideos.then((resp: { data: { results: Movie[] } }) => {
      console.log(resp.data.results);
      setMoviesList(resp.data.results);
    });
  };

  const handleNext = (el: HTMLDivElement) => {
    el.scrollLeft += widthSlider - 110;
  };

  const handlePrev = (el: HTMLDivElement) => {
    el.scrollLeft -= widthSlider - 110;
  };

  return (
    <>
      <div className="relative  z-[60]  mt-[5rem]">
        <IoIosArrowBack
          onClick={() => handlePrev(imageSliderRef.current!)}
          className="hidden md:block text-white text-[25px] absolute mx-8 mt-[250px] cursor-pointer z-[60]  "
        />

        <IoIosArrowForward
          onClick={() => {
            console.log("handleNext is called");
            handleNext(imageSliderRef.current!);
          }}
          className="hidden md:block text-white text-[25px] absolute mx-8 mt-[250px] cursor-pointer  right-0 z-[60]  "
        />
        <div
          className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
          ref={imageSliderRef}
        >
          {moviesList.map((item, index) => (
            <div
              className="relative min-w-full md:h-[500px] mr-5 rounded-md hover:border-[4px] border-gray-200 cursor-pointer transition-all "
              key={index}
            >
              <img
                className="w-full h-full object-cover object-left-top "
                src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
                alt="movie"
              />

              <h2 className="font-semibold text-white text-4xl absolute bottom-[2rem] left-[2rem] ">
                {item.name ? item.name : item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
