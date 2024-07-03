import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const redLight = document.getElementById("red");
    redLight.style.backgroundColor = "red";

    const greenLight = document.getElementById("green");

    const yellowLight = document.getElementById("yellow");

    setTimeout(() => {
      redLight.style.backgroundColor = "white";
      greenLight.style.backgroundColor = "green";
    }, 3000);

    setTimeout(() => {
      greenLight.style.backgroundColor = "white";
      yellowLight.style.backgroundColor = "yellow";
    }, 5000);

    setTimeout(() => {
      yellowLight.style.backgroundColor = "white";
      redLight.style.backgroundColor = "red";
      setTrigger(!trigger);
    }, 6000);
  }, [trigger]);

  return (
    <>
      <div id="red" class="lights"></div>
      <div id="yellow" class="lights"></div>
      <div id="green" class="lights"></div>
    </>
  );
}

export default App;
