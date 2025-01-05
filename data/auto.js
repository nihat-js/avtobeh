export const years = new Array(40).fill(1).map((item, index) => {
    return (new Date().getFullYear() - index)
    // return {
    //     value: (new Date().getFullYear() - index),
    //     text: (new Date().getFullYear() - index)
    // }
})

export const autoBodyStyles = [
    {
        name: "sedan",
        name_az: "Sedan"
    },
    {
        name: "hatchback",
        name_az: "Hatchback"
    },
    {
        name: "suv",
        name_az: "SUV"
    },
    {
        name: "pickup",
        name_az: "Pickup"
    },
    {
        name: "minivan",
        name_az: "Minivan"
    },
    {
        name: "universal",
        name_az: "Universal"
    },
    {
        name: "convertible",
        name_az: "Convertible"
    },
    {
        name: "coupe",
        name_az: "Coupe"
    }
]

export const autoEngineSizes = new Array(100).fill(1).map((item, index) => {
    // return {
    //     value: parseFloat(((index + 1) * .1).toFixed(1)),
    //     text: ((index + 1) * .1).toFixed(1) + " L"
    // }
    return parseFloat(((index + 1) * .1).toFixed(1))
})

export const autoFeatures1 = [

    // {
    //     key: "Kredit",
    //     value: "Kredit"
    // },

    // {
    //     key: "Airbag atılmayan",
    //     value: "Airbag atılmayan"
    // },
    {
        name: "panoramic-sunroof",
        name_az: "Panoramik dam"
    },
    {
        name: "start-stop",
        name_az: "Start/Stop düyməsi"
    },
    {
        name: "remote-start",
        name_az: "Uzaqdan start/stop"
    },
    {
        name: "apple-carplay",
        name_az: "Apple carplay"
    },
    {
        name: "android-auto",
        name_az: "Android Auto"
    },
]

// export const autoFeatures2 = [
//     {
//         name: "Kasko",
//         value: "Kasko"
//     },
//     {
//         key: "barter",
//         value: "Barter"
//     },
// ]

export const colors = [
    {
        name: "white",
        name_az: "Ağ",
        hex: "#FFFFFF"
    },
    {
        name: "black",
        name_az: "Qara",
        hex: "#000000"
    },
    {
        name: "red",
        name_az: "Qırmızı",
        hex: "#FF0000"
    },
    {
        name: "blue",
        name_az: "Göy",
        hex: "#0000FF"
    },
    {
        name: "green",
        name_az: "Yaşıl",
        hex: "#008000"
    },
    {
        name: "yellow",
        name_az: "Sarı",
        hex: "#FFFF00"
    },
    {
        name: "gray",
        name_az: "Boz",
        hex: "#808080"
    },
    {
        name: "orange",
        name_az: "Narıncı",
        hex: "#FFA500"
    }
];

export const cylindersCount = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 24, 32, 48, 64]
export const seatsCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export const transmissionType = [
    // {
    //     value : "",
    //     name : "Seçin"
    // },
    {
        name: "automatic",
        name_az: "Avtomat",
    },
    {
        name: "manual",
        name_az: "Manual",
    },
    {
        name: "robot",
        name_az: "Robot",
    },
    {
        name: "reduktor",
        name_az: "Reduktor"
    },
    {
        name: "cvt",
        name_az: "CVT"
    }

]
export const wheelDriveTypes = [

    {
        name: "front",
        name_az: "Ön",
    },
    {
        name: "rear",
        name_az: "Arxa",
    },
    {
        name: "full",
        name_az: "Tam"
    }
]