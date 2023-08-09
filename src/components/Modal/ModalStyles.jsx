import styled from "styled-components";
import { XMarkIcon } from "@heroicons/react/24/solid";

export const ModalWrapper = styled.div`
  position: fixed;
  background-color: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 10px;
`;

export const CloseIcon = styled(XMarkIcon)`
  width: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
  color: #000000;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: #00000080;
  backdrop-filter: blur(3px);
`;
