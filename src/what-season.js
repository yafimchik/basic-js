module.exports = function getSeason(_date = "") {
  if (_date == "") return "Unable to determine the time of year!";
  if (!(_date instanceof Date)) throw TypeError("Unable to determine the time of year!");
  try{
    _date.toDateString(); 
    switch(_date.getMonth() + 1){
      case 1:
      case 2:
      case 12: return "winter";
      case 3:
      case 4:
      case 5: return "spring";
      case 6:
      case 7:
      case 8: return "summer";
      default: return "fall";
    }
  } catch (err){
    throw err;
  }

};
