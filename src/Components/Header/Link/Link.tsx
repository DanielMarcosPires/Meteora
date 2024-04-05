import { ComponentProps } from "react";

export default function Link({ children, ...props }:ComponentProps<"a">) {
  return (
    <a className={"font-semibold border-b py-4"} {...props}>
      {children}
    </a>
  );
}
