import React from "react";
import "../styles.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return <button className="btn" onClick={onClick} disabled={disabled}>{text}</button>;
};
