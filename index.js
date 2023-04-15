// code your solution here
//const record = [
  //  { year: "2015", result: "W"},
//    { year: "2014", result: "N/A"},
//   { year: "2013", result: "L"}
//     //...
//   ]

function superbowlWin(record) {
   let variable = record.find ((element => element.result === "W" ))
//record.find (element)
console.log (variable)
if (variable === undefined)
{return undefined}
else {return variable.year}


}



function ifStatements (element){
    if (element.result === "W"){
        return element.year }
     if (element.result != "W"){
         return undefined
     }}


superbowlWin()

