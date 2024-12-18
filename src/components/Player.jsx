import { useState } from "react";

export default function Player({initialName,symbol ,isActive,onChangeName}){
    const [isEditing ,setIsEditing ] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick(){
        setIsEditing((editing)=> !editing);

        if(isEditing){
            onChangeName(symbol,playerName);
        }
        
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }
    return(
        <li className={isActive?'active':undefined}>
         <span className="player">
            {/* <span className="player-name">{name}</span>
            <span className="player-symbol">{symbol}</span> */}
            {
                isEditing?
                <input type="text" required value={playerName} onChange={handleChange} ></input>
                :
                <span className="player-name">{playerName}</span>
            }
            <span className="player-symbol">{symbol}</span>
         </span>
         <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
        </li>
    )
}