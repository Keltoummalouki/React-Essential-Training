import './App.css'

let firstname = "Keltoum";
let lastname = "Malouki";
let currentyear = 2025;
let mybirthyear = 2006;
let country = "Morocco";
let city = "Casablanca"

function Address() {
  return <h4> I live in {country} exactly in {city} </h4>
}

function Prop(props){
  return <h5>I'm a Full Stack {props.job}</h5>
}

function App() {
    return (
        <h1>Hello, My name is {firstname} {lastname.toUpperCase()}, I'm {currentyear-mybirthyear}
        <Address /> <Prop job ="Devlopper"/></h1>
    ) 
}
export default App
