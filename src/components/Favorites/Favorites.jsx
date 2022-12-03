import { connect } from 'react-redux'
import { Card } from '../Card/Card'


export function Favorites({myFavorites}){
    
    return (
        <div>
        
        {myFavorites?.map((char, i) => (
            <Card
                detailId = {char.detailId}
                key={i}
                name = {char.name}
                species = {char.species}
                gender = {char.gender}
                image = {char.image}
                status = {char.status}
            />
           )    )}
        
        </div>
    )
}

export function mapStateToProps(state){
    
    return ({
        myFavorites: state.myFavorites
    })
}
export default connect(mapStateToProps, null)(Favorites)