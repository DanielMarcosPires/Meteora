import SVG from "@/Components/SVG/SVG";
import { About } from "@/Components/WebSite/About";
import Category from "@/Components/WebSite/Category/Category";
import WebSiteHeader from "@/Components/WebSite/Header/Header";
import Produtos from "@/Components/WebSite/Produtos/Produtos";
import WebSiteSlide from "@/Components/WebSite/WebSiteSlide/Slide";
import { MongoDatabase } from "@/Database/mongodb";
import { Grid2X2, RefreshCcw } from "lucide-react";

export default async function Home() {
  const mongo = new MongoDatabase();
  let {Primary, Complementary}= await mongo.color() as any
  console.log(Complementary)
  return (
    <div style={{background:Primary[4]}}>
      <WebSiteHeader color={Primary} />
      <WebSiteSlide>
        <div>
          <picture className="w-screen">
            <source
              media="(max-width: 425px)"
              srcSet="/carousel/Iphone1.png"
              className="w-screen object-contain"
            />
            <source
              className="w-screen object-contain"
              media="(max-width: 768px)"
              srcSet="/carousel/Tablet1.png"
            />
            <img
              className="w-screen"
              src="/carousel/FullHD1.png"
              alt="Imagem do carrossel"
            />
          </picture>
        </div>
        <div>
          <picture className="w-screen">
            <source
              media="(max-width: 425px)"
              srcSet="/carousel/Iphone2.png"
              className="w-screen object-contain"
            />
            <source
              className="w-screen object-contain"
              media="(max-width: 768px)"
              srcSet="/carousel/Tablet2.png"
            />
            <img
              className="w-screen"
              src="/carousel/FullHD2.png"
              alt="Imagem do carrossel"
            />
          </picture>
        </div>
        <div>
          <picture className="w-screen">
            <source
              media="(max-width: 425px)"
              srcSet="/carousel/Iphone3.png"
              className="w-screen object-contain"
            />
            <source
              className="w-screen object-contain"
              media="(max-width: 768px)"
              srcSet="/carousel/Tablet3.png"
            />
            <img
              className="w-screen"
              src="/carousel/FullHD3.png"
              alt="Imagem do carrossel"
            />
          </picture>
        </div>
      </WebSiteSlide>
      <Category color={Primary} />
      <Produtos color={Primary}/>
      <About.Box style={{background:Primary[0]}} className="flex flex-wrap flex-col justify-center items-center p-5">
        <h2 className="text-2xl text-white text-center font-semibold py-3">
          Conheça todas as nossas facilidades.
        </h2>
        <div className="flex flex-wrap justify-center">
          <About.Topics className="inline-flex gap-4 justify-center items-center w-80 p-2">
            <Grid2X2 className="rotate-45" size={50} color={Primary[2]} />
            <div>
              <h3 className="font-bold" style={{color:Primary[2]}}>Pague pelo pix</h3>
              <p className="text-white text-sm">
                Ganhe 5% OFF em pagamentos via PIX
              </p>
            </div>
          </About.Topics>
          <About.Topics className="inline-flex gap-4 justify-center items-center w-80 p-2">
            <RefreshCcw className="-rotate-45" size={50} color={Primary[2]} />
            <div>
              <h3 className="font-bold" style={{color:Primary[2]}}>Troca Grátis</h3>
              <p className="text-white text-sm">
                Fique livre para trocar em até 30 dias.
              </p>
            </div>
          </About.Topics>
          <About.Topics className="inline-flex gap-4 justify-center items-center w-80 p-2">
            <SVG size={50} color={Primary[2]} />
            <div>
              <h3 className="text-[#daff01] font-bold" style={{color:Primary[2]}}>Sustentabilidade</h3>
              <p className="text-white text-sm">
                Moda responsável, que respeita o meio ambiente.
              </p>
            </div>
          </About.Topics>
        </div>
      </About.Box>
      <section className="flex justify-center p-8">
        <div className="flex flex-col items-center justify-center border-2 border-black text-center md:w-[697px]">
          <h2 className="font-semibold">
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na
            primeira compra? Cadastre-se!
          </h2>
          <form className="flex justify-center p-5" action="">
            <div className="flex border border-black">
              <input
                className="p-1"
                placeholder="Digite seu email"
                type="text"
              />
              <button style={{background:Primary[3]}} className=" text-white">Enviar</button>
            </div>
          </form>
        </div>
      </section>
      <footer style={{background:Primary[0]}} className="py-4 px-6 w-full  ">
        <p className="text-white text-center">
          {new Date().getFullYear()} &copy; Desenvolvido por Alura | Projeto
          fictício sem fins comerciais.
        </p>
      </footer>
    </div>
  );
}
