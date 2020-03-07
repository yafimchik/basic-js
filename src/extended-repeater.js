module.exports = function repeater(str, options) {
    if (typeof(options) != "object") return str;
    let repstr = String(str);
    let sepstr = "+";
    let addstr = "";
    let sepadd = "|";
    let rept = 0;
    let addt = 0;
    let resStr = "";
    if ("repeatTimes" in options){
        if (options["repeatTimes"] === undefined) rept = 1;
        else rept = Number(options["repeatTimes"]);        
    }
    if ("separator" in options){
        sepstr = String(options["separator"]);        
    }
    if ("addition" in options){
        addstr = String(options["addition"]);        
    }
    if ("additionRepeatTimes" in options){
        if (options["additionRepeatTimes"] === undefined) addt = 1;
        else addt = Number(options["additionRepeatTimes"]);       
    }
    if ("additionSeparator" in options){
        sepadd = String(options["additionSeparator"]);        
    }
    
    for (let i = 0; i < rept; i++){
        if (i != 0) resStr += sepstr;
        resStr += repstr;    
        for (let j = 0; j < addt; j++){
            if (j != 0) resStr += sepadd;    
            resStr += addstr;
        }
    }
    return resStr;
    
};
  