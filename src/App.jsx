import {useState} from 'react'
import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {ShmitterContext} from "./utils/context.js";

function App() {
    // const [user, setUser] = useState({
    //     avatar: 'https://gravatar.com/avatar/000?d=monsterid',
    //     name: 'Monster',
    // })
    //
    // const changeAvatar = url => {
    //     setUser({...user, avatar: url || user.avatar})
    // }
    // const changeName = name =>{
    //     setUser({...user, name: name || user.name})
    // }
    //
    // const [stats, setStats] = useState({
    //     followers: 0,
    //     following: 0,
    // })
    //
    // const changeStats = (statsType, sum) => {
    //     const res = stats[statsType] + sum;
    //     setStats({...stats, [statsType]: res < 0 ? 0 : res});
    // }
    //
    //


    return (
        <div className={'app'}>
            {/*<ShmitterContext value={{*/}
            {/*    user, stats, changeAvatar, changeName,*/}
            {/*    changeStats*/}
            {/*}}>*/}
                <Navigation/>
                <Body/>
            {/*</ShmitterContext>*/}
        </div>
    )
}

export default App
