import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import style from "./Detail.module.css"

export default function Detail(){
    const { detailId } = useParams();
    const [ character, setCharacter ] = useState({});
    const navigate = useNavigate();

   
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         })
         .catch((err) => {
            window.alert('No hay personajes con ese ID');
         });
      return setCharacter({});
   }, [detailId]);
 
    return(
        <div >
         <div className={style.containerDetail}>
                  <div className={style.conteinerBtn}>
                     <button onClick={()=> navigate('/home')} className={style.btn}>VOLVER</button>
                  </div>
                  <div>
                     <h1>{character.name}</h1>
                  </div>
                  <div className={style.datos}>
                     <div className={style.datosDetail}>
                        <h2>STATUS: {character.status}</h2>
                        <h2>SPECIE: {character.species}</h2>
                        <h2>GENDER: {character.gender}</h2>
                        <h2>ORIGIN: {character.origin?.name}</h2>
                     </div>
                     <div className={style.imagen}>
                        <img src={character.image} alt={character.name} style={{width:'300px', height:'300px'}}/>
                     </div>
                  </div>
         </div>
            
        </div>

    )
}