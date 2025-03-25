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
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
