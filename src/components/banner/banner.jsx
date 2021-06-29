import React from 'react'
import Girl  from '../../assets/Girl.svg'

import './styles.css'

const Banner = () => {
    return(
         <div className="main">
            <div className="main_text">
                <h1>App divertido</h1>
                <p>Site feito em React para treinar react-router-dom e axios</p>
            </div>
            <img src={Girl} alt="ilustracao com logo do react" />
        </div>
    )
}
export default Banner
