import React, { useRef, useState } from "react";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Tracks the current video index
    const [hasClicked, setHasClicked] = useState(false); // Indicates if the video has been clicked
    const [loading, setLoading] = useState(true); // Manages the loading state of the video
    const [loadedVideos, setLoadedVideos] = useState(0); // Counts the total number of loaded videos

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };
    const upcomingVideoIndex = (currentIndex % totalVideos) +1 ;
    const  handleMiniVdClick =() => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-[#DFDFF0]"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg" >
            <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                {/* MiniVideoPlayer */}
                <video
                  ref={nextVideoRef}
                  src={getVideoSrc(upcomingVideoIndex)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-[#dfdff2]">
          G<b>A</b>MING
        </h1>
        
      </div>
    </div>
  );
};

export default Hero;
