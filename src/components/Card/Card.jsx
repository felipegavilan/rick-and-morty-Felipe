/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addCard, deleteCard} from '../../redux/actions/actions';
import s from '../Card/Card.module.css';

export function Card(props) {
   const [isFav, setIsFav] = useState(false);
   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         props.deleteCard(props.detailId)
      } else{
         setIsFav(true);
         props.addCard(props)
      }
   }

   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.detailId) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line no-undef
   }, [props.myFavorites]);

   return (
      
         <div className={s.divCard}>
            {
            isFav ? (
               <button className={s.btnFav} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={s.btnFav} onClick={handleFavorite}>🤍</button>
            )
            }    
            <button onClick={props.onClose} className={s.btn}>X</button>
               <div className={s.nombre}>
                  <Link to={`/detail/${props.detailId}`}>
                     <h2>{props.name}</h2>
                  <img src={props.image} alt="icon" />
                  </Link>
                  <div className={s.datos}>
                     <h2>{props.species}</h2>
                     <h2>{props.gender}</h2>
                  </div>
               </div>
         </div>
     
   );
}

export function mapDispatchToProps(dispatch){
   return{
   addCard: (personaje) =>{
      dispatch(addCard(personaje))},
   deleteCard:(id) =>{
      dispatch(deleteCard(id))
   }
   }
}

export function mapStateToProps(state){
   return ({ 
      myFavorites: state.myFavorites,
   })
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);