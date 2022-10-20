import React, {useState} from "react";
import Movies from "./component/Movies";
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState("#454545");

  const changeTheme = () =>{
    if(theme === "#454545"){
      setTheme("white")
    }else setTheme("#454545")
  }
  return (
    <div className="dark" >
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Movie List</span>
          <button onClick={changeTheme}>Theme 🔆</button>
        </div>
      </nav>
      <Movies theme={theme}/>
    </div>
  );
}
