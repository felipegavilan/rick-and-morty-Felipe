import { useState, useEffect} from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import tittle from './assets/img/58f37720a4fa116215a9240f.png';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites.jsx';


export default function App () {
  const [characters, setCharacters] = useState([])
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false)
  const username = 'felipe@gmail.com'
  const password = 'felipe1'

  function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }else{
      alert('Datos Incorrectos')
   }
}

  function logout() {
   setAccess(false);
   navigate('/')
  }

   useEffect(() => {
   !access && navigate('/');
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [access]);

  function onSearch(character) { 

      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
   
     
 }

 function random (){
      let randomNum = Math.floor(Math.random() * 826);
      onSearch(randomNum);
   }
 
  const onClose = (id) => {
  setCharacters(characters.filter(char => char.id !== id))
 };

//   return (
//     <div className='App' >
//       <div>
//         <Nav onSearch={onSearch}/>
//       </div>
      // <div className="divTittle">
      //   <img src={tittle} style={{width: '35%'}} alt='' />
      // </div> 
//       <Cards characters={characters} onClose={onClose}/>
//     </div>
//   )

    return(
      <div className='App'>
         {location.pathname !== '/'?<Nav onSearch={onSearch} logout={logout} random={random}/>:null}
        <div className="divTittle">
          <img src={tittle} style={{width: '35%'}} alt='tittle' />
        </div> 
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/detail/:detailId" element={<Detail/>} />
         </Routes>
      </div>

    )
}
