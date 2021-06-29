import React, {useEffect, useState} from 'react'
import Menu from '../../components/menu/menu'
import Footer from '../../components/footer/footer'
import Axios from 'axios'

import './simpsons.css'

function Simpsons() {

    const [ personagem, setPersonagem ] = useState([])
    const [ click, setClick ] = useState(() => {})

    useEffect(() => {
        const getData = async () => {
            const response = await Axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
            const data = await response.data
            setPersonagem(data)
        }
        getData()
    },[click])

    function ligaClick() {
        setClick(personagem)
    }

    return (
        <div>
            <Menu />

            <div className="main-simpson">
                {personagem.map(perso => {
                    return(
                        <div className="card">
                            <p>{perso.character}</p>
                            <img src={perso.image} alt="personagem simpson"/>
                        </div>
                        
                    )
                })}
                <button onClick={ligaClick}>Clique para trocar o personagem</button>
            </div>
            
            <Footer />
        </div>
    )
}

export default Simpsons
