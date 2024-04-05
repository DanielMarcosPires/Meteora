import React, { ComponentProps } from "react";

export default function Form({
  children,
  className,
  ...props
}: ComponentProps<"form">) {
  return (
    <form {...props}>
      <div className={className}>{children}</div>
    </form>
  );
}
