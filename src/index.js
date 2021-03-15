module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) { //проходим циклом по каждому элементу многомерного массива bracketsConfig
      let symbolsOfSubArray = bracketsConfig[i].join('');//в переменную определяем объединенные элементы субмассива
      if (str.includes(symbolsOfSubArray)) {//проверяем условие, если первый аргумент строка включает в себя парные символы
          str = str.replace(symbolsOfSubArray, '');//заменяем совпадение на пустую строку
          i = - 1;
       }
     }
      return str.length === 0;
}
