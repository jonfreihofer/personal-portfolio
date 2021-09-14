import styled from "styled-components";

export const StyledLinkText = styled.div`
  animation: ${({ hovered }) =>
    hovered ? "animation-title 1s linear forwards" : "none"};
  position: absolute;
  bottom: 10%;
  transition: opacity 2s ease;
  &&:hover {
    opacity: ${({ hovered }) => (hovered ? "100%" : "0%")};
  }
`;
