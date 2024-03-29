import { ButtonHTMLAttributes } from "react";

export function FlatButton({
  props,
  children,
}: {
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode;
}) {
  return (
    <button className="flat-button" {...props}>
      {children}
    </button>
  );
}

export function OutlinedButton({
    props,
    children,
  }: {
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    children: React.ReactNode;
  }) {
    return (
      <button className="outlined-button" {...props}>
        {children}
      </button>
    );
  }