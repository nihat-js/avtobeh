export const years = new Array(40).fill(1).map((item, index) => {
    // return {
    //     value: (new Date().getFullYear() - index),
    //     text: (new Date().getFullYear() - index)
    // }
    return (new Date().getFullYear() - index)
})

export const vehicleTypes = [
    {
        key: "sedan",
        value: "Sedan"
    },
    {
        key: "hatchback",
        value: "Hatchback"
    },
    {
        key: "suv",
        value: "SUV"
    },
    {
        key: "pickup",
        value: "Pickup"
    },
    {
        key: "minivan",
        value: "Minivan"
    },
    {
        key: "convertible",
        value: "Convertible"
    },
    {
        key: "coupe",
        value: "Coupe"
    }
]

export const engineSize = new Array(100).fill(1).map((item, index) => {
    // return {
    //     value: parseFloat(((index + 1) * .1).toFixed(1)),
    //     text: ((index + 1) * .1).toFixed(1) + " L"
    // }
    return parseFloat(((index + 1) * .1).toFixed(1))
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

export const carColors = [
    {
        key: "white",
        value: "Beyaz"
    },
    {
        key: "black",
        value: "Siyah"
    },
    {
        key: "red",
        value: "Kırmızı"
    },
    {
        key: "blue",
        value: "Mavi"
    },
    {
        key: "green",
        value: "Yeşil"
    }
]

export const cylindersCount = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 24, 32, 48, 64]
export const seatsCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


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
        value: "automatic",
        name: "Avtomat",
    },
    {
        value: "manual",
        name: "Manuel",
    },
    {
        value: "robot",
        name: "Robot",
    },
    {
        value : "reduktor",
        name : "Reduktor"
    },
    {
        
    }

]