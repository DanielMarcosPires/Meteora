import React, { ComponentProps } from "react";

export default function Box({ children, ...props }: ComponentProps<"div">) {
  return (
    <div {...props}>
      {children}
    </div>
  );
}
