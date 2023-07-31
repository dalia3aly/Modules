//1.

console.log("" + 1 + 0);   //10
console.log("" - 1 + 0);   //-1
console.log(true + false);   //null
console.log(!true)
console.log(6 / "3")           //2
console.log("2" * "3" )                //6
console.log(4 + 5 + "px")            //9px
console.log("$" + 4 + 5)              //$45
console.log("4" - 2)                    //2
console.log("4px" - 2)                   //NaN
console.log(" -9 " + 5)                  //-9 5
console.log(" -9 " - 5)                  //-14
console.log(null + 1)                     //not logical!
console.log(undefined + 1);               //NaN
console.log(undefined == null)             //true
console.log(undefined === null)            //false
console.log(" \t \n" - 2)                   //?


//2.

let Three = "3"
let three = "3"
let four = "4"
let eight = "8"
let seven = "7"
let thirty = "30"



   //what is the value of the following expressions?


let addition = Three + four
let multiplication = Three * four
let division = Three / four
let subtraction = Three - four
let lessThan1 = three < thirty            
//let lessThan2 = seven < four          

console.log(addition, multiplication,division, subtraction)
console.log(lessThan1);
//console.log(lessThan2);



            //3.
            
    //Which of the following console.log messages will print? Why?


if (0) console.log('#1 zero is true')       //will not print, number 0 is a falsy value
if ("0") console.log('#2 zero is true')     // will print
if (null) console.log('null is true')       // nothing to print
if (-1) console.log('negative is true')     //negative is true
if (1) console.log('positive is true')      //positive is true





// const subtract1 = (a, b) => a - b;
// console.log(subtract1(10,3));



const saraSami = {
    'nameArray' : ["Sara", "Sami"],
    nameObject: {
        first: "Sara",
        last: "Sami"
    },
    age: 28,
    pets: "Pumpkin, Spice",
    bio() {
        console.log('${this.first}') 
    },
    introduceSelf() {
        console.log('Hi! this is ${this.first}');
    }
}

console.log(saraSami)


const phone = {
    model: 'Blackberry Key2',
    colour: 'black',
    system: 'Android',
    storage: 64
   }
   for (let key in phone) { // iterates over each property in the phone object
    console.log('key: ' + key); // prints each object property name (key) in turn
    console.log('value: ' + phone[key]); // prints each object value in turn
   }


const aCar = {make:'Mercedes', model:'GLC', year:'2018',  owner:'Dalia'};
console.log(aCar)
const aCarClone = {...aCar, location:'Sydney', topSpeed:'220km/h'}
console.log(aCarClone)

class NewUser {
    constructor(newFirst, newLast, newAge) {
        this.nameArray = [newFirst, newLast];
        this.nameObject = {first: newFirst, last: newLast};
        this['first-name'] = newFirst;
        this.lastName = newLast;
        this.age = newAge
    }
    bio() {
        console.log(`${this[`first-name`]} ${this.lastName} is ${this.age} years old.`);
    }
    
};

const newUser1 = new NewUser('Sara', 'Zainy', 28)
const newUser2 = new NewUser('Dalia', 'Aly', 37)
const newUser3 = new NewUser('Spice', 'Zainy', 1)
const newUser4 = new NewUser('Pumpkin', 'Zainy', 1)

console.log(newUser1)
console.log(newUser2)
console.log(newUser3)
console.log(newUser4)





            // 4.
let a = 4, b = 8;
let result = `${a} + ${b} is `;

result += (a + b <10)? 'less than 10' : 'greater than 10';

console.log(result)

            // 5.
// a)

const getGreeting = (name) => {
    return 'Hello ' + name + '!';
    };

    const greeting = getGreeting('Sara');

    console.log(greeting);

//b)

