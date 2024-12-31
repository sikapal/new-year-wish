"use client";
import React from 'react';
import wishStore from '../components/appstore';

const NewYearPage = () => {
    const { formdata } = wishStore();

    const currentUrl = window.location.href; // Récupère l'URL actuelle de la page

    const encodedMessage = encodeURIComponent(formdata.message);
    const shareMessage = `${formdata.name} te souhaite une Bonne Année 2025! \n${encodedMessage}`;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-700 to-pink-500 px-6 py-12">
            <div className="bg-white shadow-lg rounded-lg p-10 max-w-3xl text-center">
                <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
                    <span className="text-7xl text-purple-800 font-extrabold underline">{formdata.name}</span> te souhaite une Bonne Année 2025!
                </h1>

                <p className="text-2xl text-gray-600 mt-6 leading-relaxed">
                    {formdata.message}
                </p>
                <div className="flex items-center justify-center mt-8">
                    <img
                        src={formdata.image}
                        alt="Image de Voeux"
                        className="rounded-lg border-4 border-pink-500 shadow-md max-w-xs sm:max-w-md md:max-w-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                </div>

                <div className="mt-6">
                    <p className="text-xl text-gray-700">Partagez ce message avec vos proches :</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        {/* WhatsApp */}
                        <a
                            href={`https://wa.me/?text=${shareMessage} ${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-600"
                        >
                            <i className="bi bi-whatsapp text-3xl"></i>
                        </a>

                        {/* Facebook */}
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700"
                        >
                            <i className="bi bi-facebook text-3xl"></i>
                        </a>

                        {/* Twitter (X) */}
                        <a
                            href={`https://twitter.com/intent/tweet?text=${shareMessage} ${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-500"
                        >
                            <i className="bi bi-twitter text-3xl"></i>
                        </a>

                        {/* Telegram */}
                        <a
                            href={`https://t.me/share/url?url=${currentUrl}&text=${shareMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            <i className="bi bi-telegram text-3xl"></i>
                        </a>
                    </div>
                </div>

                <footer className="text-gray-500 text-sm mt-12">
                    Développé par <a href="https://www.sikapa.site" className="font-semibold text-gray-700" target="_blank" rel="noopener noreferrer">Sikapa</a>
                </footer>
            </div>
        </div>
    );
};


export default NewYearPage;


// "use client";
// import React, { useEffect, useRef } from "react";
// import wishStore from "../components/appstore";
// import Fireworks from "fireworks-js";

// const NewYearPage = () => {
//   const { formdata } = wishStore();
//   const fireworksContainerRef = useRef(null); // Référence pour le conteneur des feux d'artifice

//   useEffect(() => {
//     if (fireworksContainerRef.current) {
//       // Créer une instance des feux d'artifice
//       const firework = new Fireworks({
//         speed: 5,
//         acceleration: 1.02,
//         friction: 0.98,
//         gravity: 1,
//         particles: 150,
//         opacity: 0.7,
//         target: fireworksContainerRef.current, // Utilisation de la référence React
//         maxRockets: 3,
//         rocketSpawnInterval: 150,
//         explosionChance: 0.08,
//         explosionMinHeight: 0.2,
//         explosionMaxHeight: 0.8,
//       });

//       firework.start();

//       // Nettoyage lors du démontage du composant
//       return () => {
//         firework.stop();
//       };
//     }
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-700 to-pink-500 px-6 py-12 relative">
//       {/* Conteneur pour les feux d'artifice */}
//       <div
//         ref={fireworksContainerRef} // Assignation de la référence
//         className="fireworks-container absolute top-0 left-0 w-full h-full pointer-events-none"
//       ></div>

//       {/* Contenu principal */}
//       <div className="bg-white shadow-lg rounded-lg p-10 max-w-3xl text-center z-10 relative">
//         <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
//           <span className="text-7xl text-purple-800 font-extrabold underline">
//             {formdata.name}
//           </span>{" "}
//           te souhaite une Bonne Année 2025!
//         </h1>

//         <p className="text-2xl text-gray-600 mt-6 leading-relaxed">{formdata.message}</p>
        
//         {/* Image de voeux */}
//         <div className="flex items-center justify-center mt-8">
//           <img
//             src={formdata.image}
//             alt="Image de Voeux"
//             className="rounded-lg border-4 border-pink-500 shadow-md max-w-xs sm:max-w-md md:max-w-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
//           />
//         </div>

//         {/* Footer */}
//         <footer className="text-gray-500 text-sm mt-12">
//           Développé par{" "}
//           <a
//             href="https://www.sikapa.site"
//             className="font-semibold text-gray-700"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Sikapa Lucien
//           </a>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default NewYearPage;
