
        //1. 
        //a)


        function makeCounter() {
            let currentCount = 0;
            return function() {
            currentCount++;
            console.log(currentCount)
            return currentCount;
            };
        }
            let counter1 = makeCounter();
            counter1(); // 1
            counter1(); // 2
            
            let counter2 = makeCounter();
            counter2();         // independent 
            counter2(); 
        
            
        // //b)

        function makeCounter3(startFrom) {
            let currentCount = startFrom;
            return function() {
              currentCount++;
              console.log(currentCount);
              return currentCount;
            };
          }

            let counter3 = makeCounter3(10);
            counter3();
            counter3();
            counter3();

        
        // //c)

        function makeCounter4(startFrom, incrementBy) {
            let currentCount = startFrom;
            return function() {
              currentCount+= incrementBy;
              console.log(currentCount);
              return currentCount;
            };
          }

          let counter4 = makeCounter4(5, 2);
            counter4();
            counter4();
            counter4();
            counter4();



        //     //2.

        //     //a)

            function delayMsg(msg)
                {
                console.log(`This message will be printed after a delay: ${msg}`)
                }
                setTimeout(delayMsg, 100, '#1: Delayed by 100ms');  //Last, as it has the highest time delay
                setTimeout(delayMsg, 20, '#2: Delayed by 20ms');    //Third
                setTimeout(delayMsg, 0, '#3: Delayed by 0ms');      //Second, only because of the asynchronous behaviour of JS
                delayMsg('#4: Not delayed at all')       // First, as it's a regular function call

        //     //b)

            const delayMsgB = (msg) => {
                console.log(`This message will be printed after a delay: ${msg}`);
                };

              //c & d)

              const timeoutId = setTimeout(() => delayMsgB('This message will be printed after 2 seconds'), 2000);

              clearTimeout(timeoutId);


        //       //3.

        //       //a)


              function printMe() {
                console.log('printing debounced message')
                }

                
              function debounce(func) {
                let timeoutId;
                
                return function() {
                  clearTimeout(timeoutId);             // existing timeout is cleared
                  timeoutId = setTimeout(func, 1000);            //a new timeout of 1000 milliseconds
                };
              }
              
                printMe = debounce(printMe);   /*create this debounce function for a)
                fire off 3 calls to printMe within 300ms - only the LAST one should print, after 
                1000ms of no calls*/ 
                
   
                setTimeout( printMe, 100); 
                setTimeout( printMe, 200); 
                setTimeout( printMe, 300); 


        //     // b & c)


            function printMeB() {
                console.log('printing debounced message for b)')
                }

                
              function debounceB(func, ms) {
                let timeoutId;
                
                return function() {

                  clearTimeout(timeoutId);      
                  const arg = arguments;

                  timeoutId = setTimeout(() => {
                  func.apply(this, arg)}, ms);        
                  };
                }

                const debouncePeriod = 2000; 
                printMeB = debounceB(printMeB, debouncePeriod);

                // setTimeout(printMeB, 100);
                // setTimeout(printMeB, 200);
                // setTimeout(printMeB, 300);

                setTimeout(() => printMeB("First message"), 100);
                setTimeout(() => printMeB("Second message"), 200);
                setTimeout(() => printMeB("Third message"), 300);


        //         //4.

        //         //a)

                function printFibonacci() {
                    let a = 1;
                    let b = 1;                  
                  
                    const intervalId = setInterval(() => {
                      const next = a + b;
                      console.log(next);
                      
                      // Update a and b for the next iteration
                      a = b;
                      b = next;
                    }, 1000);
                    
                    // Stop the interval after a certain number of iterations (optional)
                    setTimeout(() => {
                      clearInterval(intervalId);
                    }, 10 * 1000); // Stop after 10 seconds
                  }
                  
                  printFibonacci();

        //         //b & c)


                  function printFibonacciTimeouts(maxCount) {
                    let a = 1;
                    let b = 1;
                    let count = 0;
                  
                    function printNext() {  
                      if (count >= maxCount) {
                        return; 
                      }
                  
                      const next = a + b; 
                      console.log(next);
                  
                      a = b;       // a is the old b
                      b = next;
                  
                      count++;
                      setTimeout(printNext, 1000);
                    };
                  
                      setTimeout(printNext, 3000); 
                  };
                
                  
                    printFibonacciTimeouts(12);



                    //5.

                    //a)
