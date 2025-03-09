import './App.css'

let firstname = "Keltoum";
let lastname = "Malouki";
let currentyear = 2025;
let mybirthyear = 2006;
let country = "Morocco";
let city = "Casablanca"
const languages = ["Arabic" , "French" , "English"]

function Address() {
  return <h4> I live in {country} exactly in {city} </h4>
}

function Prop({job}){
  return <h5>I'm a Full Stack {job}</h5>
}

function List({languages}) {
   return <ul>
            {languages.map((language) => (
              <li>
                {language}
              </li>
            ))}
          </ul>
}

function Hobbies({hobbie}){
  return <h6>I Love {hobbie}</h6>
}

function App() {
    return (
        <h1>Hello, My name is {firstname} {lastname.toUpperCase()}, I'm {currentyear-mybirthyear}
          <Address /> 
          <Prop job ="Devlopper"/> 
          <Hobbies hobbie="coding"/>
          <List languages={languages}/>
        </h1>
    ) 
}
export default App
