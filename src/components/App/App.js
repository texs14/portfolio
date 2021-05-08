import React from 'react';
import {Route, Switch} from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../Main/About";
import Footer from "../Footer/Footer";
import Project from "../Project/Project";

function App(){

    return (
        <>
            <Header />

            {/*<Switch>*/}
            {/*    <Route exact path={'/'}>*/}
                    <Main />
            {/*    </Route>*/}
            {/*    <Route exact path={'/about'} >*/}
            {/*        <About />*/}
            {/*    </Route>*/}
            {/*    <Route exact path={`/about/:projectPath`}>*/}
            {/*        <Project />*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
            <Footer />
        </>
    )
}



export default App;