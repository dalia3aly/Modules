

         // 1.


function capitalise(city) {
    return city
      .split(' ')
      .map(city => city.charAt(0).toUpperCase() + city.slice(1))
      .join(' ');
  }
  
  console.log(capitalise("los angeles")); 


  function capitalise(cat) {
    return cat
      .split(' ')
      .map(cat => cat.charAt(0).toUpperCase() + cat.slice(1))
      .join(' ');
  }
  
  console.log(capitalise("pumpkin & spice")); 


        //2.




function truncate(str, max) {
    if (str.length <= max) {
      return str; 
    } else {
      return str.slice(0, max) + '..'
    }
  }


  console.log(truncate("It's Module-3 Intermediate Lab Exercise", 18))
  console.log(truncate("Australia & Canada's game is on tonight at 8PM", 35))



        //3.


    const animals = ['Tiger', 'Giraffe']
    console.log(animals)

    //a)

    animals.push('Cat', 'parrot');                        // added only 1 animal at first to keep the number of animals odd for task d), not sure about even numbers
    console.log(animals)

    //b)

    animals.unshift('Duck', 'Penguin')
    console.log(animals)

    //c)

    animals.sort()
    console.log(animals)

    //d)
//     Write a function replaceMiddleAnimal(newValue) that replaces the value in the 
// middle of the animals array with newValue

    function replaceMiddleAnimal(newValue) {

    const middleIndex = Math.floor(animals.length / 2);
    if (animals.length % 2 !== 0) {
        animals[middleIndex] = newValue;
    } else {
        animals [middleIndex -1] = newValue              //forum suggestion for EVEN number of values
     }
    }
    

    replaceMiddleAnimal('dolphin');

    console.log(animals)



        //e)


        function findMatchingAnimals(beginsWith) {
        const matchingAnimals = animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
            return matchingAnimals;
            }
            let letter = 'D'
            let matchingAnimals = findMatchingAnimals(letter);

            console.log(matchingAnimals);


            letter= 'p'
            matchingAnimals = findMatchingAnimals(letter);
            
            console.log(matchingAnimals);



            //4.

