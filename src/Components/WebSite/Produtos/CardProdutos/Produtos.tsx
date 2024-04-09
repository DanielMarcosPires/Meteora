import React from "react";
interface ProdutosProps extends React.ComponentProps<"img">{}
export default function Produtos({...props}:ProdutosProps) {
  return <img {...props}/>;
}
