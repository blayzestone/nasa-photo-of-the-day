import React from "react";
import styled from "styled-components";

const MetaDataContainer = styled.div`
  width: 100%;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

function AstronomyMeta({date, copyright}) {
  return(
    <MetaDataContainer>
      <span>{date}</span>
      <span>@ {copyright}</span>
    </MetaDataContainer>
  );
}

export default AstronomyMeta;