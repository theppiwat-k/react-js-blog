import React, {MouseEvent} from "react";

interface Props {
  text: string;
  type: "button" | "submit";
  id: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function PrimaryButton({text, type, id, className, onClick}: Props) {
  const buttonStyle = className
    ? `${className} hover:bg-blue-dark rounded bg-blue-600 px-4 py-2 font-bold text-white`
    : `hover:bg-blue-dark rounded bg-blue-600 px-4 py-2 font-bold text-white`;

  return (
    <>
      <button type={type} id={id} className={buttonStyle} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
