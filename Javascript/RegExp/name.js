var names = "Orange Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var pattern = /\s*;\s*/;

var nameList = names.split(pattern);

pattern = /(\w+)\s(\w+)/;

const newNameList = nameList.map((item) => item.replace(pattern, "$2 $1"));

console.log("newNameList: ", newNameList);
