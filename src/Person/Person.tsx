import React from 'react';
import './Person.css';

interface Iperson {
  switchNameHandler?: () => void,
  usernameChangedHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  children?: string;
  username: string;
  age: number;
}

const person = (props: Iperson) => {
  return (
    <div className="Person">      
      <h3 onClick={props.switchNameHandler}>I'm {props.username} and I am {props.age}</h3>
      <p>{props.children}</p>
      <input 
        type="text" 
        name="newName" 
        id="newName"
        onChange={props.usernameChangedHandler}
        value={props.username}/>
    </div>
  )
}

export default person;