import React from "react";

interface BoxProps extends React.ComponentProps<"ul">{

}
export default function Box({children, ...props}:BoxProps) {
  return <ul {...props}>{children}</ul>;
}
