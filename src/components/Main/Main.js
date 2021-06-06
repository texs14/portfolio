import React, {useEffect, useRef} from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import './main.scss';

import Project from "../Project/Project";
import ProjectsList from "../ProjectsList/ProjectsList";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";



function Main() {

    const history = useHistory();

    const main = useRef(null);

    useEffect(() => {
        history.listen(() => {
            main.current.scrollTop = 0;
            console.log('check');
        });
    })

    return (
        <main className={"main"} ref={main}>
                <Switch>
                    <Route exact path={'/'}>
                        <AboutMe/>
                    </Route>
                    <Route exact path={'/about'}>
                        <ProjectsList />
                    </Route>
                    <Route path={`/about/:projectPath`}>
                        <Project />
                    </Route>
                </Switch>
            <Footer />
        </main>
    )
}

export default Main;