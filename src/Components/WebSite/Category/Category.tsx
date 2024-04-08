/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from "react";
interface Category{
  color: string;
}
export default function Category({color}:Category) {
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
  console.log(color)
  return (
    <section>
      <h2 className="font-semibold text-2xl text-center py-4">
        Busque por categoria:
      </h2>
      <ul className="flex flex-wrap gap-2 justify-center">
        <Suspense fallback={<p>Loading...</p>}>
          {categoria.map((item, key) => (
            <li className="w-[200px] h-[200px]" key={`${item.text} - ${key}`}>
              <img
                width={200}
                height={200}
                src={`/Categoria/Categoria ${item.text}.png`}
                alt={item.text}
              />
              <footer style={{background:color[0]}} className="text-center text-white py-2">
                {item.text}
              </footer>
            </li>
          ))}
        </Suspense>
      </ul>
    </section>
  );
}
