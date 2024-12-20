export const years = new Array(40).fill(1).map((item, index) => {
    return {
        value: (new Date().getFullYear() - index),
        text: (new Date().getFullYear() - index)
    }
})

export const engineSize = new Array(100).fill(1).map((item, index) => {
    return {
        value: index * .1,
        text: index * .1 + "L"
    }
})

export const cylindersCount = [1,2,3,4,5,6,8,10,12,16,24,32,48,64]



export  const transmissionType = [
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