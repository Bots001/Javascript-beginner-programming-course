var name1 ="salman";
name1="  salmanfarish";
const dob = "10-10-2020"
var msg="hello js my name is" + name1 +dob;
alert(msg);
//alert(4+3);
console.log(msg);
let firstname = "salman";//string

let age2 = 18; // integer

let isyoung = true; //boolean

let lastname = undefined; //undefined

let trophy = null;//null
 

//object

var person = {
    //key:value,syntax
    nam6 : "salmans",
    age :18,
    isalive:true,
    gender:"male",
    address:"nill",
    sibling:{
        brother:"fayazFawaz",
        friend:"kabir",
    }
 
}//object
person.age = 17;
//dot notaion


console.log(person.age)
console.log(person.sibling.brother)

//bracket notation
console.log(person['gender'])


let favcolor =["red","white","black"]//emptyarray
//{}-objects
//[-arrays]
favcolor[3]="yellow";
favcolor[4]=null
favcolor[5]=45
console.log(favcolor[0]);
console.log(favcolor);
console.log(favcolor.length);

//function

function greetuser(name4,last){
    let name3="salman"
    let dn="welcome"
    console.log(dn+name3+name4+last);
}

greetuser()
greetuser("farish")
greetuser("working")
greetuser("woring","js")

function add(num1,num2){
    console.log(num1+num2);

}
add(45,55)

let nums1=5;
let nums2=7;

//increment
console.log(nums1++);
console.log(++nums1);

//decerment
console.log(nums2--);
console.log(--nums2);

//comparison
console.log(1<5);
//true,false


let x=5;
//relation operators
console.log(x < 5);//less
console.log(x<=5);//less or equal
console.log(x>5);//great
console.log(x>=5);//great or equal

//equality operator
let x1=5;
//===
console.log(x===5);
console.log(x!==5);

//string comparision
console.log("salman"<"farish");//dictionary


//comparison of different types

console.log('1'<5);//1<5 false js is smart
console.log(true==1);

//strict equality operator(datatype+value)
console.log(1===1);//num+num
console.log('1'===1);//str+num

//lose equality operator

console.log(1==1);//num+num
console.log('1'==1);//str+num

//ternary oprator
 
let age4=19;

let type=(age4>18)?"full ticket":"half ticket"

console.log(type);

//logical operator

//logical and(&&)
console.log(true&&true);
//logical or(||)
console.log(true||false);

//n0t
 console.log(true);

 //highincome , cibiscore -> loaneligible

 let highincome = true;
 let cibiscore = false;
 console.log(highincome&&cibiscore);
 let highincome1 = true;
 let cibiscore1=true
 let eligiblepersone = highincome1 || cibiscore1
 let application = eligiblepersone
 let got = application
 console.log("status  " +eligiblepersone);
 console.log("application status:  " +application);
 console.log("you get loan:  "+got);

 //falsy(false)
 //undefined
 //null
 //0
 //false
 //not a number nan

 //truthy anything that is not falsy is  truthy

 console.log(true||"salma");
 console.log(false||"salman");

//bitwise operator

const readp =4;
const writep=2;
const executep=1;

let myp =0;

myp=myp|readp|writep;

let mess=(myp&readp)?'yes':'no';

//operator precedence
let z=2+5*10;
console.log(z);

//conditional statement

let israin = true;
let iscloud = false;

if(israin&&iscloud){
    console.log("don't forget to take umberlla");
}
else{
    console.log("weather is normal");
}



let israin1 = false;
let iscloud1 = false;

if(israin1||iscloud1){
    console.log("don't forget to take umberlla");
}
else{
    console.log("weather is normal");
}


//if hour is between 12am to 1pm is good morning
//else if hour is between 1pm to 5pm good afternoon
//else is good evening 

let hour1 = new Date().getHours();
if(hour1>=0&&hour1<13)
console.log("good morning");
else if (hour1>=13&&hour1<=17)
console.log("good afternoon");
else
console.log("good evening");

let hour = Date();
console.log(hour);


//swith case

let grade = "a";
switch(grade){
    case "s":
    console.log("s grade");
    break;
    case"a":
    case"v":
    console.log("a grade");
    break;
    case 'b':
    console.log("b grade");
    break;
    case"c":
    console.log("c grade");
    break;
    default:
        console.log("try again");

}

var amount =12001;
switch(true){
    case (amount>=60000):
    console.log("you can buy iphone");
    break;
    case (amount >= 12000):
    console.log("you can buy android");
    break;
    case (amount >= 10000):
    console.log("you can buy low budjet phone");
    break;
    default:
        console.log("soort no phone in this rate");
}

//loops
//for

for(let i = 0; i<8; i++){
    console.log("salman",i);
}


//while

let im=6;
while(im>3){
    console.log("farish",im);
    --im;

}

//do-while
let iy=7;
do{
    console.log("do-while" ,iy);
    iy++;


}while(    iy<17)


//for-in loop


let pers ={
    paer:'salman',
    vayasu:'18',
}

for(let key in pers){
    console.log(key, " :", pers[key]);
}

let colour =['red','blue','green']
for(let key in colour){
    console.log(colour[key]);
}

//for of

for(color of colour){
    console.log("color: " ,color);
}

//op p obbject oriented programing
//function factory

function creatperson(name4){
    return{
        name:name4,
        nut:function(){
            console.log("my name is "+this.name);
        }
            
        }
    
    }

   //constortor function

   function Person4(name8){
       this.name=name8;
       this.hel1=function(){
           console.log("my name is"+this.name);
       }
   }

    
 let person6=new Person4("salman")
 person6.hel1();
        
    



let salman= creatperson("farish")
let farish = creatperson("farish")
salman.nut();


//dynamic object 

const person8={

    nam:salman,

}

person8.age=23
person8.lastname=farish

delete person8.nam

console.log(person8);

const ioss={
    name:salman,
    getname(){
        console.log("my name is "+this.name);

    }
}

let another=ioss

for(let key in ioss){
    another[key]=ioss[key]
}


//math in  bulit ob

console.log(Math.PI);
console.log(Math.abs(-2));

let mark =[23,45,67,89];

let result = Math.max(...mark)
console.log(result);



/*
rules
no javascript keyword as a name
should not start with number
no space and -
its case sensitive
*/