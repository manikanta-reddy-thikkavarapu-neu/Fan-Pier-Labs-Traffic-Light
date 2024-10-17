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

// Below code no need to use document object:

// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [currentLight, setCurrentLight] = useState("red");

//   useEffect(() => {
//     const cycleLights = () => {
//       if (currentLight === "red") {
//         setTimeout(() => setCurrentLight("green"), 3000);
//       } else if (currentLight === "green") {
//         setTimeout(() => setCurrentLight("yellow"), 2000);
//       } else if (currentLight === "yellow") {
//         setTimeout(() => setCurrentLight("red"), 1000);
//       }
//     };

//     cycleLights();
//   }, [currentLight]);

//   return (
//     <div className="traffic-light">
//       <div
//         className={`light ${currentLight === "red" ? "red" : ""}`}
//       ></div>
//       <div
//         className={`light ${currentLight === "yellow" ? "yellow" : ""}`}
//       ></div>
//       <div
//         className={`light ${currentLight === "green" ? "green" : ""}`}
//       ></div>
//     </div>
//   );
// }

// export default App;

// Below code is using useRef instead of document object:

// import { useEffect, useRef, useState } from "react";
// import "./App.css";

// function App() {
//   const redRef = useRef(null);
//   const yellowRef = useRef(null);
//   const greenRef = useRef(null);

//   const [trigger, setTrigger] = useState(false);

//   useEffect(() => {
//     const redLight = redRef.current;
//     const greenLight = greenRef.current;
//     const yellowLight = yellowRef.current;

//     redLight.style.backgroundColor = "red";

//     setTimeout(() => {
//       redLight.style.backgroundColor = "white";
//       greenLight.style.backgroundColor = "green";
//     }, 3000);

//     setTimeout(() => {
//       greenLight.style.backgroundColor = "white";
//       yellowLight.style.backgroundColor = "yellow";
//     }, 5000);

//     setTimeout(() => {
//       yellowLight.style.backgroundColor = "white";
//       redLight.style.backgroundColor = "red";
//       setTrigger(!trigger);
//     }, 6000);
//   }, [trigger]);

//   return (
//     <>
//       <div ref={redRef} className="lights"></div>
//       <div ref={yellowRef} className="lights"></div>
//       <div ref={greenRef} className="lights"></div>
//     </>
//   );
// }

// export default App;