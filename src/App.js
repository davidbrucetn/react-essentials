import React, { useState, useEffect, useReducer } from 'react';
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Services,
  CompanyHistory,
  Location,
  Whoops404
} from "./pages";

// import restaurant from "./restaurant.jpg";
import './App.css';

// function Header(props) {
//   return (
//     <header>
//       <h1>{props.name}'s Kitchen</h1>
//     </header>
//   )
// }
// function Main(props) {
//   return (
//     <section>
//       <p>We serve the most {props.adjective} food around.</p>
//       <img src={restaurant} height={200} alt="Napkin and Silverware at Restaurant Table" />
//       <ul style={{ textAlign: "left" }}>
//         {props.dishes.map((dish) => (
//           <li key={dish.id}>{dish.title}</li>
//         ))}
//       </ul>
//     </section>
//   )
// }
// function Footer(props) {
//   return (
//     <footer>
//       <p>Copyright {props.year}</p>
//     </footer>
//   )

// }

// const dishes = [
//   "Farm Burger with Fries",
//   "Salmon with Asparagus",
//   "Grilled Pork Chop with Squash"
// ];

// const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

// function SecretComponent() {
//   return <h1>Super secret info for authorized users.</h1>
// }

// function RegularComponent() {
//   return <h1>Everyone can see this component.</h1>
// }
// function App(props) {
// Object destructuring
// function App({ authorized }) {

//   return (
//     <>
//       {authorized ? <SecretComponent /> : <RegularComponent />}
//     </>
//   )


// }


function App({ login }) {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  // const [checked, setChecked] = useState(false);
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(emotion);

  // function toggle() {
  //   setChecked((checked) => !checked);
  // }


  useEffect(() => {
    console.log(`It's ${emotion} around here!`);

  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login])

  function GithubUser() {
    if (loading) return <h1>Loading...</h1>;
    if (error)
      return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (!data) return null;

    return (

      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  }


  return (
    // <div>
    //   <h1>Hello React Testing Library</h1>
    // </div>
    <div key="App-Div">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />

        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>

      <hr />
      <div key="App-Github-Div">
        <h1 style={{ color: 'teal' }}>GitHub API</h1>
        <GithubUser />

      </div>
      <hr />
      <div key="App-useState-useReducer-Div">
        <h1 style={{ color: 'teal' }}>Initial Lessons</h1>
        <h1>Hello! Current emotion is {emotion} and {secondary}.</h1>
        <button onClick={() => setEmotion("happy")}>Happy</button>
        <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
        <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
        <br />
        <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
        <br />
        <input
          type="checkbox"
          value={checked}
          onChange={toggle} />
        {checked ? "Checked" : "Not checked"}
      </div>
      <hr />





    </div >
  )
}

export default App;