const getGreeting2 = (Name) => {
    return `Hi ${Name}!`;
  };

  let Name = "Sara";
  console.log(getGreeting2('Sara'));


            // 6.


    const westley = {
        name: 'Westley',
        numFingers: 5,
        reply: 'Nice to Meet you too!'
        }
    const rugen = {
        name: 'Count Rugen',
        numFingers: 6,
        reply: 'Do you always begin conversations this way?'
        }
    const inigo = {
        firstName1: 'Inigo',
        lastName1 : 'Montoya',
        
        greeting(person) { 
        let greeting = `Inigo: Hello ${person.name}, my name is ${this.firstName1} ${this.lastName1}. `;

        let catchPhrase = person.numFingers >= 6 ? 'You killed my father, prepare to die!' : 'Nice to meet you!';
        console.log(greeting + catchPhrase);

        if (person.numFingers === 6) {
            console.log('Count Rugen: ' + person.reply);
          } else {
            console.log('Westley: ' + person.reply);
          }
         },

        
         getCatchPhrase(person) {
            return person.catchPhrase;
           
            }
            
         };

         inigo.greeting(westley);
         inigo.greeting(rugen);
        
         

         // 7.

 // a)



const basketballGame = {
    score: 0,
    freeThrow() {
    this.score++;
    //console.log('At this point, score is ' +this.score);
    return this
    },
    basket() {
    this.score += 2;
    //console.log('At this point, score is ' +this.score);
    return this
    },
    threePointer() {
    this.score += 3;      
    //console.log('At this point, score is ' +this.score);                                       
    return this
    },
    halfTime() {
    console.log('Halftime score is '+this.score);
    
    return this
    },
   
    fullTime() {
    this.score * 2
    
    console.log('Fulltime score is ' +this.score);                          // Fulltime score, assuming the results will be the same in the second halftime
    return this
    
    }

}
    
    
   
    

    // let score = (basketballGame.halfTime)
    // console.log(score)
   // basketballGame.halfTime();
    //modify each of the above object methods to enable function chaining as below:
//basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();    
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().fullTime();     
    
//console.log(basketballGame.score);



            //8.


//             The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for…in loop to access 
// and print to the console each of those object properties and their values. Test it using 
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function 
// again with the new object




    //a) 

function printObjectProperties(obj) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }
    
    console.log("Sydney object properties:" + printObjectProperties(sydney));
  

    //b) 

    const giza = {
        name: 'Giza/Memphis',
        country: 'Egypt',
        population: 9_456_137,
        region: 'Greater Cairo',
        founded: '~ 2800 BC',
        timezone: 'Egypt (GMT+2)'
        }

        console.log("The city of Giza properties:" + printObjectProperties(giza));


        
            //9.

  



let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = {
    name :'Bingo',
    breed : 'Husky'};                 

let cat1 = {                            //turning these from primitive to object
    name: 'Fluffy', 
    breed: 'Siberian' };


    

let moreSports = teamSports.slice();

moreSports.push('Basketball');

moreSports.unshift('Football');

console.log(teamSports)
console.log(moreSports); 

  

    let dog2 = {...dog1};
    dog2 = {
        name :'Brownie',
        Breed : 'German Shephard'}

    console.log(dog1)
    console.log(dog2)


    
    let cat2 = {...cat1};

    cat2 = {
        name :'Pumpkin',
        breed : 'Ragdoll'}

        console.log(cat1)
        console.log(cat2)




            // 10.


            function Person(name, age) {
                this.name = name;
                this.age = age;
                this.human = true;
              
                this.canDrive = function () {
                  return this.age >= 18;
                };
              }
              
              let person1 = new Person('Sara Sami', 28);
              let person2 = new Person('Dalia Aly', 18);
              
              console.log(person1);
              console.log(person2);
              
              console.log(`person1 can drive: ${person1.canDrive()}`);
              console.log(`person2 can drive: ${person2.canDrive()}`);
              

            class PersonClass {
            constructor(name, age) {
              this.name = name;
              this.age = age;
              this.human = true;
            }
          
            canDrive = () => {
              return this.age >= 18;
                };
            }

        let person3 = new PersonClass('Seham Yusuf', 35);
      
        console.log(person3, `person3 can drive: ${person1.canDrive()}`);







