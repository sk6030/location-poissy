import React from 'react';

const cars = [
  {
    name: 'Peugeot 208',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
    price: 45,
    type: 'Compacte',
    features: ['Économique', 'Facile à conduire', 'Parking facile']
  },
  {
    name: 'Citroën C3',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&h=300&fit=crop',
    price: 48,
    type: 'Citadine',
    features: ['Confortable', 'Espace intérieur', 'Design moderne']
  },
  {
    name: 'DS7 Crossback',
    image: 'https://images.unsplash.com/photo-1553440569-6424178e4390?w=400&h=300&fit=crop',
    price: 75,
    type: 'SUV de luxe',
    features: ['Luxe', 'Équipements haut de gamme', 'Confort premium']
  }
];

const CarGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Notre flotte de véhicules
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-600">Image {car.name}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                    <p className="text-gray-600 text-sm">{car.type}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-600">{car.price}€</span>
                    <p className="text-gray-600 text-sm">/jour</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {car.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarGrid;