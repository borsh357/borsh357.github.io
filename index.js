'use strict';

function generateRandomNumericData(numberOfEntries, max) {
  const arrayOfEntries = [];
  for (let i = 0; i < numberOfEntries; i++) {
    arrayOfEntries.push(Math.floor(Math.random() * Math.floor(max + 1)));
  }
  return arrayOfEntries;
}

function getPercentileFromNumbers(arrayOfNumbers, percent) {
  const sortedArray = arrayOfNumbers.sort((a, b) => {
    return -(a - b);
  });
  const percentile = (arrayOfNumbers.length / 100) * (100 - percent);

  const splicedArray = [];
  sortedArray.map((number, index) => {
    if (index >= percentile) {
      splicedArray.push(number);
    }
  });
  return splicedArray[0];
}

document.getElementById('btn').onclick = () => {
  const numberOfEntries = document.getElementById('numberOfEntries').value;
  const maxValue = document.getElementById('maxValue').value;
  const percentile = document.getElementById('percentile').value;

  document.getElementById('output').innerHTML = getPercentileFromNumbers(
    generateRandomNumericData(numberOfEntries, maxValue),
    percentile
  );
};
