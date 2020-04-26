export default function convertIdToName(id) {
  let name = '';
  switch(id) {
  case 0:
    name =  "Météo";
    break;
  case 1:
    name = "Instagram";
    break;
  case 2:
    name = "Horloge";
    break;
  default:
    name = "widget";
  }
  return name;
}