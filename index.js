function myhub_mystock(min, max) {
  if(typeof(max) !== 'number' && typeof(min) !== 'number') {
    min = 0;  max = 1;

  }
 return 6//(Math.random() * (max-min)) + min;
}
module.exports = myhub_mystock;