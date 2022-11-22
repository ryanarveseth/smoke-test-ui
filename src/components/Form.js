import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {createTest, updateTest} from "../services/TestService";
import {BACKGROUND, GREEN, RED} from "../util/styles/Colors";
import {CgClose} from "react-icons/cg";
import {Background, Card, GreenButton, ModalFooter, RedButton, Input, Select} from "../util/styles";

const Label = styled.label`
  display: block;
`;

const emptyTest = {
  name: "",
  field: "TEXT",
  value: "",
  testUrl: ""
}

const Form = ({ test = {...emptyTest}, close, onSubmit }) => {
  const [testCase, setTestCase] = useState({...test});
  const [formTitle, setFormTitle] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const updateTestCase = (e) => {
    if (e?.target) {
      const { name, value } = e.target;
      setTestCase(prevState => ({...prevState, [name]: value}));
    }
  }

  const saveTest = (e) => {
    e.preventDefault();
    console.log("submitting test: ", testCase);
    if (testCase.hasOwnProperty("id") || testCase.id) {
      updateTest(testCase)
        .then(onSubmit);
    } else {
      createTest(testCase)
        .then(onSubmit);
    }
  }

  useEffect(() => {
    if (!testCase || !testCase.field) {
      setTestCase(prevState => ({...prevState, field: "TEXT"}));
    }
  }, []);

  useEffect(() => {
    setIsUpdate(!!testCase.id)
    setFormTitle(testCase.id
      ? "Update Test"
      : "Create New Test");
  }, [testCase]);

  return (
    <Background>
      {
        formTitle &&
        <Card>
        <h2>{formTitle}</h2>
          <CgClose onClick={close} className="hoverable" color="lightgray" style={{ width: "fit-content", margin: "0", fontSize: "25px", position: "fixed", right: "24px", top: "24px"  }} />
        <form onSubmit={saveTest}>
          <div>
            <Label htmlFor="name">Test Case Name</Label>
            <Input onChange={updateTestCase}
                   required
                   type="text"
                   value={testCase.name}
                   id="name"
                   name="name"/>
          </div>
          <div>
            <Label htmlFor="testUrl">URL</Label>
            <Input onChange={updateTestCase}
                   required
                   type="url"
                   value={testCase.testUrl}
                   id="testUrl"
                   name="testUrl"/>
          </div>
          {/*<div>*/}
          {/*  <Label htmlFor="field">Search by...</Label>*/}
          {/*  <Select onChange={updateTestCase}*/}
          {/*          required*/}
          {/*          value={testCase.field}*/}
          {/*          id="field"*/}
          {/*          name="field">*/}
          {/*    <option/>*/}
          {/*    <option value="TEXT">*/}
          {/*      Text*/}
          {/*    </option>*/}
          {/*    <option value="ID">*/}
          {/*      Element id*/}
          {/*    </option>*/}
          {/*    <option value="CLASS">*/}
          {/*      Element class*/}
          {/*    </option>*/}
          {/*  </Select>*/}
          {/*</div>*/}
          <div>
            <Label htmlFor="value">{testCase.field
              ? testCase.field[0].toUpperCase() + testCase.field.slice(1).toLowerCase()
              : "Value"
            } to Find
            </Label>
            <Input onChange={updateTestCase}
                   required type="text"
                   value={testCase.value}
                   id="value"
                   name="value"/>
          </div>

          <ModalFooter>
            <RedButton className="hoverable" onClick={close}>Close</RedButton>
            <GreenButton className="hoverable" type="submit">Save</GreenButton>
          </ModalFooter>
        </form>
      </Card>
      }
    </Background>
  );
}

export default Form;