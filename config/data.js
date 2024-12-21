export const years = new Array(40).fill(1).map((item, index) => {
    return {
        value: (new Date().getFullYear() - index),
        text: (new Date().getFullYear() - index)
    }
})

export const engineSize = new Array(100).fill(1).map((item, index) => {
    return {
        value: parseFloat(((index + 1) * .1).toFixed(1)),
        text: ((index + 1) * .1).toFixed(1) + " L"
    }
})

export const carFeatures = [

    {
        key: "Kredit",
        value: "Kredit"
    },
    {
        key: "Kasko",
        value: "Kasko"
    },
    {
        key: "Barter",
        value: "Barter"
    },

    {
        key: "Airbag atılmayan",
        value: "Airbag atılmayan"
    },
    {
        key: "Panoramik dam",
        value: "Panoramik dam"
    },
    {
        key: "Start/Stop düyməsi",
        value: "Start/Stop düyməsi"
    },
    {
        key: "Remote Start",
        value: "Uzaqdan start"
    },
    {
        key: "All-Wheel Drive",
        value: "All-Wheel Drive"
    },
    {
        key: "4x4",
        value: "4x4"
    },
    {
        key: "carplay",
        value: "carplay"
    },
]


export const cylindersCount = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 24, 32, 48, 64]



const featuredBrands = [
    { name: 'BMW', src: 'https://www.carlogos.org/car-logos/bmw-logo.png' },
    { name: 'Mercedes', src: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png' },
    { name: 'Toyota', src: 'https://www.carlogos.org/car-logos/toyota-logo.png' }
    // { name: 'Tesla', src: 'https://www.carlogos.org/car-logos/tesla-logo.png' },
    // { name: 'Audi', src: 'https://www.carlogos.org/car-logos/audi-logo.png' },
    // { name: 'Ford', src: 'https://www.carlogos.org/car-logos/ford-logo.png' },
]


export const transmissionType = [
    {
        key: "automatic",
        value: "Avtomat",
    },
    {
        key: "manual",
        value: "Manuel",
    },
    {
        key: "hybrid",
        value: "Hibrid",

    },
    {
        key: "electric",
        value: "Elektrikli",
    },
    {
        key: "gas",
        value: "Benzinli",
    },
    {
        key: "diesel",
        value: "Dizel",
    },
    {
        key: "lpg",
        value: "LPG",
    },
    {
        key: "cng",
        value: "CNG",
    },
    {

    }
]