import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  display: flex;
`;

interface ColoredTextProps {
  text: string;
}

const ColoredText: React.FC<ColoredTextProps> = ({ text }) => {
  const colors = [ "#23afff", "#ffd315", "#d74b30", "#77b460"];

  return (
    <StyledH1>
      {text.split("").map((char, index) => {
        if (char === " ") {
          return <span key={index}>&nbsp;</span>;
        }
        return (
          <span key={index} style={{ color: colors[index % colors.length] }}>
            {char}
          </span>
        );
      })}
    </StyledH1>
  );
};

export default ColoredText;
