import {useState} from 'react';
export default function Player({initialName, symbol}) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
      setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
      setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonName = "Edit";
  if(isEditing) {
      editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
      buttonName = "Save";
  }
  return (
  <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{buttonName}</button>
  </li>
  );
}