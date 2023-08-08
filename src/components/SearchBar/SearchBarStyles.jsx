import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 50px;
  padding: 5px;
  max-width: 300px;
  margin: 0 auto;
  /* margin-top: 20px; */
  /* margin-bottom: 50px; */

  @media screen and (min-width: 1024px) {
    max-width: 720px;
    height: 50px;
  }
`;

export const InputField = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 5px;
  font-size: 16px;
  margin-left: 5px;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;
