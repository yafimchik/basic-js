module.exports = function createDreamTeam(team) {
  if (typeof(team) != "object") return false;
  if (team == null) return false;
  if (team == undefined) return false;
  if (!(team instanceof Array)) return false;
  if (team.isArrey == false) return false;
  
  if (team.length == 0) return false;
  let teamLetters = [];
  for (let member of team){
    
    if (typeof(member) == "string"){
      member = member.trim();
      if (member.length > 0) teamLetters.push(member.toUpperCase()[0]);  
    }
  }
  teamLetters.sort();
  teamName = teamLetters.toString();
  teamName = teamName.replace(/\W/g,"");
  return teamName;
};