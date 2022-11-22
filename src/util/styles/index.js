import styled from "styled-components";
import {BACKGROUND, GRAY, GREEN, RED, YELLOW} from "./Colors";

export const Card = styled.div`
  
  min-width: 450px;
  max-height: 750px; 
  max-width: 600px;
  background: ${BACKGROUND};
  border-radius: 16px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -75%);
  padding: 24px;
  color: white;
  box-shadow: 5px 10px 8px #000000;
  h2 {
    margin-top: 0;
  }
`;

export const Background = styled.div`
left: 0;
top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, .66);
`;

export const ModalFooter = styled.div`
  text-align: right;
  display: grid;
  grid-template-columns: min-content min-content;
  grid-column-gap: 16px;
  justify-content: right;
  button {
    padding: 8px 12px; 
    border-radius: 8px;
    color: white;
    font-size: 16px;
  }
  margin-top: 20px;
`;

export const RedButton = styled.button`
  background: transparent;
  border: 2px solid ${RED};
  &:hover {
    background: ${RED};
  }
  box-shadow: 2px 4px 4px #111111;
`;

export const GrayButton = styled.button`
  background: transparent;
  border: 2px solid ${GRAY};
  &:hover {
    background: ${GRAY};
  }
  box-shadow: 2px 4px 4px #111111;
`;

export const GreenButton = styled.button`
  background: transparent;
  border: 2px solid ${GREEN};
  &:hover {
    background: ${GREEN};
  }
  box-shadow: 2px 4px 4px #111111;
`;

const inputStyles = `
  padding: 8px 12px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  width: 100%;
  border: none;
  border-radius: .25rem;
  &:focus {
    outline: none;
  }
`;

const smallStyles = `
  padding: 4px 6px;
  margin: 6px;
  font-size: 12px;
`;

export const Input = styled.input([inputStyles]);
export const Select = styled.select([inputStyles]);

export const SmallInput = styled.input([inputStyles + smallStyles]);

export const Dot = styled.div`
  background: ${
  ({status}) => status < 300
    ? GREEN
    : status < 400
      ? YELLOW
      : RED
  };
  height: 12px;
  width: 12px;
  border-radius: 50%;
  margin: 0 auto;
`;
