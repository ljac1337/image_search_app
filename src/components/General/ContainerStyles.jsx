import styled from "styled-components";
import { HeartIcon } from "@heroicons/react/24/solid";

export const HearthIcon = styled(HeartIcon)`
  width: 50px;
  cursor: pointer;
  color: red;
`;

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

export const ContainerIcon = styled.div`
  position: relative;
  display: inline-block;
`;

export const HeartParagraph = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -160%);
  font-size: 14px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
