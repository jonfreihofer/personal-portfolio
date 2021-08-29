import styled from "styled-components";

export const StyledLinkText = styled.div`
  animation: ${({ hovered }) =>
    hovered ? "animation-title 1s linear forwards" : "none"};
  ${"" /* animation: ${(hovered) => (hovered ? "animation-title" : "none")}; */}
  position: absolute;
  bottom: 0;

  transition: opacity 2s ease;
  &&:hover {
    opacity: ${({ hovered }) => (hovered ? "100%" : "none")};
  }
`;
