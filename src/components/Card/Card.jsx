/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import {addCard, deleteCard} from '../../redux/actions/actions';
import s from '../Card/Card.module.css';

export default function Card(props) {
   // const {addCard, deleteCard} = props;
   const myFavorites = useSelector(state=> state.myFavorites);
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);
  function handleFavorite(){
      if(isFav){
         setIsFav(false);
         dispatch(deleteCard(props.id))
      } else{
         setIsFav(true);
         dispatch(addCard(props))
      }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line no-undef
   }, [myFavorites]);

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
                  <Link to={`/detail/${props.id}`}>  
                       
                     <h2 >{props.name}</h2>   
                       
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

// export function mapDispatchToProps(dispatch){
//    return{
//    addCard: (personaje) =>{
//       dispatch(addCard(personaje))},
//    deleteCard:function(id){
//       dispatch(deleteCard(id))
//    }
//    }
// }

// export function mapStateToProps(state){
//    return ({ 
//       myFavorites: state.myFavorites,
//    })
// }

// export default connect(mapStateToProps, null)(Card);