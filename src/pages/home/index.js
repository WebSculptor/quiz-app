import React, { useEffect, useState } from "react";
import { Howl, Howler } from "howler";

import "./home.scss";
import { PrevIcon, NextIcon, VolumeOffIcon, VolumeOnIcon } from "constants";
import bgAudio from "assets/audio/bg.mp3";

export const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Howl({
    src: [bgAudio], // Replace with the path to your audio file
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

  const options = [
    {
      id: "A",
      option: "True",
      correct: true,
    },
    {
      id: "B",
      option: "False",
      wrong: true,
    },
    // {
    //   id: "C",
    //   option: "True",
    //   wrong: true,
    // },
    // {
    //   id: "C",
    //   option: "True",
    // },
  ];

  return (
    <div className="home_container flex">
      <div className="home-left_container flex col">
        <div className="question_header flex items-center justify-between">
          <h1>IQ Quest</h1>
          <div className="question_header-right flex items-center">
            <h2>00:00:00</h2>
            <button
              onClick={toggleAudio}
              className="flex items-center justify-center"
            >
              {isPlaying ? <VolumeOnIcon /> : <VolumeOffIcon />}
            </button>
          </div>
        </div>
        <div className="question_container flex col">
          <h2>Question 13 of 27</h2>
          <p>
            Which video game earned music composer Mike Morasky the most awards
            for his work?
          </p>
        </div>
        <div className="question_footer flex col">
          <p>Quit quiz?</p>
        </div>
      </div>
      <div className="home-right_container">
        <div className="question_header flex items-center justify-between">
          <p>Select one answer</p>
          <div className="button_controllers flex items-center">
            <button className="flex items-center justify-center">
              <PrevIcon />
            </button>
            <button className="flex items-center justify-center">
              <NextIcon />
            </button>
          </div>
        </div>
        <div className="options_wrapper flex col">
          {options.map((option, _key) => (
            <div
              key={_key}
              className={`option relative ${
                option.correct ? "correct" : option.wrong && "wrong"
              }`}
            >
              <p>{option.option}</p>
              <span className="absolute">{option.id}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
