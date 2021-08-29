import React from "react";
import { StyledLinkText } from "./styles";

export default function LinkText({ children, id, hovered }) {
  return <StyledLinkText hovered={hovered}>{children}</StyledLinkText>;
}
