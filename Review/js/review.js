const dataTypes = {
    primitives: {
        string: 'string', 
        boolean: true,
        number: 1,
    }, 
    complex: {
        objects: {},
        array: [],
    }
} 


const operators = {
    arithmetic: {
        addition: '+',
        subtraction: '-', 
        multiplication: '*',
        division: '/',
    },
    comparison: {
        equal: '==',
        notEqual: '!=', 
        strictNotEqual: '!==', 
        greaterThan: '>', 
        lessThan: '<', 
        greaterThanEqual: '>=', 
        lessThanEqual: '<=', 
    }, 
    logical: {
        and: '&&', 
        or: '||', 
        not: '!', 
    }, 
    assignment: {
        additionalAssignment: '+=', 
        subtractionAssignment: '-=', 
        multiplicationAssignment: '*=', 
        divisionAssignment: '/=', 
        moduloAssignment: '%=', 
    }
}
// 1 == '1'  -> true 
// 1 === '1'  -> false 
// 1 + 1 == 2 && 5 * 10 == 10  -> false 
// 1 + 1 == 2 && 5 * 10 == 50  -> true 
// 1 + 1 == 2 && 5 * 10 == 50 && 1 === '1'  -> false 
// 1 + 1 == 2 && 5 * 10 == 50 && 1 === 1  -> true 
// 2 + 2 === 4 || 5 * 5 === 10  -> true 


const truthiness = {
    truthy: {
        true: true,
        string: 'every string', 
        number: Infinity,  // any number
    }, 
    falsy: {
        boolean: false, 
        string: '',  // empty string is false 
        number: 0, 
        object: null, 
        undefined: undefined, 
        NaN: NaN, 
    }
} 
// true  -> true 
// !true  -> false
// false  -> false 
// !false  -> true 
// !''  -> true 
// !0  -> true 
// !!0  -> false 


const popups = {
    alert: {
        returns: 'string', 
        arguments: 'string', 
        description: 'alerts the user with a string message', 
    }, 
    confirm: {
        returns: 'booleans', 
        arguments: 'string', 
        description: 'asks the user a question and returns a true or false depending on clicking ok or cancel', 
    }, 
    prompt: {
        returns: 'string', 
        arguments: 'string', 
        description: 'asks the user a question and returns the string they enter', 
        onCancel: 'returns null', 
        defaultValue: 'initial default value', 
    }
} 


const builtInObjects = {
    Math: {
        description: 'contains useful mathematical functions',
    }, 
    Dates: {
        description: 'contains useful date functions',
    }
} 


const controlFlow = {
    if: {
        description: 'if statements: if (condition) { statement }', 
        condition: 'boolean', 
        statement: 'block of code', 
    }, 
    else: {
        description: 'else statement: if (condition) { statement } else { different statement }', 
    }, 
    switch: {
        description: 'switch statement: switch (expression) { case value: statement; break; default: statement; break; }', 
    }, 
    edgeCases: {
        description: 'when the user uses a value that is not in the case list', 
        reason: 'if the user uses a value that is not in the case list, the program will continue to run', 
    }

}


// debugger; 
const debugging = {
    console: {
        description: 'console.log(data); prints data to the console', 
    }, 
    debugger: {
        description: 'debugger; pauses the program and allows you to stop through it while viewing variables', 
    }
} 


const scope = {
    global: {
        description: 'the global scope is the scope that is available to all code', 
        globalVariables: 'nick names for data that is accessible from anywhere in the program', 
        globalFunctions: 'nick names for functions that are accessible from anywhere in the program', 
    }, 
    local: {
        description: 'the local scope is is the scope that is available to code in the current function or object', 
    }
} 


const functionsVsMethods = { 
    functions: {
        description: 'functions are a way to create a block of code that can be called later', 
        arguments: 'arguments are the values that are passed into the function', 
        returns: 'returns the value that is returned from the function', 
        calling: 'calling a function is similar to calling a method', 
    }, 
    methods: {
        description: 'everything we said about functions is also true for methods except that they are attached to objects', 
    }
} 


