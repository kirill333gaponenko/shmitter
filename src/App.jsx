
import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";

function App() {

    const [user, setUser] = useState({
        avatar:'https://gravatar.com/avatar/000?d=monsterid',
        name:'monster'
    });
    const [stats, setStats] = useState({
        followers:42,
        following:15,
    });

  return (
      <div className={'app'}>
   <Navigation user={user}/>
      <Body user={user} stats={stats} />
      </div>
  )
}

export default App
