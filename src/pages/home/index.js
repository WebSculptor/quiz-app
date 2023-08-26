import React, { useEffect, useState } from "react";

import "./home.scss";
import { PrevIcon, NextIcon } from "constants";
import { useAxios } from "hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { getRandomInt } from "utils";
import { handleScoreChange } from "redux/actions";
import { Link, useNavigate } from "react-router-dom";
import {
  AudioComponent,
  OptionsComponent,
  QuestionComponent,
} from "components";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_questions,
    score,
  } = useSelector((state) => state);
  let apiUrl = `/api.php?amount=${amount_of_questions}`;

  const { response, isLoading } = useAxios({
    url: apiUrl,
  });

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }

  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }

  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/r");
    }
  };

  return (
    <div className="home_container flex">
      <div className="home-left_container flex col">
        <div className="question_header flex items-center justify-between">
          <h1>
            <Link to="/">IQ Quest</Link>
          </h1>
          <div className="question_header-right flex items-center">
            <h2>00:00:00</h2>
            <AudioComponent />
          </div>
        </div>
        <QuestionComponent
          isLoading={isLoading}
          response={response}
          questionIndex={questionIndex}
        />
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
          <OptionsComponent
            isLoading={isLoading}
            options={options}
            handleClickAnswer={handleClickAnswer}
          />
        </div>
      </div>
    </div>
  );
};
