// "use client";
// import React from 'react';
// import wishStore from '../components/appstore';

// const NewYearPage = () => {
//     const { formdata } = wishStore();

//     const currentUrl = window.location.href; // Récupère l'URL actuelle de la page

//     const encodedMessage = encodeURIComponent(formdata.message);
//     const shareMessage = `${formdata.name} te souhaite une Bonne Année 2025! \n${encodedMessage}`;

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-700 to-pink-500 px-6 py-12">
//             <div className="bg-white shadow-lg rounded-lg p-10 max-w-3xl text-center">
//                 <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
//                     <span className="text-7xl text-purple-800 font-extrabold underline">{formdata.name}</span> te souhaite une Bonne Année 2025!
//                 </h1>

//                 <p className="text-2xl text-gray-600 mt-6 leading-relaxed">
//                     {formdata.message}
//                 </p>
//                 <div className="flex items-center justify-center mt-8">
//                     <img
//                         src={formdata.image}
//                         alt="Image de Voeux"
//                         className="rounded-lg border-4 border-pink-500 shadow-md max-w-xs sm:max-w-md md:max-w-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
//                     />
//                 </div>

//                 <div className="mt-6">
//                     <p className="text-xl text-gray-700">Partagez ce message avec vos proches :</p>
//                     <div className="flex justify-center space-x-4 mt-4">
//                         {/* WhatsApp */}
//                         <a
//                             href={`https://wa.me/?text=${shareMessage} ${currentUrl}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-green-500 hover:text-green-600"
//                         >
//                             <i className="bi bi-whatsapp text-3xl"></i>
//                         </a>

//                         {/* Facebook */}
//                         <a
//                             href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-blue-600 hover:text-blue-700"
//                         >
//                             <i className="bi bi-facebook text-3xl"></i>
//                         </a>

//                         {/* Twitter (X) */}
//                         <a
//                             href={`https://twitter.com/intent/tweet?text=${shareMessage} ${currentUrl}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-blue-400 hover:text-blue-500"
//                         >
//                             <i className="bi bi-twitter text-3xl"></i>
//                         </a>

//                         {/* Telegram */}
//                         <a
//                             href={`https://t.me/share/url?url=${currentUrl}&text=${shareMessage}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-blue-500 hover:text-blue-600"
//                         >
//                             <i className="bi bi-telegram text-3xl"></i>
//                         </a>
//                     </div>
//                 </div>

//                 <footer className="text-gray-500 text-sm mt-12">
//                     Développé par <a href="https://www.sikapa.site" className="font-semibold text-gray-700" target="_blank" rel="noopener noreferrer">Sikapa</a>
//                 </footer>
//             </div>
//         </div>
//     );
// };


// export default NewYearPage;

"use client";
import React, { useEffect, useState } from 'react';

import wishStore from '../components/appstore';

const NewYearPage = () => {
    const { formdata } = wishStore();
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        // Set currentUrl only in the client (browser)
        setCurrentUrl(window.location.href);
    }, []);

    const encodedMessage = encodeURIComponent(formdata.message);
    const shareMessage = `${formdata.name} te souhaite une Bonne Année 2025! \n${encodedMessage}`;

    return (
       
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-700 to-pink-500 px-6 py-12">
            
                <div className="bg-white shadow-lg rounded-lg p-10 max-w-3xl text-center">
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
                        <span className="text-7xl text-purple-800 font-extrabold underline">{formdata.name}</span> vous souhaite une Bonne Année 2025!
                    </h1>
                    <p className="text-2xl text-gray-600 mt-6 leading-relaxed">{formdata.message}</p>
                    <div className="flex items-center justify-center mt-8">
                        <img
                            src={formdata.image}
                            alt="Image de Voeux"
                            className="rounded-lg border-4 border-pink-500 shadow-md max-w-xs sm:max-w-md md:max-w-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                    </div>
                    {currentUrl && (
                        <div className="mt-6">
                            <p className="text-xl text-gray-700">Partagez cette page avec vos proches :</p>
                            <div className="flex justify-center space-x-4 mt-4">
                                <a
                                    href={`https://wa.me/?text=${shareMessage} ${currentUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 hover:text-green-600"
                                >
                                    <i className="bi bi-whatsapp text-3xl"></i>
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-700"
                                >
                                    <i className="bi bi-facebook text-3xl"></i>
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${shareMessage} ${currentUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-500"
                                >
                                    <i className="bi bi-twitter text-3xl"></i>
                                </a>
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
                    )}
                    <footer className="text-gray-500 text-sm mt-12">
                        Développé par{' '}
                        <a href="https://www.sikapa.site" className="font-semibold text-gray-700" target="_blank" rel="noopener noreferrer">
                            Sikapa
                        </a>
                    </footer>
                </div>
            </div>
       
    );
};

export default NewYearPage;