//The following car object has several properties and a method which uses them to print a 
// description. When calling the function normally this works as expected, but using it from 
// within setTimeout fails. Why? Make the necessary changes to the code so that calling

                    let car = {
                        make: "Porsche",
                        model: '911',
                        year: 1964,
                        description() {
                            console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
                    }
                    };

                    car.description(); 
                    
                    //setTimeout(car.description, 200); //doesn't work as it's not bound to the car object

                    //setTimeout(() => {
                     //   car.description(); }, 2000); //works by using an arrow function
                    

                    //b)

                    let newCar = Object.assign({}, car, { year: 1997 });                  

                    newCar.description();

                    //d)

                    setTimeout(car.description.bind(car), 100); //works by binding the car object to the function

                    //e)

                    newCar = Object.assign({}, car, { model: 'Boxter', year: 1997 });

                    newCar.description();


                    //6.

                    function multiply(...numbers) {
                        let product = 1;
                        for (const num of numbers) {
                            product *= num;
                        }
                        console.log(product);
                        }

                      //  multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

                    //a)  two parameters

                        Function.prototype.delay = function(ms) {
                            const originalFunction = this;
                            return function(a, b) {
                                setTimeout(() => {
                                    originalFunction.apply(this, [a, b]);
                                }, ms);
                            };
                        };
                        
                        multiply.delay(200)(5, 5); // prints 25 after 500 milliseconds

                    //b)  delayed functions can take any number of parameters

                    function addition(...numbers) {
                        let sum = 0;
                        for (const num of numbers) {
                            sum += num;
                        }
                        console.log(sum);
                    }


                    Function.prototype.delay = function(ms) {
                        const originalFunction = this;
                        return function(...args) {
                            setTimeout(() => {
                                originalFunction.apply(this, args);
                            }, ms);
                        };
                    }

                    addition.delay(300)(5, 2, 5); 
                    addition.delay(300)(5, 2, 5, 10, 20); 

                    //c) delayed functions can be called with 4 or any number of parameters

                    Function.prototype.delay = function(ms) {
                        const originalFunction = this;
                        return function(...args) {
                            setTimeout(() => {
                                originalFunction.apply(this, args);
                            }, ms);
                        };
                    };
                    
                    multiply.delay(400)(5, 2, 2, 2); 
                    multiply.delay(500)(5, 2, 2, 2, 5); 


                    //7.

                    //a & b)

                    function Person(name, age, gender) {
                        this.name = name;
                        this.age = age;
                        this.gender =  gender;
                    }
                    
                    Person.prototype.toString = function() {
                        return `${this.name} is ${this.age} years old ${this.gender}`;
                    };
                    
                    const person1 = new Person('James Brown', 73, 'male')
                    const person2 = new Person('Sara Sami', 30, 'female');
                    const person3 = new Person('Bob Marley', 78, 'male');
                    
                    console.log(person1.toString()); 
                    console.log(person2.toString()); 
                    console.log(person3.toString()); 
                    
                    //c)

                    function Student(name, age, gender, cohort) {
                        Person.call(this, name, age, gender);
                        this.cohort = cohort;
                    }
                    Student.prototype = Object.create(Person.prototype);
                    Student.prototype.constructor = Student;
                    

                    //d)

                    Student.prototype.toString = function() {
                        return `Student ${this.name} is ${this.age} years old, and is a ${this.gender}. cohort: '${this.cohort}`;
                    };

                    const student1 = new Student('Dalia Aly', 30, 'female', 'SE Jul 2023');
                    const student2 = new Student('Sara Zainy', 28, 'female', 'CS Oct 2022');

                    console.log(student1.toString());
                    console.log(student2.toString());


                    //8.

                    class DigitalClock {
                        constructor(prefix) {
                        this.prefix = prefix;
                        }
                        display() {
                        let date = new Date();
                        //create 3 variables in one go using array destructuring
                        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), 
                        date.getSeconds()];
                        if (hours < 10) hours = '0' + hours;
                        if (mins < 10) mins = '0' + mins;
                        if (secs < 10) secs = '0' + secs;
                        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
                        }
                        stop() {
                        clearInterval(this.timer);
                        }
                        start() {
                        this.display();
                        this.timer = setInterval(() => this.display(), 1000);
                        }
                        }
                        const myClock = new DigitalClock('my clock:')
                        myClock.start()
                        

                    // //a)

                    class PrecisionClock extends DigitalClock {
                        constructor(prefix, precision = 1000) {
                            super(prefix);
                            this.precision = precision;
                        }
                    
                        start() {
                            this.display();
                            this.timer = setInterval(() => this.display(), this.precision);
                        }
                    }
                    
                    const myPrecisionClock = new PrecisionClock('my precision clock:', 500); 
                    myPrecisionClock.start();
                    
                    //b)

                    class AlarmClock extends DigitalClock {
                        constructor(prefix, wakeupTime = '07:00') {
                            super(prefix);
                            this.wakeupTime = wakeupTime;
                        }
                    
                        display() {
                            let date = new Date();
                            let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
                    
                            if (hours < 10) hours = '0' + hours;
                            if (mins < 10) mins = '0' + mins;
                            if (secs < 10) secs = '0' + secs;
                    
                            const currentTime = `${hours}:${mins}`;
                    
                            if (currentTime === this.wakeupTime) {
                                console.log(`${this.prefix} Wake Up`);
                                this.stop();
                            } else {
                                console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
                            }
                        }
                    }
                    
                    const myAlarmClock = new AlarmClock('my alarm clock:', '08:30');
                    myAlarmClock.start();
                    

                    //9.

                    //a)

                    function randomDelay() {
                        const minDelay = 1000; // 1 second in milliseconds
                        const maxDelay = 20000; // 20 seconds in milliseconds
                      
                        const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
                      
                        return new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                          }, delay);
                        });
                      }
                      
                      randomDelay().then(() => console.log('There is a delay, Sorry for the inconvenience.'));

                    //b)

                    function randomDelay() {
                        const minDelay = 1000; 
                        const maxDelay = 20000; 
                      
                        const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
                      
                        return new Promise((resolve, reject) => {
                          setTimeout(() => {
                            if (delay % 2 === 0) {
                              resolve(delay);
                            } else {
                              reject({delay, message: new Error('Delay failed')});
                            }
                          }, delay);
                        });
                      }
                      
                      randomDelay()
                        .then(() => console.log('Successful delay'))
                     //   .catch((error) => console.error(error.message));

                    //c)

                        .catch((error) => console.error('Unsuccessful delay'));

                    //d)

                    randomDelay()
                    .then((delay) => console.log(`Successful delay of ${delay} ms`))
                    .catch((error) => console.error(`Failed delay of ${error.delay} ms: ${error.message}`));


                    //10.

                    import fetch from 'node-fetch'
                    globalThis.fetch = fetch
                    function fetchURLData(url) {
                    let fetchPromise = fetch(url).then(response => {
                    if (response.status === 200) {
                    return response.json();
                    } else {
                    throw new Error(`Request failed with status ${response.status}`);
                    }
                    });
                    return fetchPromise;
                    }
                    fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
                    .then(data => console.log(data))
                    .catch(error => console.error(error.message));

                    fetchURLData('https://jsonplaceholder.typicode.com/invalid-url')        //b - 1)
                    .then(data => console.log(data))
                    .catch(error => console.error(error.message));



                    import nodeFetch from 'node-fetch';

                        (async () => {
                          try {
                            let urls = [
                                'https://jsonplaceholder.typicode.com/posts/10',
                                'https://jsonplaceholder.typicode.com/posts/2',
                                'https://jsonplaceholder.typicode.com/invalid-url'
                            ];
                            let responses = await Promise.all(urls.map(url => nodeFetch(url)));

                            let jsonResults = await Promise.all(responses.map(response => response.json()));

                            jsonResults.forEach((jsonData, index) => {
                                if (index === 0) {
                                    console.log(`Post #${jsonData.id}: ${jsonData.title}`);
                                } else if (index === 1) {
                                    console.log(`Post #2: ${JSON.stringify(jsonData)}`);
                                } else {
                                    console.log(`Post #5 title: ${jsonData}`);
                                }
                                 });
                                } catch (error) {
                                    console.error(`Caught error: ${error}`);
                                } finally {
                                    console.log('done fetching');
                                }
                        })();

                     






                      


                      





                        


                        



                  








                  



            











