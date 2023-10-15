
function grader(){
    let letterGrade;
    let treat;
    // Handles none number type prompts
    let grade=prompt ("Please enter grade:");
    grade = parseFloat(grade);
    if ((grade<0 || grade>100) || isNaN(grade) || grade==null|| grade==" "){
        throw "Invaild Prompt.Try Prompt Again";
    }

    
    if(grade>=90){
        letterGrade="A";
    }else if (grade>=80){
        letterGrade="B";
    }else if (grade>=70){
        letterGrade="C";
    }else if (grade>=60){
        letterGrade="D";
    }else{
        letterGrade="F";
    }


    if(letterGrade==="A"){
        treat="Candy";
    }else if (letterGrade==="B"){
        treat="Apple";
    }else if (letterGrade==="C"){
        treat="Mint";
    }else if (letterGrade==="D"){
        treat="Pencil";
    }else{
        treat="Awkward conversation with parents";
    }
        
    console.log("Grade: " + grade);
    console.log("Letter Grade: " + letterGrade);
    console.log("Treat: " + treat);
}

