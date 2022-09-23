import React from "react";

const style = {
  fontWeight: "bold",
  padding: "0 3.5rem",
  height: "2.81rem",
  lineHeight: "2.8rem",
  borderRadius: "7px",
  backgroundColor: "blue",
  color: "white",
  border: "none",
};

type UltimateButtonProps = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({ children, onClick }: UltimateButtonProps) {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
