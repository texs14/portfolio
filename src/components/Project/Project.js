import React, { useEffect} from 'react';
import { useSelector} from "react-redux";
import { useParams, Link} from "react-router-dom";
import './project.scss';


function Project() {

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
        <section className={'project wrapper-for-bg'}>

            <div className="project__top-wrapper">
                {marker !== 0 ? <Link className={'project__link'} to={`/about/${arrPath[marker - 1]}`} >Туда</Link> : ''}

                <h2 className={'project__title'}>{projectPath}</h2>

                {marker !== arrPath.length - 1 ? <Link to={`/about/${arrPath[marker + 1]}`} className={'project__link '}>Сюда</Link>  : ''}
            </div>
            <img src={project.images.desktop[0]} alt=""/>
            <p>{project.description.paragraphFirst}</p>

        </section>
    )
}

export  default Project;