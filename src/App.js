import React from "react";
import "./styles.css";

const Name = ({ name }) => {
  if (name) {
    return <h1>Your name is {name}</h1>;
  } else {
    return <h1>Get and save a name</h1>;
  }
};

export default function App() {
  const [name, setName] = React.useState("");
  const [saved, setSaved] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchName = async () => {
    setLoading(true);
    const res = await fetch("https://randomuser.me/api/");
    const {
      results: [person],
    } = await res.json();
    setLoading(false);

    setName(person.name.first);
  };

  const saveName = () => {
    if (saved.includes(name)) {
      alert("already added");
    } else {
      setSaved(saved.concat(name));
    }
  };
  console.log(saved);
  return (
    <div className="App">
      <div className="flex">
        {loading ? "laddar..." : <Name name={name} />}
        <ul>
          {saved.map((name) => {
            return <li>{name}</li>;
          })}
        </ul>
        {!!name && <button onClick={saveName}>SAVE NAME</button>}
        <button onClick={fetchName}>GIVE ME NAME</button>
        <textarea>hello alva how are youd oing</textarea>
      </div>
    </div>
  );
}
