import React, { ComponentProps } from "react";

export default function Box({children}:ComponentProps<"div">) {
  return <div className="flex flex-col border overflow-y-scroll">{children}</div>;
}
