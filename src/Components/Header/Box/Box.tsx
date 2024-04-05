import React, { ComponentProps } from "react";

export default function Box({children, ...props}:ComponentProps<"header">) {
  return <header {...props}>{children}</header>;
}
