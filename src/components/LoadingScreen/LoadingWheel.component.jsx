import React from "react";
import styled from "styled-components";
import "./LoadingWheel.style.css";

const LoadingWheel = styled.div`
  margin: 0 auto;
  width: 32px;
  height: 32px;
  border: solid 6px rgba(255,255,255,0);
  border-left: solid 6px navy;
  border-right: solid 6px navy;
  border-radius: 50%;

  animation: rotate 0.5s linear infinite;
`;

export default LoadingWheel;