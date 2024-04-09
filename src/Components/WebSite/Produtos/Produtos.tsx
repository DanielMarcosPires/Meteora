import React from "react";
import { CardProdutos } from "./CardProdutos";
interface ProdutosProps {
  color: string;
}
export default function Produtos({ color }: ProdutosProps) {
  console.log(color);
  return (
    <section className="flex flex-col items-center py-4">
      <h2 className="w-[85%] py-4 text-center text-2xl font-semibold">
        Produtos que estão bombando!
      </h2>
      <CardProdutos.Box className="border-red flex flex-wrap gap-7">
        <li className="w-80">
          <CardProdutos.Produtos src="/card/camiseta.png" alt="" />
          <CardProdutos.Description>
            <h2 className="text-xl font-bold">Camiseta Conforto</h2>
            <p className="my-2">
              Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o
              verão. Modelagem unissex.
            </p>
            <p>R$ 180,00</p>
            <button className="p-2 text-white" style={{ background: color[3] }}>
              Ver mais
            </button>
          </CardProdutos.Description>
        </li>
        <li className="w-80">
          <CardProdutos.Produtos src="/card/camiseta.png" alt="" />
          <CardProdutos.Description>
            <h2 className="text-xl font-bold">Camiseta Conforto</h2>
            <p className="my-2">
              Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o
              verão. Modelagem unissex.
            </p>
            <p>R$ 180,00</p>
            <button className="p-2 text-white" style={{ background: color[3] }}>
              Ver mais
            </button>
          </CardProdutos.Description>
        </li>
      </CardProdutos.Box>
    </section>
  );
}
