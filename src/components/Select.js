import React, { Component, useState } from "react";
import { Form } from "@availity/form";
import { SelectField } from "@availity/select";
import { Button } from "reactstrap";
import * as yup from "yup";
import "@availity/yup";
import Route from "react-router";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

export default function Select() {
  //
  //onChange = (e) => {
  //this.props.history.push(`/${e.target.value}`);
  // };
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState(options[0]);
  //navigate to other Component
  const otherPage = () => {
    history.push(`/{selectedOption}`);
  };
  const options = ["Home", "Login"];
  return (
    <div>
      <Form
        initialValues={{
          justTheInput: undefined
        }}
        validationSchema={yup.object().shape({
          justTheInput: yup.string().required("This field is required.")
        })}
      >
        <SelectField
          label="Select the page "
          name="justTheInput"
          isMulti={false}
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}
          >
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectField>
        <Button
          className="mt-3"
          onClick={otherPage}
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
