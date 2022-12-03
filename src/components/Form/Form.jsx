import { useState } from 'react'
import validate from './validation.js'
import s from './Form.module.css'
import image from '../../assets/img/ramclip.png';


export default function Form({login}){

    const[userData, setUserData] = useState({
        username: '',
        password: '',
    })

    const[errors, setErrors] = useState({
        username: '',
        password: '',
    })

    const handleInputChange = (e) =>{
        setUserData({
            ...userData, [e.target.name]:e.target.value
        })

        setErrors(validate({
            ...userData, [e.target.name]:e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
    }

    return(
        <div>
            <div className={s.form}>
                <div>
                    <img src={image} alt='' className={s.image}/>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={s.username}>
                        <label className={s.label} htmlFor='username'>Username:</label>
                        <input
                        id='username'
                        name='username'
                        type="text"
                        placeholder='Escribe un usuario...'
                        className={!errors.username?s.search : s.warning}
                        value={userData.username}
                        onChange={handleInputChange}              
                        />
                        <p className={s.danger}>{errors.username}</p>
                    </div>
                    <div className={s.password}>
                        <label className={s.label} htmlFor="password">Password:</label>
                        <input
                        id='password'
                        name='password'
                        type="password"
                        className={!errors.password? s.search : s.warning}
                        value={userData.password}
                        onChange={handleInputChange}
                        />
                        <p className={s.danger}>{errors.password}</p>
                    </div>   
                    <button type='submit'className={s.btnForm}>LOGIN</button>
                </form>
            </div>
        </div>

    )
}