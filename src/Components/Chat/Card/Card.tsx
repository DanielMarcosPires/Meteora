import React, { ComponentProps } from "react";

export default function Card({children}: ComponentProps<"div">) {
  return <div className="my-2">{children}</div>;
}
