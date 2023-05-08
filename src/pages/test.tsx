import React, { use, useEffect, useRef, useState } from "react";

const TestPage = () => {
  const [valueInput, setValueInput] = useState("dt");
  const [name, setName] = useState("fullname");

  const handleSubmit = (input: any) => {
    console.log("input", input);
    setValueInput(input[name])
  };

  console.log('rerender parent')
  return (
    <div
      style={{
        padding: "50px",
      }}
    >
      <InputTest
        valueInput={valueInput}
        nameInput={name}
        onSubmit={handleSubmit}
      ></InputTest>
    </div>
  );
};

export default TestPage;

export interface ParamObject {
  [key: string]: any;
}

const InputTest = ({ valueInput, nameInput, onSubmit }: any) => {
  const inputVal = useRef<ParamObject>({});

  const handleSubmit = () => {
    console.log(inputVal.current)
    onSubmit(inputVal.current);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    console.log(name, value)
    inputVal.current[name] = value;
  };

  useEffect(() => {
    const inputElement = document.getElementsByName(
        nameInput.toString()
    )[0] as HTMLInputElement;
    inputElement.value = inputVal.current[nameInput];
  }, [inputVal]);

  
  useEffect(() => {
    const inputElement = document.getElementsByName(
        nameInput.toString()
    )[0] as HTMLInputElement;
    inputElement.value = valueInput;
  }, [])

  useEffect(() => {
    return () => {
      inputVal.current = {};
    };
  }, []);

  console.log('rerender child')
  return (
    <div>
      <input onChange={handleChange} type="text" name={nameInput} />
      <button
        onClick={() => {
          handleSubmit()
        }}
      >
        Change
      </button>
    </div>
  );
};
