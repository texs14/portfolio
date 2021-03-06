import React, {useEffect} from 'react';
import {Link, NavLink, useHistory, useRouteMatch} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {examp, whereYou} from "../../actions/actions";
import {onActive} from "../../functions/onActive";
import {regexLiteralAbout, PAGE_CASESE_NAME} from '../../Constants/Сonstants';
import './header.scss';


function Header() {
    let youAreHere = useSelector(state => state.menu.youAreHere);
    let history = useHistory();
    const menuElements = useSelector(state => state.menu.elements);
    const menuProjectsElements = useSelector(state => state.projects);
    const dispatch = useDispatch();


    useEffect(()=> {
        history.listen(() => {
            dispatch(whereYou(history.location.pathname));
        });


    }, []);
    return (

        <header className={"header"}>
            <nav className={"nav-menu"}>
                <ul className={"nav-menu__list"}>
                    {menuElements.map((element, i) => {
                        return (
                            <li className={"nav-menu__item"} key={i}>
                                    <Link
                                        to={element.path}
                                        className={onActive(history.location.pathname, element.path) ? 'active' : ''}
                                    >
                                        {element.title}
                                    </Link>
                                        {
                                            element.path === `/${PAGE_CASESE_NAME}` && history.location.pathname.search(regexLiteralAbout) >= 0 && (
                                                <ul className={"nav-menu__sub-list"}>
                                                    {menuProjectsElements.map((project, i) => {
                                                        return (
                                                            <li className={"nav-menu__sub-item"} key={i}>
                                                                <Link
                                                                    to={`/${PAGE_CASESE_NAME}/${project.path}`}
                                                                    className={onActive(history.location.pathname, project.path) ? 'sub-active' : ''}
                                                                >
                                                                    {project.name}
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
                <ul className="social">
                    <a href="https://github.com/texs14" target={'_blank'} className="social__link social__link_git"></a>
                    <a href="https://hh.ru/resume/0f1ef1bcff08380fdb0039ed1f326946427750" target={'_blank'} className="social__link social__link_hh"></a>
                </ul>
            </nav>
        </header>

    );
}

export default Header;