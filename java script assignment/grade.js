
// function grading_system (marks) {

//     if(marks >= 85 ) {

//         console.log(`${marks} : D1`);

//     } else if (marks >= 75) {

//         console.log(`${marks} : D2`);

//     } else if (marks >= 65) {

//         console.log(`${marks} : C3`);

//     } else if (marks >= 50) {

//         console.log(`${marks} : C4`);

//     } else if (marks >= 49) {

//         console.log(`${marks} : C5`);
        
//     } else if (marks >= 45 ) {

//         console.log(`${marks} : C6`);

//     } else if (marks >= 39) {

//         console.log(`${marks} : P7`);

//     } else if (marks >= 35) {

//         console.log(`${marks} : P8`);

//     } else if (marks < 29) {

//         console.log(`${marks} : F9`)
//     };

// };

// grading_system(5)
var biology = prompt("biology: ");
var chemistry = prompt("chemistry: ");
var physics = prompt("physics: ");
var computer_soft_aware = prompt("computer_soft_aware: ");
var ict = prompt("ict: ");
var art = prompt("art: ");
  

var average = parseInt(biology) + parseInt(chemistry) + parseInt(physics) + parseInt(computer_soft_aware) + parseInt(ict) + parseInt(art);

var finalAverage = parseInt(average) / 6

document.write("Total: " + average);
document.write("<br>");
 

document.write("Average: " +  finalAverage);
document.write("<br>");


function grades(){
    if(finalAverage >= 85){
        document.write("First grade");

    }else if(finalAverage >= 75 ){
        document.write("second grade");

    }else if(finalAverage >= 65){
        document.write("Third grade");

    }else if(finalAverage >= 45){
        document.write("Fourth grade");

    }else{
        document.write("grade U");
    };
};

grades();


