import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Inicio from '../pages/inicio/inicio'
import Simpsons from '../pages/simpsons/simpsons'
import Search from '../pages/search/search'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Inicio} />
                <Route path='/simpsons' component={Simpsons} />
                <Route path='/search' component={Search} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes