
import './App.css';

// array destructuring
const [firstCity, secondCity] = ["Mombasa","Nakuru","Nairobi","Kisumu"];

console.log(firstCity);
console.log(secondCity);
function App({library}) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
