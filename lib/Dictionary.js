export const dictionary = [

  // rengler
  { word: "orange", translation: "narıncı" },
  { word: "blue", translation: "mavi" },
  { word: "red", translation: "qırmızı" },


  // q
]

export const t = (word) => {
  return dictionary.find((item) => item.word === word);
}