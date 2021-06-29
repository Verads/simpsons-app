import React, { useState, useEffect } from 'react'
import api from '../../service/api'
import Menu from '../../components/menu/menu'
import Footer from '../../components/footer/footer'
import './search.css'

function Search() {

    const [cards, setCards] = useState([])
    const [search, setSearch] = useState('')
    const [filtering, setFiltering] = useState([])

    useEffect(() => {
        const getData = async () => {
            const config = {
                headers: {
                    'x-rapidapi-key': 'cfc1071059mshe13abab8855e17ep1c634djsnca8cf2682d41',
                }
            }
            const response = await api.get('/cards', config)
            const data = response.data
            setCards(data.Classic)
        }
        getData()
    }, [])

    useEffect(() => {
        setFiltering(
            cards.filter(card => {
                return card.name.includes(search)
            })
        )
    }, [search, cards])


    return (
        <>
        <Menu />
            <div className="main_cards">
                <h1>Cartas de Hearthstone</h1>
                <p className="loading">As cartas podem demorar um pouco para carregar...</p>

                <div className="search_card">
                    <input type="text" id="search_input" onChange={e => { setSearch(e.target.value) }} placeholder="Procurar por carta..." />
                    <button>Procurar</button>
                </div>
                <div className="classic_cards">
                    {filtering.map(card => {
                        return <div className="hearthstone_cards">
                            <h2 key={card.name}>{card.name}</h2>
                            <p key={card.type}>{card.type}</p>
                        </div>
                    })}
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Search
