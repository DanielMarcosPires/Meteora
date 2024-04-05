import { ComponentProps } from "react";

export default function Logo({ ...props }: ComponentProps<"img">) {
  return <img {...props} />;
}
