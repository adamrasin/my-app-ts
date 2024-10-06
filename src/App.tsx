// src/App.tsx
import { argv } from 'process';
import React, { useState } from 'react';

// Definujeme typ pro props
interface GreetingProps {
  name: string;
  age?: number; // volitelný parametr
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

const App: React.FC = () => {
  const [name, setName] = useState<string>('John');
  const [age, setAge] = useState<number | null>(null); // Typování stavů

  return (
    <div className="App">
      <Greeting name={name} age={age || undefined} />
      <button onClick={() => setAge(25)}>Set Age</button>
    </div>
  );
};

// 1

// Explicitní definice proměnných s různými typy

// 1. String (řetězec)
let myString: string = "Ahoj, světě!";

// 2. Number (číslo)
let myNumber: number = 42;

// 3. Boolean (pravda/nepravda)
let isTypeScriptAwesome: boolean = true;

// 4. Pole čísel (array of numbers)
let myNumberArray: number[] = [1, 2, 3, 4, 5];

console.log(myString);           // Výstup: Ahoj, světe!
console.log(myNumber);            // Výstup: 42
console.log(isTypeScriptAwesome); // Výstup: true
console.log(myNumberArray);       // Výstup: [1, 2, 3, 4, 5]

function multiply(a: number, b: number):number {
  return a * b;
}

const result = multiply(5, 3);
console.log(result);

// Funkce multiply s volitelným parametrem showResult
function multiply2(a: number, b: number, showResult?: boolean): number {
  const result = a * b;
  
  // Pokud je showResult pravdivé, vypíše výsledek do konzole
  if (showResult) {
    console.log(result);
  }

  // Vrací výsledek vždy, bez ohledu na showResult
  return result;
}

// Test funkce
const result1 = multiply2(5, 3, true);  // Vypíše do konzole a vrátí 15
const result2 = multiply2(4, 2);        // Pouze vrátí 8, nevypíše nic

//2

function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

const FullName = getFullName("Ondřej", "Vlček");
console.log(FullName);

//3

interface Car {
  vyrobce: string;
  model: string;
  rok: number;
}

const myCar : Car = {
  vyrobce: "Skoda",
  model: "Superb",
  rok: 2019
}

console.log(myCar);

//4

function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

const greeting1 = greet("Tomáš"); // Výstup: "Hello, Tomáš!"
const greeting2 = greet("Tomáš", "Ahoj"); // Výstup: "Ahoj, Tomáš!"

console.log(greeting1);
console.log(greeting2);

//5

function printID(id: number | string): void {
  if (typeof id === "number") {
    console.log(`ID je číslo s hodnotou: ${id}`);
  } else if (typeof id === "string") {
    console.log(`ID je řetězec s hodnotou: "${id}"`);
  }
}

printID(123456789);
printID("ABC123");

//6

function identity<T>(arg: T): T {
  return arg;
}

const num = identity <number>(3);
const str = identity <string>("Hejhou");
const boo = identity <boolean>(true);

console.log(num);
console.log(str);
console.log(boo);


export default App;