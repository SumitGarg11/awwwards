import React, { useState } from "react";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Tracks the current video index
    const [hasClicked, setHasClicked] = useState(false); // Indicates if the video has been clicked
    const [loading, setLoading] = useState(true); // Manages the loading state of the video
    const [loadedVideos, setLoadedVideos] = useState(0); // Counts the total number of loaded videos


    const  handleMiniVdClick =() => {

    }
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-[#DFDFF0]"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg" >
            <div>
                MiniVideoPlayer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
