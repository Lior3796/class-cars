class cars {
    tierNum;
    engine;
    color;
constructor(tierNum1,engine,color1){
    this.tierNum = tierNum1;
    this.engine = engine;
    this.color = color1;
}
 allDetails(){
    return ` ${this.tierNum} ${this.engine} ${this.color} `;
}
 static BiggerEngine(cars1) {
     const arrCars = cars1.sort((obj1,obj2) => {
         
        return obj1.engine - obj2.engine;
     });

     return arrCars[arrCars.length - 1];
 }

}
class bicycle1 extends cars {
name;
constructor(name1,tierNum1,engine1,color1){
    super(tierNum1,engine1,color1);
    this.name = name1;
}
 allDetails(){
    return `${super.allDetails()} ${this.name}` 
}
get upperCaseName(){
    return `${this.name.toUpperCase()} `
}
 

}
class plane1 extends cars {
    name;
    constructor(name1,tierNum1,engine1,color1){
        super(tierNum1,engine1,color1);
        this.name = name1;
    }
    allDetailsFromCars(){
        return `${this.name} ${this.allDetails()}`
    }   
}
class truck1 extends cars {
    name;
    constructor(name1,tierNum1,engine1,color1){
        super(tierNum1,engine1,color1);
        this.name = name1;
    }
   allDetailsFromCars(){
        return `${this.name} ${this.allDetails()}`
    }
    get differentClassResult(){
        return mazda.upperCaseResult();
    }
}
// סעיף 1
let suzuki = new cars(4,1200,"black");
console.log(suzuki);
console.log(suzuki.color);
console.log(suzuki.allDetails());

let bicycle = new bicycle1('bicycle',4,2000,"black");
let plane = new plane1('plane',4,1800,"black");
let truck = new truck1 ('truck',4,1500,"black");
// סעיף 2
console.log(bicycle.upperCaseName);
// סעיף 3
let newArr = [bicycle,plane,truck];
console.log(cars.BiggerEngine(newArr));
// סעיף 4
function sendToTable(){
    let userCar = new cars(input1.value,input2.value,input3.value,input4.value);

    for(let i = 1; i < 5; i++) {
        let tableDetails = document.getElementById(`tdObje${i}`);
        tableDetails.innerText = document.getElementById(`input${i}`).value;
        
    }
    console.log(userCar);
    
}



