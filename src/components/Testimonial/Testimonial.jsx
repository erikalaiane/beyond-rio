import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Person1 from "../../assets/person1.jpg";
import Person2 from "../../assets/person2.jpg";
import Person3 from "../../assets/person3.jpg";
import Person4 from "../../assets/person4.jpg";
import Person5 from "../../assets/person5.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Christopher",
    text: "Foi a minha primeira vez no Rio e eu não podia ter escolhido uma agência melhor. Desde o primeiro contato, tudo foi organizado com muito cuidado. Fiz o tour completo. Já estou pensando na próxima viagem!",
    img: Person1,
  },
  {
    id: 2,
    name: "Danielle",
    text: "O que mais me impressionou foi a atenção aos detalhes. Os guias eram super simpáticos, os passeios bem distribuídos e os lugares que conheci... sem palavras! O pôr do sol na Urca foi de tirar o fôlego. Me senti em casa, mesmo longe dela.",
    img: Person2,
  },
  {
    id: 3,
    name: "Lucas",
    text: "Confesso que estava com receio de viajar sozinho, mas com essa equipe maravilhosa eu não fiquei nem um minuto desconfortável. Fiz amizades, me diverti, e vivi dias incríveis no Rio. Recomendo de olhos fechados!",
    img: Person3,
  },
  {
  id: 4,
  name: "Marina",
  text: "Nunca imaginei que fosse me apaixonar tanto por uma cidade em tão pouco tempo. Cada passeio parecia pensado especialmente pra mim. A equipe foi atenciosa, animada e super organizada. Já estou planejando o próximo destino com eles!",
  img: Person4,
},
{
  id: 5,
  name: "Samuel",
  text: "Viajar com essa agência foi, sem dúvida, uma das melhores decisões que já tomei. O roteiro foi equilibrado entre aventura e descanso, e o clima entre os viajantes era incrível. Me senti parte de uma grande família.",
  img: Person5,
},
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-400 font-semibold uppercase tracking-wide">
            Depoimentos
          </p>
          <h1 className="text-4xl font-extrabold text-blue-950">O que nossos clientes dizem</h1>
          <p className="text-sm text-gray-500 mt-2">
            Veja o que nossos viajantes têm a dizer sobre suas experiências incríveis com a nossa agência.
          </p>
        </div>

        {/* Carrossel */}
        <Slider {...settings}>
          {TestimonialData.map(({ id, name, text, img }) => (
            <div key={id} className="flex justify-center px-2">
              <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 max-w-md text-center relative">
                <img
                  src={img}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-amber-200 border-2 border-white"
                />
                <h3 className="mt-4 text-xl font-bold text-blue-950">{name}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{text}</p>
                <p className="text-amber-200 text-7xl font-serif absolute top-1 right-3 pointer-events-none select-none">”</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
