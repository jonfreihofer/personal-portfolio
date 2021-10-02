import styled from "styled-components";
import "../../App.css";
import "../../index.css";

export const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  margin: 12px;
  border-radius: 15px;
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  background: var(--color-main-blue);
  box-shadow: var(--global-box-shadow);
  display: flex;
  text-align: center;
  justify-content: space-between;
  border-radius: 15px;
  height: 100vh;
  width: auto;
`;
