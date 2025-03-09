import './App.css'

let firstname = "Keltoum";
let lastname = "Malouki";
let currentyear = 2025;
let mybirthyear = 2006;
let country = "Morocco";
let city

function Address() {
  return <h2> I live in {country} exactly in {city} </h2>
}

function App() {
    return (
        <h1>Hello, My name is {firstname} {lastname.toUpperCase()}, I'm {currentyear-mybirthyear}
        <Address /> </h1>
    ) 
}
export default App
