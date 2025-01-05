export const years = new Array(40).fill(1).map((item, index) => {
    return (new Date().getFullYear() - index)
})


export const fuelTypes = [
    { id : 1, name: "Benzin", nameRu: "Бензин" },
    { id : 2, name: "Dizel", nameRu: "Дизель" },
    { id : 3, name: "Elektrik", nameRu: "Электрик" },
    { id : 4, name: "Hibrid", nameRu: "Гибрид" },
    { id : 5, name: "Plug-in Hibrid", nameRu: "Плагин гибрид" },
    { id : 6, name: "Gas", nameRu: "Газ" },
]

export const autoBodyStyles = [
    { id: "1", name: "Sedan", nameRu: "Седан" },
    { id: "2", name: "Hetçbek", nameRu: "Хетчбек" },
    { id: "3", name: "Minivan", nameRu: "Минивэн" },
    { id: "4", name: "Universal", nameRu: "Универсал" },
    { id: "5", name: "Offrouder / SUV", nameRu: "Оффроудер / SUV" },
    { id: "6", name: "Limuzin", nameRu: "Лимузин" },
    { id: "7", name: "Kabriolet", nameRu: "Кабриолет" },
    { id: "8", name: "Kupe", nameRu: "Купе" },
    { id: "9", name: "Roadster", nameRu: "Роудстер" },
    { id: "10", name: "Furqon", nameRu: "Фургон" },
    { id: "11", name: "Pikap", nameRu: "Пикап" },
    { id: "12", name: "Avtobus", nameRu: "Автобус" },
    { id: "13", name: "Dartqı", nameRu: "Дартка" },
    { id: "14", name: "Mikroavtobus", nameRu: "Микроавтобус" },
    { id: "15", name: "Motosiklet", nameRu: "Мотосиклет" },
    { id: "16", name: "Qolfkar", nameRu: "Колфкар" },
    { id: "17", name: "Van", nameRu: "Вэн" },
    { id: "18", name: "Yük maşını", nameRu: "Юк машин" },
]

export const autoEngineSizes = new Array(100).fill(1).map((item, index) => {
    return parseFloat(((index + 1) * .1).toFixed(1))
})

export const autoFeatures1 = [
    { id: 1, name : "Start/Stop", nameRu: "Start/Stop"  },
    { id: 2, name : "Uzaqdan start/stop", nameRu: "Uzaqdan start/stop"  },
    { id: 3, name : "Apple carplay", nameRu: "Apple carplay"  },
    { id: 4, name : "Android Auto", nameRu: "Android Auto"  },
    { id: 5, name : "Panoramik dam", nameRu: "Panoramik dam"  },
]

export const colors = [
    { id: 1, name: "Ağ" },
    { id: 2, name: "Bej" },
    { id: 3, name: "Boz" },
    { id: 4, name: "Bənövşəyi" },
    { id: 5, name: "Çəhrayı" },
    { id: 6, name: "Göy" },
    { id: 7, name: "Gümüşü" },
    { id: 8, name: "Mavi" },
    { id: 9, name: "Narıncı" },
    { id: 10, name: "Qara" },

    { id: 11, name: "Qarışıq" },
    { id: 12, name: "Qırmızı" },
    { id: 13, name: "Qızılı" },

    { id: 14, name: "Qəhvəyi" },
    { id: 15, name: "Sarı" },
    { id: 16, name: "Tünd qırmızı" },
    { id: 17, name: "Tünd göy" },
    { id: 18, name: "Yaş asfalt" },
    { id: 19, name: "Yaşıl" }
];


export const cylindersCount = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 24, 32, 48, 64]
export const seatsCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export const transmissionType = [
    { id: 1, name: "Avtomat" },
    { id: 2, name: "Mexanika" },
    { id: 3, name: "Robot" },
    { id: 4, name: "Reduktor" },
    { id: 5, name: "CVT" }
]
export const wheelDriveTypes = [
    { id : 1, name: "Ön" },
    { id : 2, name: "Arxa" },
    { id : 3, name: "Tam" }
]