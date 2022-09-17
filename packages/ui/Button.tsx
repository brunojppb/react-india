import * as React from "react";

const style = {
  fontWeight: "bold",
  padding: "0 3.5rem",
  height: "2.81rem",
  lineHeight: "2.8rem",
  borderRadius: "7px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
};

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <button style={style} {...rest}>
      {children}
    </button>
  );
};
