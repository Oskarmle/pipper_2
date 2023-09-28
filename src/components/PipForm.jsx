import React,{useState} from "react";
import { Pip } from "../entities/pip"
import ReactModal from 'react-modal';

export default function PipForm ({isModalOpen, setIsModalOpen, setPips, pips}){
    const [content, setContent] = useState('');
    const [username, setUsername] = useState('');

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
        setIsModalOpen(false)
        setUsername('');  
        setContent('');  
    }

    // lukker modal
    function handlePipCancelClick (){
        setIsModalOpen(false)
    }

return (

    <ReactModal isOpen={isModalOpen} className="modal">
    <div className="form">
        <label>username</label>
        <input type="text" value={username} onChange={handlePipsUsernameChange}/>
        <label>Pip text</label>
        <input type="text" value={content} onChange={handlePipsContentChange}/>

        <button className="pip-button" onClick={handlePipButtonClick}>Post Pip</button>
        <button className="pip-button" onClick={handlePipCancelClick}>Cancel</button>
    </div>
    </ReactModal>
)};