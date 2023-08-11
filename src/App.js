
import './App.css';
 import {useState, useEffect} from "react";

// array destructuring
// const [firstCity, secondCity] = ["Mombasa","Nakuru","Nairobi","Kisumu"];

// console.log(firstCity);
// console.log(secondCity);
// function App({library}) {
//   return (
//     <div className="App">
//       <h1>Hello from {library}</h1>
//     </div>
//   );
// }

// Using states to dynamically change text
function App() {
  const [emotion, setEmotion] = useState("happy");

  //side effects
  useEffect(() => {
    console.log(`Its ${emotion} around here!`)
  });
  return (
    <div className="App">
      <h1>Current Emotion is {emotion}</h1>
      <button onClick={() => setEmotion("Excited")}>Excited</button>
    </div>
  )
}
export default App;