//     Write a function camelCase(cssProp) that changes dash-separated CSS properties like 
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a 
// dash.


        function camelCase(cssProp) {
            return cssProp
            .split('-')
            .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
            .join('');
        }

        console.log(camelCase('margin-right'))

     

       
        // For loop


    function camelCaseLoop(cssProp) {
        const words = cssProp.split('-');
        let result = words[0];
        for (const word of words.slice(1)) {
          if (word !== words[0]) {
            result += word[0].toUpperCase() + word.slice(1);
          } else {
            result += word;
          }
        }
        return result;
      }
      

    console.log(camelCaseLoop('background-image'))


   // For loop with conditional operator


    function camelCaseLoopWithConditional(cssProp) {
        const words = cssProp.split('-');
        let result = words[0];
        
        for (const word of words.slice(1)) {
          result += word !== words[0] ? word[0].toUpperCase() + word.slice(1) : word;
        }
      
        return result;
      }


    console.log(camelCaseLoopWithConditional('background-color'))



            //5.

            let twentyCents = 0.10
            let tenCents = 0.20
         
            console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`) 
        
            // 0.2 + 0.1 = 0.30000000000000004

        //a)
        //because numbers are represented in binary format, 
        //and not all decimal numbers can be represented exactly in binary.
        //hence, floating-point errors occur
        

        //b) Decimal numbers to integers method (rounding result to 2 decimal places assuming it's currency related operation only):

        function currencyAddition(float1, float2) {

            const precision = 100; 

            const integer1 = Math.round(float1 * precision);
            const integer2 = Math.round(float2 * precision);
            const sumInteger = integer1 + integer2;
            return sumInteger / precision;
        }

        console.log('Total = ' + currencyAddition(0.1, 0.2))



        //c)   using switch statemet from MDN 


        function currencyOperation(float1, float2, operation) {     

            let result;
        
            switch (operation) {
            
          case '+':
            result = ((float1 * 100) + (float2 * 100)) / 100; 
                            
            break;
        
          case '-':
            result = ((float1 * 100) - (float2 * 100)) / 100;
            
            break;
        
          case '/':
            result = ((float1 * 100) / (float2 * 100)) ;
        
            break;
          
            case '*':
            result = ((float1 * 100) * (float2 * 100)) / 100**2;
            break;
        }
        
        return result
        
        }
        
          
        console.log(currencyOperation(0.1, 0.2, '+')); // Output: 0.3
        console.log(currencyOperation(0.3, 0.1, '-')); // Output: 0.2
        console.log(currencyOperation(0.5, 2, '/')); // Output: 0.25
        console.log(currencyOperation(0.25, 4, '*')); // Output: 1



                
        //Testing 

        console.log(0.3 === currencyAddition(0.1, 0.2)) // true
        console.log(0.3 === currencyOperation(0.1, 0.2, '+')) // true


        // d)   using switch statemet and supporting 1-10 decimal numbers


        function decimalsOperation(float1, float2, operation, numDecimals) {
            if (numDecimals <= 0 || numDecimals > 10) {
              throw new Error('Invalid value for resultDecimals. It should be between 0 and 10.');
            }
          
            const precision = 10 ** numDecimals;
          
            let result;
          
            switch (operation) {
              case '+':
                result = ((float1 * precision) + (float2 * precision)) / precision;
                break;
          
              case '-':
                result = ((float1 * precision) - (float2 * precision)) / precision;
                break;
          
              case '/':
                if (float2 !== 0) {
                  result = (float1 * precision) / (float2 * precision);
                } else {
                  throw new Error('Division by zero is not allowed.');
                }
                break;
          
              case '*':
                result = ((float1 * precision) * (float2 * precision)) / precision ** 2;
                break;
          
            }
          
            return +result.toFixed(numDecimals);        // Convert it back to a number
          }
          
       
          console.log(decimalsOperation(1.22, 2.45, '/', 6)); 
          console.log(decimalsOperation(1.2222, 2.3333, '+', 4)); 
          
          //Testing
          console.log(3.502 === decimalsOperation(7.253, 3.751, '-', 3)); 
          

          
             //6.


            function unique(colours) {

                const uniqueSet = new Set(colours);
                const uniqueArray= Array.from(uniqueSet);              
                return uniqueArray;
            }
              

              const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
              console.log(unique(colours)) 


            // Scores
              
            function unique(testScore) {
               
                const uniqueScoreSet = new Set(testScore);              
                const uniqueScoreArray= Array.from(uniqueScoreSet);              
                return uniqueScoreArray;
            }
              

            const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

              console.log(unique(testScores)) 

              
            //7.

            const books = [
                { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
                { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
                { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
                { id: 4, title: 'Anthem', author: 'Ayn Rand', year: 1938 },
                { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
              ];

            const bookTitles = books.map(book => book.title);
            console.log(bookTitles);

            const bookWithId3 = books.find(book => book.id === 3);
            console.log(bookWithId3);

            const booksAfter1950 = books.filter(book => book.year > 1950);
            console.log(booksAfter1950);

             
            //a)

            function getBookTitle(bookId) {
                const book = books.find(book => book.id === bookId);
                if (book) {
                  return book.title;
                } else {
                  return null; 
                }
              }
              
           
              console.log(getBookTitle(3));
              console.log(getBookTitle(7));


              //b)

              function getOldBooks() {
                const oldBooks = books.filter(book => book.year < 1950);
                return oldBooks;
              }

              console.log(getOldBooks())


              //c)

              function addGenre() {
                const booksWithGenre = books.map(book => ({
                  ...book,
                  genre: 'classic',
                }));

                return booksWithGenre;
              }

              console.log(addGenre());


              //d)

              function getTitles(initial) {
                const titles = books
                  .filter(book => /^([A-Z]\.)\s*/.test(book.author))          // /^([A-Z]\.)\s*/ was copied from an oline resource
                  .map(book => book.title);
                return titles;
              }

              console.log(getTitles('.'))


          //8.

//           The following code creates a new Map object for storing names beginning with A, B, or C 
// with their phone numbers.

        const phoneBookABC = new Map(); // an empty map to begin with
        phoneBookABC.set('Annabelle', '0412312343');
        phoneBookABC.set('Barry', '0433221117');
        phoneBookABC.set('Caroline', '0455221182');
        
        console.log("Phonebook for A, B, and C:");
        phoneBookABC.forEach((name, phoneNumber) => {
          console.log(`${name}: ${phoneNumber}`);
        });


        const phoneBookDEF = new Map(); // an empty map to begin with
        phoneBookDEF.set('Daniel', '0412312343');
        phoneBookDEF.set('Eden', '0433221117');
        phoneBookDEF.set('Fiona', '0455221182');
        
        console.log("Phonebook for D, E, and F:");
        phoneBookDEF.forEach((name, phoneNumber) => {

          console.log(`${name}: ${phoneNumber}`);
        });

          //c)
          phoneBookABC.set('Caroline', '0455221111');

          console.log("Caroline's new phone number: " + phoneBookABC.get('Caroline'));


          //d)

          function printPhoneBook(contacts) {
            console.log("Phone Book ABC:");
            contacts.forEach((phoneNumber, name) => {
              console.log(`${name}: ${phoneNumber}`);
            });
          }

          printPhoneBook(phoneBookABC);


          //e & f) combining the previous maps

          const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
          
          console.log(phoneBook)
          
          phoneBook.forEach((phoneNumber, name) => {
            console.log(`${name}: ${phoneNumber}`);
          });




          //9.


          let salaries = {
            "Timothy" : 35000,
            "David" : 25000,
            "Mary" : 55000,
            "Christina" : 75000,
            "James" : 43000
          };


        //a)

        function sumSalaries(salaries) {
          let totalSalary = 0;
        
          for (let salary in salaries) {
            totalSalary += salaries[salary];
          }
        
          return totalSalary;
        }

        let totalSalaries = sumSalaries(salaries)

        console.log("Total Salaries = ", totalSalaries);


        //b)

        function topEarner(salaries) {
          let maxSalary = 0;
          let topEarnerName = '';

          for (let employee in salaries) {
            if (salaries[employee] > maxSalary) {             //needed some research
              maxSalary = salaries[employee];
              topEarnerName = employee;
            }
          }
        
          return topEarnerName;
        }

        const highestEarner = topEarner(salaries);
        console.log('The top earner is: ' + highestEarner);


        //10.The following code uses the Date object to print the current time and the number of hours 
       //that have passed today so far. Extend the code to do the following:

        const today = new Date();
        console.log('Current time is ' + today.toLocaleTimeString())
        console.log(today.getHours() + ' hours have passed so far today')


        //a)

       
        console.log('Current time is ' + today.toLocaleTimeString());

        const hoursPassed = today.getHours();
        const minutesPassed = today.getMinutes();


        const totalMinutesPassed = (hoursPassed * 60) + minutesPassed;

        console.log('Total minutes passed so far today:', totalMinutesPassed)


        //b)

        const secondsPassed = today.getSeconds();

        const totalSecondsPassed = (hoursPassed * 60**2) + (minutesPassed * 60) + secondsPassed;

        console.log('Total seconds passed so far today:', totalSecondsPassed);


        //c)

      
    

      function myAge(birthdate) {
        const today = new Date();
        const birth = new Date(birthdate);
      
        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        const totalDays = (years * 365) + (months * 30) + days;                  // a simple way to calculate days between the given birthdate & today's date
        console.log("the total number of days between the birthdate & today's date is: " + totalDays);

        if (months < 0) {
          years--;
          months += 12;
        }
        if (days < 0) {
          months--;
          days += new Date(today.getFullYear(), today.getMonth(), 0) .getDate();
        }

        return `I am ${years} years, ${months} months, and ${days} days old.`;

      }
      
        console.log(myAge('1988/09/09'))





        //d) 

        const date1 = new Date('2006/07/25');
        const date2 = new Date('2018/02/04');

        const differenceInTime = Math.abs(date2) - Math.abs(date1)
        const differenceInDays = Math.round(differenceInTime / (1000 * 60**2 * 24));

        //console.log(differenceInTime)

        console.log('difference in time calculated in days are: ' + differenceInDays)