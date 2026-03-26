import React from 'react';

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Louez votre voiture à Poissy
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Des véhicules de qualité au meilleur prix, à deux pas de l'usine Stellantis
            </p>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Rechercher une voiture</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date de début</label>
                    <input 
                      type="date" 
                      className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Date de fin</label>
                    <input 
                      type="date" 
                      className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Type de véhicule</label>
                    <select className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white">
                      <option>Tous les véhicules</option>
                      <option>Compacte</option>
                      <option>SUV</option>
                      <option>Luxe</option>
                    </select>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="bg-white text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Rechercher
                </button>
              </form>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-20 p-8 rounded-lg">
              <div className="grid gap-4">
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">Image de Poissy/Stellantis</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-200 h-24 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">Ville</span>
                  </div>
                  <div className="bg-gray-200 h-24 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">Usine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;