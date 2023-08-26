/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

import "./questions.scss";

export const QuestionComponent = ({ response, questionIndex, isLoading }) => {
  return isLoading ? (
    <LoadingQuestionComponent />
  ) : (
    <div className="question_container flex col">
      <h2 className="category">{response?.results[questionIndex].category}</h2>
      <h2>
        Question {questionIndex + 1} of {response?.results.length}
      </h2>
      <div className="question">
        <p>{response?.results[questionIndex].question}</p>
      </div>
    </div>
  );
};

const LoadingQuestionComponent = () => {
  return (
    <div className="question_container flex col">
      <h2 className="category isLoading" />
      <h2 className="remainder isLoading" />
      <div className="question flex col">
        <p className="isLoading" />
        <p className="isLoading" />
      </div>
    </div>
  );
};
