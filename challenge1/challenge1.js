//student inputs his marks
let mark= prompt("Please input your marks!")

//code block to assign grades based on students' marks

//assigning grade A
if(mark>79 && mark<100){
    alert("You have grade A, congrats")
   
}
//assigning grade B
else if(mark<80 && mark>=60){
    alert("you have grade B")
   
}
//assigning grade C
else if(mark<60 && mark>=50){
    alert("You have grade C")
   
}
//assigning grade D
else if(mark<50 && mark>=40){
    alert("You have grade D")
    
}
//asssigning grade E
else if (mark<40){
    alert("You have grade E")
}
//marks ought to be between 0-100
else{
    alert("your marks should be between 0-100")
    
}