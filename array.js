let bioData = ["jahid", 20, "student", "mogolpara"];
//adding new data....
bioData[2] = "teacher";
//adding new data to the last position..
bioData.push("najunbag");
console.log(bioData);
//adding new data to the first position..
bioData.unshift("dewan");
console.log(bioData);
//removing data from the last position..
bioData.pop();
console.log(bioData);
//removing data from the first position..
bioData.shift();
console.log(bioData);
//find the index number of data..
console.log(bioData.indexOf("teacher"));
