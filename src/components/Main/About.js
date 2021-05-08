import React, {useRef, useEffect} from 'react';
import {Route} from "react-router-dom";
import './main.scss';
import onScroll from '../../functions/onScroll';

import {useSelector} from "react-redux";



function About() {
    const main = useRef(null);

    useEffect(() => {
        // let scrollStyle = main.current.scrollHeight > window.innerHeight ? "scroll" : "none";
        // main.current.style.overflowY = scrollStyle
        // onScroll(main);
    });


    return (
        <>

                <h1>About</h1>
                <h1  className={"main__title"} >Title</h1>
                <h1  className={"main__title"} >Title</h1>
                <h1  className={"main__title"} >Title</h1>
                <h1  className={"main__title"} >Title</h1>
                <h1  className={"main__title"} >Title</h1>
                <h1  className={"main__title"} >Title</h1>
                <h1  className={"main__title"} >Title</h1>

        </>
    )
}

export default About;