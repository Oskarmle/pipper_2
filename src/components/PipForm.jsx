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

    const postPips = async (newPip) => {
        const tableName = "pipper";
        const projectUrl = "https://gkavjglqqnalhjhbegaw.supabase.co"
        const data = await fetch(projectUrl + '/rest/v1/' + tableName, {
          method: "POST",
          body: JSON.stringify(newPip),
          headers: {
            apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYXZqZ2xxcW5hbGhqaGJlZ2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1MjM5MDgsImV4cCI6MjAxNTA5OTkwOH0.Qb5Cqe6_ix37I0wlOWVTHraCCc-ln6OJ57P8iL0wiQw',
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          }
        }).then(result => result.json())
        .then(createdPips => {
          const pipsFromSupabase = createdPips[0];
          setPips([...pips, pipsFromSupabase]);
      
          console.log(createdPips);
        })
      }



    // pipknap funktionalitet
    const handlePipButtonClick = () => {
        const newPip = new Pip(username, content)
        setPips([...pips, newPip])
        setIsModalOpen(false)
        setUsername('');  
        setContent('');
        setTouchedContentPip(false)
        setTouchedUsernamePip(false)

        postPips(newPip)

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
