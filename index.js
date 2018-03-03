// a diamonds
// a hearts
// a spades 
// a clubs

// после 5 секунд перевернуть все

setTimeout(roll, 5000);

function roll() {
  // переворачивает карты
  // возможно стоит передавать конкретную карту для переворота
  // если карта не передана, переворачивать все
}

// число нераскрытых пар умноеженное на 42

// число раскрытых пар умноеженное на 42



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var cards = [];

(function makeArr() {
  let i = 0;
  while(i < 52) {
    cards.push(i);
    i++;
  }
})();


function test() {
  let arr = cards, randomArr = [], rand;
  while(randomArr.length < 18) {
    rand = Math.random() * (arr.length - 1) - 0.5;
    rand = Math.round(rand);
    randomArr.push(arr[rand]);
    randomArr.push(arr[rand]);
    arr.splice(rand, 1);
  };
  return randomArr;
};

var a = test();

a = shuffle(a);

console.log(a);

