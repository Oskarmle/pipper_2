import React,{useState} from "react";
import { Pip } from "../entities/pip"
import ReactModal from 'react-modal';

export default function PipForm ({isModalOpen, setIsModalOpen, setPips, pips}){
    const [content, setContent] = useState('');
    const [username, setUsername] = useState('');
    const [touchedUsernamePip, setTouchedUsernamePip] = useState(false);
    const [touchedContentPip, setTouchedContentPip] = useState(false);

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
        setTouchedContentPip(false)
        setTouchedUsernamePip(false)
    }

    // lukker modal
    function handlePipCancelClick (){
        setIsModalOpen(false)
        setUsername('');
        setContent('');
        setTouchedContentPip(false)
        setTouchedUsernamePip(false)
    }

    let isValid = content.trim() !== '' && username.trim() !== '';
    let isUsernameValid = username.trim() !== '';
    let isContentValid = content.trim() !== '';

return (

    <ReactModal isOpen={isModalOpen} className="modal">
    <div className="form">
        <label className="username_modal">Username</label>
        <input type="text" value={username}  onChange={handlePipsUsernameChange} onBlur={() => setTouchedUsernamePip(true)} />
        {!isUsernameValid && touchedUsernamePip &&
         <div>
            Username cannot be empty. Please fill out the input field.
        </div>
        }
       
        <label className="content_modal">Pip text</label>
        <input type="text" value={content} onChange={handlePipsContentChange} onBlur={() => setTouchedContentPip(true)}/>
        {!isContentValid && touchedContentPip &&
        <div>
                Content cannot be empty. Please fill out the input field.
        </div>
        }
        <button className="pip-button-post" onClick={handlePipButtonClick} disabled={!isValid}>Post Pip</button>
        <button className="pip-button-cancel" onClick={handlePipCancelClick}>Cancel</button>
    </div>
    </ReactModal>
)};
