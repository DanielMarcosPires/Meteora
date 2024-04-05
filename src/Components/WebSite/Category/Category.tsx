/* eslint-disable @next/next/no-img-element */
import React from "react";
export default function Category() {
  let categoria = [
    {
      text: "Camisetas",
    },
    {
      text: "Bolsas",
    },
    {
      text: "Calçados",
    },
    {
      text: "Calças",
    },
    {
      text: "Casacos",
    },
    {
      text: "Óculos",
    },
  ];
  return (
    <section>
      <h2 className="font-semibold text-2xl text-center py-4">
        Busque por categoria:
      </h2>
      <ul className="flex flex-wrap gap-2 justify-center">
        {categoria.map((item, key) => (
          <li className="w-[200px] h-[200px]" key={`${item.text} - ${key}`}>
            <img
              width={200}
              height={200}
              src={`/Categoria/Categoria ${item.text}.png`}
              alt={item.text}
            />
            <footer className="bg-black text-center text-white py-2">{item.text}</footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
