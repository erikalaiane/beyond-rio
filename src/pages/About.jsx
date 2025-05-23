import React from 'react';
import Location from "../components/Location/Location.jsx";

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-14 text-gray-800">
      <div className="py-10">
        <h1 className="my-8 border-l-8 border-blue-950/80 pl-4 text-4xl font-bold text-blue-950">
          Sobre Nós
        </h1>
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500 transition hover:shadow-2xl">
          <p className="text-lg leading-relaxed">
            Somos mais do que uma agência de viagens — somos apaixonados por realizar sonhos e criar memórias inesquecíveis. Nosso compromisso é oferecer a você experiências únicas, com destinos cuidadosamente selecionados e suporte completo em cada etapa da sua jornada.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Desde o nosso nascimento, acreditamos que viajar transforma. Não apenas pelo que se vê, mas pelo que se sente. Por isso, cada pacote que montamos é pensado com empatia, conforto, segurança e aquele toque de atenção que faz toda a diferença.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Trabalhamos com parceiros confiáveis, hospedagens acolhedoras e roteiros pensados para todos os estilos de viajantes — dos aventureiros aos que buscam sossego. Oferecemos flexibilidade, preços acessíveis e atendimento personalizado, porque sabemos que cada cliente é único.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Nossa equipe é formada por pessoas que amam o que fazem, que já pisaram em muitos dos destinos que indicamos e que carregam na bagagem a experiência de quem sabe o que é cuidar de cada detalhe. E estamos em constante evolução, buscando novas formas de surpreender você a cada viagem.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Seja para uma escapada de fim de semana ou para a realização de um grande sonho, estamos aqui para tornar sua viagem leve, prática e maravilhosa. Do planejamento ao retorno, queremos que você se sinta seguro, feliz e inspirado.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-blue-950 font-semibold">
            Sua próxima aventura começa aqui. Descubra o mundo com a gente — você vai se surpreender com o que pode viver.
          </p>
        </div>
      </div>
      <Location />
    </div>
  );
};

export default About;
