"use client";
import { useState } from 'react';

export default function CarDetails() {
    const [currentImage, setCurrentImage] = useState(0);
    
    const auto = {
        brandName: "BMW",
        modelName: "M4 Competition",
        year: 2023,
        price: 185000,
        currency: "AZN",
        mileage: "12,000",
        country: "Azərbaycan",
        city: "Bakı",
        description: "BMW M4 Competition əla vəziyyətdədir. Tam servis xidməti keçib. Original yürüş. Maksimal komplektasiya.",
        specifications: {
            engine: "3.0L Twin-Turbo",
            transmission: "8-pilləli M Steptronic",
            fuelType: "Benzin",
            driveType: "Arxa",
            bodyType: "Kupé",
            color: "San Marino Blue",
            seats: 4,
            enginePower: "510 a.g.",
            fuelConsumption: "9.8L/100km"
        },
        images: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80",
        ]
    };

    const nextImage = () => {
        setCurrentImage((prev) => prev === auto.images.length - 1 ? 0 : prev + 1);
    };

    const previousImage = () => {
        setCurrentImage((prev) => prev === 0 ? auto.images.length - 1 : prev - 1);
    };

    return (
        <div className="max-w-7xl mx-auto bg-white p-8 shadow-lg rounded-lg">
            {/* Back Button */}
            <button className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Geri
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Car Images */}
                <div className="relative h-[400px]">
                    <img
                        src={auto.images[currentImage]}
                        alt={`${auto.brandName} ${auto.modelName}`}
                        className="h-full w-full object-cover rounded-xl"
                    />
                    <button
                        onClick={previousImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {auto.images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                className={`w-2 h-2 rounded-full ${
                                    currentImage === index ? 'bg-white' : 'bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Car Info */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">
                            {auto.brandName} {auto.modelName}
                        </h1>
                        <p className="text-xl text-gray-500 mt-2">{auto.year}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-3xl font-bold text-blue-600">
                            {auto.price} {auto.currency}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <p className="text-lg flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {auto.country}, {auto.city}
                        </p>
                        <p className="text-lg flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            {auto.mileage} km
                        </p>
                    </div>

                    <p className="text-gray-700 text-lg">{auto.description}</p>

                    <button className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                        Satıcı ilə Əlaqə
                    </button>
                </div>
            </div>

            {/* Specifications */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Texniki Xüsusiyyətlər</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(auto.specifications).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </p>
                            <p className="text-lg font-medium text-gray-900">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}