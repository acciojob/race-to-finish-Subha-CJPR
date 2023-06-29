window.promises = [];

for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 4) + 1;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  });

  promises.push(promise);
}

const winner = Promise.any(promises);

winner.then(time => {
  document.getElementById("output").innerHTML = `The winner took ${time} seconds!`;
});

// Do not change the code above this
// add your promises to the array `promises`
