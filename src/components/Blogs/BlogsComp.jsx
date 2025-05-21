import React from 'react';
import Img2 from "../../assets/locais/Img2.jpg";
import Img4 from "../../assets/locais/Img4.jpg";
import Img7 from "../../assets/locais/Img7.jpg";
import BlogCard from "../../pages/BlogCard.jsx";

const BlogsData = [
  {
    id: 1,
    image: Img2,
    title: "As melhores condições para ver o Cristo Redentor",
    description:
      "O Cristo Redentor é um dos cartões-postais mais emblemáticos do mundo e uma das Sete Maravilhas do Mundo Moderno. Localizado no topo do Morro do Corcovado, a 710 metros de altitude, o monumento oferece uma vista panorâmica espetacular da cidade do Rio de Janeiro. Para quem deseja aproveitar ao máximo essa experiência, a melhor hora para visitar é pela manhã cedo, especialmente em dias de céu limpo, quando o sol ilumina o rosto da estátua e a cidade está livre da neblina. O trajeto até o Cristo também é uma atração à parte: o passeio de trem pelo meio da Floresta da Tijuca revela paisagens naturais deslumbrantes. A estátua, inaugurada em 1931, tem 30 metros de altura (sem contar o pedestal) e foi construída com concreto armado e pedra-sabão. É um símbolo de fé e acolhimento que atrai milhões de visitantes todos os anos.",
    author: "Érika Laiane",
    date: "Maio de 2025",
  },
  {
    id: 2,
    image: Img7,
    title: "Uma viagem ao passado na Biblioteca Nacional",
    description:
      "Localizada no centro do Rio de Janeiro, a Biblioteca Nacional é uma verdadeira joia arquitetônica e cultural. Fundada em 1810, é considerada a maior biblioteca da América Latina e uma das dez maiores do mundo, com um acervo de mais de 9 milhões de itens. O prédio atual, inaugurado em 1910, impressiona pelo estilo neoclássico e pelos detalhes artísticos, como vitrais, esculturas e afrescos. Visitar a Biblioteca Nacional é como fazer uma viagem no tempo: seus salões silenciosos e corredores cheios de história abrigam documentos raríssimos, como o primeiro jornal impresso no Brasil, obras manuscritas do período imperial e mapas históricos. Além disso, as visitas guiadas gratuitas oferecem informações ricas sobre o papel fundamental da biblioteca na preservação da memória nacional. É um passeio imperdível para quem ama livros, história e arquitetura.",
    author: "Érika Laiane",
    date: "Maio de 2025",
  },
  {
    id: 3,
    image: Img4,
    title: "Museu do Amanhã: entre ciência, arte e futuro",
    description:
      "Inaugurado em 2015 na Zona Portuária do Rio, o Museu do Amanhã é um espaço que une ciência, tecnologia e design para provocar reflexões sobre o futuro da humanidade. Projetado pelo arquiteto espanhol Santiago Calatrava, o prédio se destaca por sua arquitetura futurista inspirada nas bromélias do Jardim Botânico. O museu não possui acervos fixos no estilo tradicional: em vez disso, suas exposições são imersivas, interativas e baseadas em dados científicos sobre mudanças climáticas, inteligência artificial, biodiversidade, e sustentabilidade. Um dos destaques é a grande tela esférica que simula o planeta Terra, projetando dados em tempo real. O Museu do Amanhã se propõe a responder perguntas como: 'De onde viemos?', 'Quem somos?' e 'Para onde vamos?', criando um ambiente educativo e provocador. Além de tudo isso, ele está situado ao lado da Praça Mauá e da Baía de Guanabara, oferecendo uma paisagem que mistura natureza, arte e urbanismo.",
    author: "Érika Laiane",
    date: "Maio de 2025",
  },
];

const BlogsComp = () => {
  return (
    <section className="bg-blue-950/5 py-5">
      <div
        data-aos="fade-up"
        className="container mx-auto px-4 max-w-[1200px]"
      >
        <h1 className="mb-8 border-l-8 border-amber-500/50 py-2 pl-4 text-3xl font-bold text-blue-950">
          Artigos Recentes
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {BlogsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <BlogCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsComp;
