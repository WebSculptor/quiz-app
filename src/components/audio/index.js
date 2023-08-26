/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Howl } from "howler";

import { VolumeOnIcon, VolumeOffIcon } from "constants";
import bgAudio from "assets/audio/bg.mp3";

export const AudioComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Howl({
    src: [bgAudio],
    format: ["mp3"],
    loop: true,
  });

  useEffect(() => {
    if (isPlaying) {
      sound.play();
    } else {
      sound.pause();
    }

    // Clean up on unmount
    return () => {
      sound.unload();
    };
  }, [isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={toggleAudio} className="flex items-center justify-center">
      {isPlaying ? <VolumeOnIcon /> : <VolumeOffIcon />}
    </button>
  );
};
