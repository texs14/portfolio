import React, {useRef, useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import './main.scss';

import Project from "../Project/Project";
import About from "./About";



function Main() {
    const main = useRef(null);

    useEffect(()=> {
        main.current.style.overflowY = main.current.scrollHeight > window.innerHeight ? 'scroll' : null;
    });

    return (
        <main ref={main} className={"main"} >
            <Switch>
                <Route exact path={'/'}>
                    <h1>Home</h1>
                    <h1  className={"main__title"} >Title</h1>
                    <h1  className={"main__title"} >Title</h1>
                </Route>
                <Route exact path={'/about'}>
                    <About />
                </Route>
                <Route path={`/about/:projectPath`}>
                    <Project />
                </Route>
            </Switch>
        </main>
    )
}

export default Main;