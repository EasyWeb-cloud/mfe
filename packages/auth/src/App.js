import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'

import Signup from './components/Signup' 
import SignIn from './components/Signin'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default ({ history, onSignin }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path='/auth/signin'>
                        <SignIn onSignin={onSignin}/>
                    </Route>
                    <Route path='/auth/signup'>
                        <Signup onSignin={onSignin}/>
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}