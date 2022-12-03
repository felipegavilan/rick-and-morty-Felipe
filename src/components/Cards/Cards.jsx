import Card  from '../Card/Card';
import s from '../Cards/Cards.module.css';

export default function Cards(props) {
   const {characters, onClose} = props;
   return (
   <div className={s.cards}>
      {
            characters.map((m, i) => (
            <Card 
            detailId = {m.id}
            key={i}
            name = {m.name}
            species = {m.species}
            gender = {m.gender}
            image = {m.image}
            status = {m.status}
            onClose = {()=> onClose(m.id)}
            />
         ))
      }
   </div>
   );
}
