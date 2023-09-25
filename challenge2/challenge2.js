//driver inputs car speed
let speed =prompt("Input the speed of your car")
//prints "Ok" if speed is less than 70
if (speed<70){
    alert("Ok")
}
//prints a demerit point for every 5km/h above 70km/h
else if (speed<=130 && speed>=70){
    let y = (speed-70)/5
    alert(`Points:${Math.floor(y)}`)
}
//prints "License suspended" if demerit points are more than 12
else{
    alert("License suspended")
}