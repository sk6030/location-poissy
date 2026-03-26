import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg mb-2">
            Louez local à Poissy, proche de l'usine Stellantis
          </p>
          <p className="text-gray-400 text-sm">
            Votre partenaire de confiance pour la location de voitures à Poissy
          </p>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © 2024 Poissy Auto Loue. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;