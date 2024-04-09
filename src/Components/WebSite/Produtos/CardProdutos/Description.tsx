import React from "react";
interface DescriptionProps extends React.ComponentProps<"div">{}
export default function Description({children, ...props}:DescriptionProps) {
  return <div {...props}>{children}</div>;
}
