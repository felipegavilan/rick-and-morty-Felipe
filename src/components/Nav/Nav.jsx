import { NavLink } from 'react-router-dom';
import  s from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';

export default function Nav(props){ 
    return( 
        <div>
                <div className={s.container}>
                        <div className={s.links}>
                              <li>
                                <NavLink to="/home" className={({isActive}) => (isActive ? s.active : s.disable)}>HOME</NavLink> 
                              </li>
                              <li>
                                <NavLink to="/about" className={({isActive}) => (isActive ? s.active : s.disable)}>ABOUT</NavLink> 
                              </li>
                              <li>
                                <NavLink to="/favorites" className={({isActive}) => (isActive ? s.active : s.disable)}>FAVORITE</NavLink>
                              </li>
                        </div>
                        <div className={s.nav}>
                                <SearchBar onSearch={props.onSearch} logout={props.logout} random={props.random}/>
                        </div>
                </div>
        </div>

    )   
}