import React, { ComponentProps } from "react";

export default function Topics({ children, ...props }: ComponentProps<"div">) {
  return <div {...props}>{children}</div>;
}
