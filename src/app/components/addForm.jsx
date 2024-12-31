
"use client";
import React, { useState } from 'react';
import wishStore from './appstore';
import { useRouter } from 'next/navigation';

const AddForm = () => {
    const { updateFormData } = wishStore();
    const router = useRouter();
    const newYearQuotes = [
        "Que cette nouvelle année t’apporte joie, prospérité et réussite !",
        "Je te souhaite une année remplie d’amour, de bonheur et de santé !",
        "Puisse cette année nouvelle être synonyme de succès et d’accomplissement !",
        "Que chaque jour de cette année soit illuminé par la paix et la sérénité !",
        "Je te souhaite 365 jours de bonheur et de belles surprises !",
        "Que cette année t’apporte l’énergie nécessaire pour réaliser tous tes rêves !",
        "Puisse chaque instant de cette année t’apporter des sourires et des souvenirs précieux !",
        "Que cette nouvelle année soit une aventure remplie d’amour et d’inspiration !",
        "Je te souhaite une année éclatante de succès et de nouvelles opportunités !",
        "Que cette année soit marquée par des moments de joie et de partage !",
        "Puisse cette année être douce et riche en belles découvertes !",
        "Je te souhaite une année pleine de lumière, de rires et de prospérité !"
    ];

    const images = [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        image: '',
        message: '',
    });

    const [selectedQuote, setSelectedQuote] = useState('');

    const handleQuoteChange = (e) => {
        setSelectedQuote(e.target.value);
        setFormData({ ...formData, message: e.target.value });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', formData);
        updateFormData(formData);
        router.push('/wish');
    };

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setFormData({ ...formData, image: imageUrl });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 to-pink-500">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">LAISSEZ UN MESSAGE DE NOUVEL AN A VOS PROCHES</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Entrez Votre Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="image" className="block text-lg font-medium text-gray-700">Choisir Une Image</label>
                        <div className="flex items-center justify-center flex-wrap">
                            {images.map((imageUrl, index) => (
                                <img
                                    key={index}
                                    src={imageUrl}
                                    alt={`Image ${index + 1}`}
                                    className={`cursor-pointer m-2 border ${selectedImage === imageUrl ? 'border-red-800' : 'border-gray-300'} max-w-[150px]`}
                                    onClick={() => handleImageClick(imageUrl)}
                                />
                            ))}
                        </div>

 <input
                            type="text"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="newYearQuotes" className="block text-lg font-medium text-gray-700 mb-2">Choisir un voeux de nouvel an:</label>
                        <select
                            id="newYearQuotes"
                            name="newYearQuotes"
                            value={selectedQuote}
                            onChange={handleQuoteChange}
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            <option value="" disabled>Choisir un voeux</option>
                            {newYearQuotes.map((quote, index) => (
                                <option key={index} value={quote}>
                                    {quote}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700">Personnalisez votre Voeux</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 px-4 rounded-md shadow-lg text-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        Valider
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddForm;
