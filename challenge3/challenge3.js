//Prompts user to input his/her gross salary(salary + benefits)
let grossSalary= prompt("What's your monthly Gross Salary?")
//assigns taxable salary , ksh2400 is personal relief
let payee= grossSalary-2400;
//assigns PAYE 
if(payee<= 24000){
     payee= payee*0.1
}
else if(payee>=24001 && payee<=32333){
     payee= payee*0.25
}
else if (payee>=32334 && payee<=500000){
    payee=payee*0.3
}
else if(payee>=500001 && payee<=800000){
     payee= payee*0.325
}
else{
     payee= payee*0.35
}


//assigns NHIF deductions
let nhif=grossSalary;


if(nhif<6000){
    nhif=150
}
else if(nhif>=6000 && nhif<8000){
    nhif= 300
}
else if(nhif>=8000 && nhif<12000){
    nhif=400
}
else if(nhif>=12000 && nhif<15000){
    nhif=500
}
else if(nhif>=15000 && nhif<20000){
    nhif=600
}
else if(nhif>=20000 && nhif<25000){
    nhif=750
}
else if(nhif>=25000 && nhif<30000){
    nhif=850
}
else if(nhif>=30000 && nhif<35000){
    nhif=900
}
else if(nhif>=35000 && nhif<40000){
    nhif=950
}
else if(nhif>=40000 && nhif<45000){
    nhif=1000
}
else if(nhif>=45000 && nhif<50000){
    nhif=1100
}
else if(nhif>=50000 && nhif<60000){
    nhif=1200
}
else if(nhif>=60000 && nhif<70000){
    nhif=1300
}
else if(nhif>=70000 && nhif<80000){
    nhif=1400
}
else if (nhif>=80000 && nhif<90000){
    nhif=1500
}
else if(nhif>=90000 && nhif<100000){
    nhif=1600
}
else{
    nhif=1700
}

//assigns NSSF deduction
let nssf=grossSalary*0.06;

//Outputs gross salary, PAYE, NHIF and NSSF deductions , net salary
alert(`Gross salary: ${grossSalary}\n
Payee: ${payee}\n
NHIF deduction: ${nhif}\n
NSSF deduction: ${nssf}\n
Net salary: ${grossSalary-payee-(nhif+nssf)}`)
