import React, {useRef, useEffect} from 'react';
import {Link, Route} from "react-router-dom";
import './ProjectsList.scss';
import onScroll from '../../functions/onScroll';

import {useSelector} from "react-redux";
import Footer from "../Footer/Footer";
import {PAGE_CASESE_NAME} from '../../Constants/Сonstants';


function ProjectsList() {

    const projects = useSelector(state => state.projects);

    let percent = 35;
    let previewProjectHeight = '';
    let coeff = 0;
    let disable = true;

    switch (true) {
        case window.innerHeight < 580 :
            percent = 0;
            coeff = 0;
            previewProjectHeight = '150px';
            disable = true;
            break;

        case window.innerHeight <= 679 && window.innerHeight >= 580 :
            coeff = 0.75
            percent = 40;
            previewProjectHeight = '110px';
            break;

        case window.innerHeight <= 829 && window.innerHeight >= 680 :
            coeff = 0.75
            percent = 34;
            previewProjectHeight = '160px';
            break;

        case window.innerHeight <= 940 && window.innerHeight >= 830 :
            coeff = 0.75
            percent = 35;
            previewProjectHeight = '200px';
            break;

        case window.innerHeight >= 941 :
            coeff = 0.75
            percent = 36;
            previewProjectHeight = '300px';
            break;

        default:
            percent = 0;
            coeff = 0;
            previewProjectHeight = 'fit-content';
            disable = true;

    }

    // Анимация карточек проектов при наведемии курсора

    const onMouseEnter = (el, i, isLastElement) => {
        if(isLastElement && disable) return null;
        el.target.style.transform = `translateY(-${i * percent + percent}%)`;
    };

    const onMouseLeave = (el, i, isLastElement) => {
        if(isLastElement && disable) return null;
        el.target.style.transform = `translateY(-${i * percent}%)`;
    };

    return (
        <>
                <h2 className={"main__title"} >Проекты</h2>
                <div className={'project-wrapper'} style={{
                    height: `${projects.length * previewProjectHeight * coeff}px`
                }}>
                    {
                        projects.map( (project, i) => {

                            const isLastElement = i + 1 === projects.length;

                              return  (
                                          <Link key={i} className={'project-item'} style={{
                                              height: previewProjectHeight,
                                              transform: `translateY(-${i * percent}%)`,
                                              backgroundImage: `url("${project.preview}")`
                                          }} onMouseEnter={(el) => onMouseEnter(el, i, isLastElement)}
                                          onMouseLeave={el => onMouseLeave(el, i, isLastElement)} to={`${PAGE_CASESE_NAME}/${project.path}`} >
                                          </Link>
                              )
                        })
                    }
                </div>
        </>
    )
}

export default ProjectsList;













// const addTransformY = (el, index) => {
//     el.style.transform = `translateY(-${index * percent}%)`;
// }
// const addRef = (el) => {
//     if(el) {
//         const index = +el.attributes.index.value;
//         addTransformY(el, index);
//
//     }
//     return null;
// };