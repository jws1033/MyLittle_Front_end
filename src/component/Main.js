import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Menu from './Menu'
import Footer from './Footer'
import Home from './Home'
import ReWard from './Reward'
import MyPage from './MyPage'
import PaperWeightRecode from './PaperWeightRecode'
import PaperWeight from './PaperWeight'
import SignModified from './SignModified'
import Withdrawal from './Withdrawal'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Main = () => {
    return (
        <Router>
            <Route component={Menu} />
            <Route component={Footer} />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/reward">
                    <ReWard />
                </Route>
                <Route path="/mypage">
                    <MyPage />
                </Route>
                <Route path="/paperweightrecode">
                    <PaperWeightRecode />
                </Route>
                <Route path="/paperweight">
                    <PaperWeight />
                </Route>
                <Route path="/signmodified">
                    <SignModified />
                </Route>
                <Route path="/withdrawal">
                    <Withdrawal />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/signout">
                    <SignOut />
                </Route>
            </Switch> 
        </Router>
    )
}

export default Main
