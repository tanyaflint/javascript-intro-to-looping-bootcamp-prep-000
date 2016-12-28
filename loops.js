function forLoop(arr) {
  var output = arr.slice(0);
  for (var i = 0; i < 25; i++){
    if (i === 1) {
      output = [...output, 'I am 1 strange loop.'];
    }
    else {
      output = [...output, `I am ${i} strange loops.`];
    }
  }
  return output;
}

function whileLoop(num) {
  var count = num;
  while (count > 0) {
    console.log(--count);
  }
  return 'done';
}

function doWhileLoop(arr) {
  var output = arr.slice(0);
  do {
    output = output.slice(1);
  } while (output.length > 0 && maybeTrue());
  return output;
}

function maybeTrue() {
  return Math.random() >= 0.5
}
