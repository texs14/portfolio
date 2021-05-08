import React, {useEffect} from 'react';
import {Link, NavLink, useHistory, useRouteMatch} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {examp, whereYou} from "../../actions/actions";
import {onActive} from "../../functions/onActive";
import './header.scss';


function Header() {
    const regexLiteralAbout = /\/about\/?/g;
    let youAreHere = useSelector(state => state.menu.youAreHere);
    let history = useHistory();
    const menuElements = useSelector(state => state.menu.elements);
    const dispatch = useDispatch();


    useEffect(()=> {
        history.listen(() => {
            dispatch(whereYou(history.location.pathname));
        });

    }, [youAreHere]);
    return (

        <header>
            <nav className={"nav-menu"}>
                <ul className={"nav-menu__list"}>
                    {menuElements.map((element, i) => {
                        return (
                            <li className={"nav-menu__item"} key={i}>
                                    <Link
                                        to={element.path}
                                        style={onActive(history.location.pathname, element.path) ? {backgroundColor: 'red'} : {   }}
                                    >
                                        {element.title}
                                    </Link>
                                        {
                                            element.projects && history.location.pathname.search(regexLiteralAbout) >= 0 && (
                                                <ul className={"nav-menu__sub-list"}>
                                                    {element.projects.map((project, i) => {
                                                        return (
                                                            <li className={"nav-menu__sub-item"} key={i}>
                                                                <Link
                                                                    to={`/about${project.path}`}
                                                                    style={onActive(history.location.pathname, project.path) ? {backgroundColor: 'red'} : {   }}
                                                                >
                                                                    {project.title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            )
                                        }
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>

    );
}

export default Header;