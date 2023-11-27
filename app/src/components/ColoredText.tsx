import React from "react";
import styled from "styled-components";

interface ColoredTextProps {
  text: string;
  size?: number;
}

const ColoredText: React.FC<ColoredTextProps> = ({ text, size }) => {
  const colors = [ "#23afff", "#ffd315", "#d74b30", "#77b460"];

  return (
    <StyledH1 size={size}>
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

const StyledH1 = styled.h1<{
  size?: number;
}>`
  display: flex;
  font-size: ${({ size }) => size && `${size}px`};
`;