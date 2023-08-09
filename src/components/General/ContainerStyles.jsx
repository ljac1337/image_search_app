import styled from "styled-components";

export const ContainerInner = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;

  @media screen and (min-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
    width: 720px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    width: 1000px;
  }
`;
