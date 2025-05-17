import React from 'react'

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(40)
  return (
    <div className="bg-black/20 h-full">
        <div className="h-full flex justify-center items-center p-4 bg-blue-950/10">
            <div className="container grid grid-cols-1 gap-4">
              {/*Text Content section*/}
                <div className="text-white -mt-18">
                    <p data-aos="fade-up" >Nossos Pacotes</p>
                    <p data-aos="fade-up" data-aos-delay="300" className="font-bold text-3xl">Pesquise seu Destino</p>
                </div>
                {/*Form Section*/}
                <div className="space-y-4 bg-amber-50 rounded-md4 p-4 relative">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
                      <div>
                        <label htmlFor="destination" className='opacity-70'>Pesquise seu Destino</label>
                        <input type="text" name="destination" id="destination"
                        placeholder="Cristo Redentor" 
                        className="w-full bg-gray-300 my-2 range outline-gray-500 outline focus:outline-amber-600 focus:outline rounded-full p-2"/>
                      </div>
                      <div>
                        <label htmlFor="destination" className='opacity-70'>Data</label>
                        <input type="date" name="destination" id="destination"
                        className="w-full !placeholder-slate-400 bg-gray-300 my-2 focus:outline-amber-600 focus:outline rounded-full outline-gray-500 outline p-2"/>
                      </div>
                      <div>
                        <label htmlFor="destination" className='opacity-70 block'>
                          <div className='w-full flex justify-between items-center'>
                            <p>Preço Máximo</p>
                            <p className="font-bold text-xl">
                              ${priceValue}</p>
                          </div>
                        </label>
                        <div className="bg-gray-300 rounded-full p-2 flex items-center justify-center">
                          <input type="range" name="destination" id="destination"
                          className="appearance-none w-full bg-gradient-to-r from-blue-950 to-blue-600 h-2 rounded-full my-2" min="0" max="300" value={priceValue} step="10" onChange={(e) => setPriceValue(e.target.value)}
                          />
                        </div>
                        
                      </div>
                    </div>
                    {/*botão*/}
                    <button className="bg-gradient-to-r from-blue-950 to-blue-600 text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">Pesquise Agora</button>     
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;