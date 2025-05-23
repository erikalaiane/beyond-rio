import React from 'react';

const Location = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-xl rounded-2xl p-6 border-l-4 border-amber-500">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4 border-l-8 border-blue-950/70 pl-4">
            Locais para Visitar
          </h1>
          <p className="text-gray-700 text-base mb-6">
            Um dos lugares mais incríveis para visitar no Rio de Janeiro é o <strong>Corcovado</strong>, onde está localizado o famoso Cristo Redentor. Uma vista deslumbrante da cidade espera por você. Que tal começar sua jornada por aqui?
          </p>
          <div className="overflow-hidden rounded-xl shadow-md border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29391.547362836263!2d-43.23200340828628!3d-22.95231075755861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa2af13ff01eb9f%3A0x8cf70199d061b749!2sCorcovado!5e0!3m2!1spt-BR!2sbr!4v1747966136600!5m2!1spt-BR!2sbr"
              width="100%"
              height="360"
              style={{ border: "none" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do Corcovado"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
