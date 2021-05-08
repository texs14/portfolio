import React, {useRef, useEffect} from 'react';
import { useSelector} from "react-redux";
import onScroll from '../../functions/onScroll';
import { useParams, Link} from "react-router-dom";
import '../Main/main.scss';


function Project() {

    const main = useRef(null);

    const projects = useSelector(state => state.projects);

    const arrPath = projects.map(item => {
        return item.path;
    });

    const {projectPath} = useParams();

    const project = projects.filter(project=> {
        return project.path === projectPath;
    })[0];

        //Отметка где именно в масиве находиться выбранный проект,
        // чтобы реализовать перехад по проектам с помощью кнопок "туда", "сюда"
        const marker = arrPath.findIndex(path => path === project.path);


    return (
        <>

            {marker !== 0 && <Link to={`/about/${arrPath[marker - 1]}`} >Туда</Link>}
            {marker !== arrPath.length - 1 && <Link to={`/about/${arrPath[marker + 1]}`} >Сюда</Link>}

            <h2>{projectPath}</h2>
            <img src={project.images[0]} alt=""/>

        </>
    )
}

export  default Project;