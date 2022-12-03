import React from 'react';
import style from '../SearchBar/SearchBar.module.css';

export default function SearchBar(props) {
   
   const [userInput, setUserInput] = React.useState('')
   
   function handleChange(e){
      const {value} = e.target; 
         setUserInput(value);
   }


   return (
      <div >
         <input 
            type='search' 
            className={style.search} 
            placeholder="Escribe aquí..." 
            onChange={handleChange}
            />
         <button 
            className={style.agregar} 
            onClick={() => props.onSearch(userInput)}>
            Agregar
         </button>
         <button 
            className={style.agregar} 
            onClick={props.random}
            >
            Random
         </button>
         <button 
         className={style.logout} 
         onClick={props.logout}>
            LOGOUT
         </button>
   
      </div>
   );
}
