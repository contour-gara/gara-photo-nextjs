import React from "react";

export const SpaceToBr = (props: Props) => {
  const texts: string[] = props.text.split(" ");
  return (
    <span>
      {texts.map((text: string, index: number) => (
        <React.Fragment key={index}>
          {text}
          {index < texts.length - 1 && <br />}
        </React.Fragment>
      ))}
    </span>
  );
};

interface Props {
  text: string;
}
