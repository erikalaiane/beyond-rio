import React from 'react'
import LocaisCard from "./LocaisCard";
import Img1 from "../../assets/locais/Img1.jpg";
import Img2 from "../../assets/locais/Img2.jpg";
import Img3 from "../../assets/locais/Img3.jpg";
import Img4 from "../../assets/locais/Img4.jpg";
import Img5 from "../../assets/locais/Img5.jpg";
import Img6 from "../../assets/locais/Img6.jpg";
import Img7 from "../../assets/locais/Img7.jpg";
import Img8 from "../../assets/locais/Img8.jpg";
import Img9 from "../../assets/locais/Img9.jpg";

const LocaisData = [
  {
    img: Img1,
    title: "Passeio de Bondinho",
    location: "Pão de Açúcar - RJ",
    description: "Desfrute de uma vista panorâmica do Rio de Janeiro ao subir o famoso bondinho do Pão de Açúcar.",
    price: 195,
    type: "Paisagem Cultural",
  },
  {
    img: Img2,
    title: "Visita ao Cristo Redentor",
    location: "Corcovado - RJ",
    description: "Conheça uma das sete maravilhas do mundo moderno e admire a vista espetacular do Corcovado.",
    price: 128,
    type: "Monumento",
  },
  {
    img: Img3,
    title: "Tour pelo Estádio do Maracanã",
    location: "Maracanã - RJ",
    description: "Explore os bastidores de um dos estádios mais icônicos do mundo, símbolo do futebol brasileiro.",
    price: 65,
    type: "Esporte e Cultura",
  },
  {
    img: Img4,
    title: "Museu do Amanhã",
    location: "Praça Mauá - RJ",
    description: "Conheça o museu de ciência focado em sustentabilidade e futuro da humanidade, com exposições interativas.",
    price: 30,
    type: "Museu de Ciência",
  },
  {
    img: Img5,
    title: "Visita ao AquaRio",
    location: "AquaRio - RJ",
    description: "Explore o maior aquário marinho da América do Sul e descubra a diversidade da vida marinha brasileira.",
    price: 99,
    type: "Aquário",
  },
  {
    img: Img6,
    title: "Passeio no BioParque do Rio",
    location: "Zoológico (BioParque do Rio) - RJ",
    description: "Conheça animais de várias espécies em um espaço de conservação e educação ambiental no coração do Rio.",
    price: 60,
    type: "Zoológico",
  },
  {
    img: Img7,
    title: "Visita à Biblioteca Nacional",
    location: "Biblioteca Nacional - RJ",
    description: "Explore o maior acervo bibliográfico da América Latina em um prédio histórico e cultural.",
    price: 0,
    type: "Patrimônio Cultural",
  },
  {
    img: Img8,
    title: "Museu de Arte Contemporânea",
    location: "Niterói - RJ",
    description: "Descubra os mistérios do universo com sessões educativas e uma cúpula de projeção moderna.",
    price: 18,
    type: "Museu",
  },
  {
    img: Img9,
    title: "Passeio na Escadaria Selarón",
    location: "Escadaria Selarón - RJ",
    description: "Visite a colorida escadaria artística criada por Jorge Selarón, símbolo da cultura carioca.",
    price: 0,
    type: "Arte Urbana",
  },
];

const Locais = () => {
  return (
    <div className="bg-gray-50 py-10 mt-1 mx-10">
      <div className="container mx-auto px-4">
        <h1 className="my-8 border-l-8 border-amber-500/50 py-2 pl-4 text-3xl font-bold">
          Melhores Locais para Visitar
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {LocaisData.map((item, index) => (
            <LocaisCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locais;
