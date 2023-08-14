import styled from "styled-components";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

export const StyledExpand = styled(ArrowsPointingOutIcon)`
  width: 24px;
  position: absolute;
  top: 6px;
  right: 6px;
  background-color: #ffffff55;
  border-radius: 2px;
  cursor: pointer;
  display: none;
`;

export const LikeIcon = styled(HeartIcon)`
  width: 72px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000000;
  cursor: pointer;
  fill: ${(props) => (props.$isLiked ? "red" : "transparent")};
  transition: all 0.3s ease;

  &:hover {
    fill: ${(props) => (props.$isLiked ? "#ff000055" : "#00000055")};
  }
`;

export const ImageContainer = styled.div`
  /* max-width: 300px; */
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0 auto;
  transition: all 0.2s ease-out;
  position: relative;

  &:hover {
    transform: translateY(-3px);
    ${StyledExpand} {
      display: block;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
