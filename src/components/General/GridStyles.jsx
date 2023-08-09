import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  width: 400px;

  @media screen and (min-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
    width: 720px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: masonry;
    width: 1000px;
    align-content: start;
  }
`;
