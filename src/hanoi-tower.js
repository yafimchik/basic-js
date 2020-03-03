module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj = {};
    obj["turns"] = (2 ** disksNumber) - 1;
    let speed = turnsSpeed / 3600;
    obj["seconds"] = obj["turns"] / speed;
    return obj;


}