const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  if (typeof(sample) != 'string') return false;

  if (sample.lastIndexOf(".") > 3) sample = sample.slice(0,sample.lastIndexOf(".")) + sample.slice(sample.lastIndexOf(".")+1);
  let sampleActivity = Number(sample);
  if (sampleActivity === NaN) return false;
  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false;
  
  let age =Math.ceil (Math.log1p(MODERN_ACTIVITY / sampleActivity - 1) / 0.693 * HALF_LIFE_PERIOD);
  if (age > 0) return age;
  return false;  
};
