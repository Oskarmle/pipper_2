import React,{useState} from "react";
import pipsDummyData from "../components/Feed"
import { Pip } from "../entities/pip"

export default function PipForm (){
    const [content, setContent] = useState('');
    const [username, setUsername] = useState('');

    const [pips, setPips] = useState(pipsDummyData)

    const handlePipsContentChange = (e) => {
        console.log(e.target.value);
        setContent(e.target.value)
    }

    const handlePipsUsernameChange = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }


    // pipknap funktionalitet
    const handlePipButtonClick = () => {
        const newPip = new Pip(content, new Date(), username)

        setPips([...pips, newPip])
    }


return (
    <div className="form">
        <label>username</label>
        <input type="text" value={username} onChange={handlePipsUsernameChange}/>
        <label>Pip text</label>
        <input type="text" value={content} onChange={handlePipsContentChange}/>
        <button className="pip-button" onClick={handlePipButtonClick}>Post Pip</button>
    </div>
)

};