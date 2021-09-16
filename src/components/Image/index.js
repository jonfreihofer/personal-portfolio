import React from "react";
import { StyledImage } from "./styles.js";

export default function Image({ alt, src, children }) {
  return (
    <div className="imageWrapper">
      <StyledImage src={src} alt={alt} />;
    </div>
  );
}
