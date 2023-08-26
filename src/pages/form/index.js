import React from "react";
import { useNavigate } from "react-router-dom";

import "./form.scss";
import { difficultyOptions, typeOptions } from "constants";
import { useAxios } from "hooks/useAxios";
import { SelectOptionsComponent } from "components";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "redux/actions";

export const FormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { response, isError, isLoading } = useAxios({
    url: "/api_category.php",
  });
  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/q");
  };

  return (
    <div className="form_container flex items-center justify-center">
      <div className="form_content flex col">
        <h1>IQ Quest</h1>
        <p>
          Push your knowledge, logic, and critical thinking to the ultimate
          test.
        </p>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>{isError}</p>
        ) : (
          <form className="flex col" onSubmit={handleSubmit}>
            <div className="form_control flex col">
              <label>Number of Questions:</label>
              <div className="input_holder">
                <input
                  type="number"
                  max="50"
                  min="5"
                  placeholder="5"
                  onChange={handleChange}
                />
              </div>
            </div>

            <SelectOptionsComponent
              options={response?.trivia_categories}
              label="Category"
            />
            <SelectOptionsComponent
              options={difficultyOptions}
              label="Difficulty"
            />
            <SelectOptionsComponent options={typeOptions} label="Type" />

            <div className="button_holder flex items-center justify-end">
              <button type="submit">Start</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
