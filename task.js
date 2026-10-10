let studentName=prompt("Enter student Name:")
function avg(mark1,mark2, mark3){
return avg(mark1, mark2, mark3)/3;
}
let mark1=Number(prompt("Enter Mark1"));
let mark2=Number(prompt("Enter Mark2"));
let mark3=Number(prompt("Enter Mark3"));
let average=Number(prompt("Enter your average:"));
if (average>=90){
    alert("Grade A");
}
else if(average>=75){
    alert("Grade B");
}
else if(average>=50){
    alert("Grade C");
}
else if(average<50){
    alert("Grade F");
}