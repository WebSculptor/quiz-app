import React from "react";

import "./options.scss";

export const OptionsComponent = ({ options, handleClickAnswer, isLoading }) => {
  return isLoading ? (
    <LoadingOptionsComponent />
  ) : (
    options.map((option, _key) => (
      <div
        key={_key}
        className="option relative "
        onClick={handleClickAnswer}
        // className={`option relative ${
        //   option.correct ? "correct" : option.wrong && "wrong"
        // }`}
      >
        <p>{option}</p>
      </div>
    ))
  );
};

const LoadingOptionsComponent = () => {
  return Array.from({ length: 4 }).map((_, _key) => (
    <div key={_key} className="option relative isLoading" />
  ));
};
