import style from './About.module.css'
export default function About (){

    return(
        <div>
            <div className={style.container}>
                <h2 style={{color: 'white'}}>Información</h2>
                <div className={style.info}>
                    <p style={{fontSize:'large'}}>
                        Esta aplicación tiene como funcionalidad buscar, agregar y presentar personajes de la serie animada Rick and Morty con sus respectivas caracteristicas. 
                        El objetivo principal de este proyecto es la puesta en práctica de lo aprendido en el desarrollo del Módulo II de <a href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=brand&gclid=Cj0KCQiAj4ecBhD3ARIsAM4Q_jFc1s-0jVvs-THv8KQGDYnL4vpg3nTCmZUQV_uxPd7gWYJbapNCbQcaArKWEALw_wcB">soyHenry</a>.
                    </p>
                </div>
                <div className={style.creador}>
                    <h3>Creador: <a href='https://www.linkedin.com/in/felipe-gavilan-b80348aa/'>Felipe Gavilán</a></h3>
                    <img src="https://i.pinimg.com/originals/f5/af/40/f5af402465b61aef989229e771f7b9c9.jpg" alt="luffy" />
                </div>
            </div>
        </div>
    )
}