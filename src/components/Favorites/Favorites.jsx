// import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'


export default function Favorites(){
    const myFavorites = useSelector(state => state.myFavorites)

    return (<div>
        
        {myFavorites.map((char) => (
            <Card
            id = {char.id}
            key={char.id}
            name = {char.name}
            species = {char.species}
            gender = {char.gender}
            image = {char.image}
            status = {char.status}   
            />
            ))}
           
        
        </div>
    )
}

// export function mapStateToProps(state){
    
//     return ({
//         myFavorites: state.myFavorites
//     })
// }
// export default connect(mapStateToProps, null)(Favorites)