const asynchronous = {
    description: 'asynchronous code is code that runs in the background', 
    callbacks: {
        description: 'callback functions are functions that are passed into another function as an argument to be called when the other function is finished',
    }, 
    promises: {
        description: 'promises are a way to handle asynchronous code', 
        resolve: 'resolves a promise', 
        reject: 'rejects a promise', 
    }
} 


function getData(cb){
    setTimeout(() => {
        //console.log(dataTypes);
        cb(dataTypes);
    }, 5000); 
} 
getData(function(data) {
    console.log(data);
});
// {primitives: {…}, complex: {…}} 

getData(function(data) {
    //console.log(data.primitives); 
    displayPrimitives(data.primitives); 
});
// {string: 'string', boolean: true, number: 1} 

getData(function(data) {
    //console.log(data.complex);
    displayComplex(data.complex); 
}); 
// {objects: {…}, array: Array(0)} 

function displayPrimitives(primitives){
    console.log(primitives);
}
function displayComplex(complex){
    console.log(complex);
} 


new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(dataTypes);
    }, 5000)
}).then((data) => data./*primitives*/complex)
.then((primitives) => primitives/*.number*/.array)
.then((string) => console.log(string))
// 1 
// [] 


fetch('http://pokeapi.co/api/v2/pokemon/')
.then(function(res) {
    console.log('fetching data', res);
    return res.json();
}).then( data => {
    console.log('data', data); 
    return data.results[0]
}).then( poke => {
    console.log('poke', poke);
    return poke.url
}).then(function(url) {
    console.log('fetching data'); 
    return fetch(url);
}).then(res => {
    console.log('fetching data', res);
    return res.json();
}).then(data => {
    console.log('data', data);
})
// fetching data Response {type: 'cors', url: 'https://pokeapi.co/api/v2/pokemon/', redirected: true, status: 200, ok: true, …} 
// data {count: 1126, next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20', previous: null, results: Array(20)} 
// poke {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'} 
// fetching data 
// fetching data Response {type: 'cors', url: 'https://pokeapi.co/api/v2/pokemon/1/', redirected: false, status: 200, ok: true, …} 
// data {abilities: Array(2), base_experience: 64, forms: Array(1), game_indices: Array(20), height: 7, …} 


const array = [1, 2, 3, 4, 5]
array.forEach(function(item) {
    console.log(item);
}) 
console.log('\n')
for(let i = 1; i <= /*5*/7; i++) {
    console.log(i);
}
console.log('\n')

for( let num of array){
    console.log(num);
} 

let i = 0; 
while(i < array.length) {
    //console.log(array[i]); 
    //i++; 
    i = Math.random() * 10;
    console.log(i);
}
// 1
// 2
// 3
// 4
// 5

// 1
// 2
// 3
// 4
// 5
// 6
// 7 

// 1
// 2
// 3
// 4
// 5 

// 3.1986603904750943
// 3.187383958535619
// 0.30873063771930775
// 9.040697445428572


// the DOM 
const ul = document.querySelector('ul'); // look for something on the page 
console.log(ul); 
// null 

const li = document.createElement('li'); // create a new element 
console.log(li); 
// <li></li> 

ul.appendChild(li); // add the new element to the page 
// 'bullet'  -> on html web view 

li.innerText = '<p>Hello</p>'; // add text to the element 
// 'bullet' <p>Hello</p>  -> on html web view 

const anotherLi = document.createElement('li');
ul.appendChild(anotherLi); 
anotherLi.innerHTML = '<h1>Goodbye</h1>'; 
// 'bullet' Goodbye  -> on html web view 

li.addEventListener('click', () => {
    //li.remove();   // on click removes first li 
    li.classList.toggle('done');   // on click adds class "done" to first li 
    li.style.padding = '100px';   // on click adds padding to first li 
    li.innerHTML = '<h1>Goodbye</h1>';   // on click changes first li to h1 Goodbye 
}) 
