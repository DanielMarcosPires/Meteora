import React from "react";
interface ProdutosProps{
  color:string;
}
export default function Produtos({color}: ProdutosProps) {
  console.log(color)
  return (
    <section className="flex flex-col items-center">
      <h2 className="font-semibold text-2xl text-center w-[85%] py-4">
        Produtos que estão bombando!
      </h2>
      <ul className="flex justify-center flex-wrap gap-4">
        <li className={"w-80 border overflow-hidden rounded-lg"}>
          <img src="/card/calça.png" alt="teste" />
          <div className="px-5 py-2">
            <h3 className="font-bold text-xl">Camiseta Conforto</h3>
            <p className="py-1">
              Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o
              verão. Modelagem unissex.
            </p>
            <span className="block py-2 font-bold">R$ 70,00</span>
            <button style={{background:color[3]}} className=" text-white p-2 px-3">Ver mais</button>
          </div>
        </li>
        <li className={"w-80 border overflow-hidden rounded-lg"}>
          <img src="/card/camiseta.png" alt="teste" />
          <div className="px-5 py-2">
            <h3 className="font-bold text-xl">Calça Alfaiataria</h3>
            <p className="py-1">Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!</p>
            <span className="block py-2 font-bold">R$ 70,00</span>
            <button style={{background:color[3]}} className=" text-white p-2 px-3">Ver mais</button>
          </div>
        </li>
      </ul>
    </section>
  );
}
