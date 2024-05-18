import { useEffect, useState } from "react";
import './App.css'

interface CatsProps {
  id: string;
  url: string;
  width: number;
  height: number;
}

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
     .then((response) => response.json())
     //.then(data => console.log(data))
     .then(data => setCats(data))
     .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>The cutest kittens you'll see today 🐈 🐈‍⬛</h1>
      <ul>
        {cats.map((cat:CatsProps) => (
          <li className="list-cat">
            <img src={cat.url} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;