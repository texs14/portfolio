import React, { useEffect, useState} from 'react';
import { useSelector} from "react-redux";
import { useParams, Link} from "react-router-dom";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './project.scss';
import 'swiper/swiper.min.css'

import {PAGE_CASESE_NAME} from '../../Constants/Сonstants';



function Project() {

    SwiperCore.use([Autoplay]);

    const projects = useSelector(state => state.projects);


    const arrPath = projects.map(item => {
        // console.log(item)
        return item.path;
    });

    const {projectPath} = useParams();

    const project = projects.filter(project=> {
        return project.path === projectPath;
    })[0];
    const description = project.description;
    const images = project.images;
    const url = project.url;


        //Отметка где именно в масиве находиться выбранный проект,
        // чтобы реализовать перехад по проектам с помощью кнопок "туда", "сюда"
        const marker = arrPath.findIndex(path => path === project.path);


    return (
        <>
            <section className={'project wrapper-for-bg'}>
                <div className="project__top-wrapper">
                    {marker !== 0 ? <Link className={'project__link'} to={`/${PAGE_CASESE_NAME}/${arrPath[marker - 1]}`} >Предыдущий</Link> : ''}

                    <h2 className={'project__title'}>{project.name}</h2>

                    {marker !== arrPath.length - 1 ? <Link to={`/${PAGE_CASESE_NAME}/${arrPath[marker + 1]}`} className={'project__link '}>Следующий</Link>  : ''}
                </div>

                <Swiper
                    autoplay={{
                        delay: 2000
                    }}
                    spaceBetween={5}
                    slidesPerView={1}
                    loop
                >
                    {
                        images.map((img, key) => (
                        <SwiperSlide key={key}>
                            <img className={"project__image"} src={img} alt="скриншот сайта"/>
                        </SwiperSlide>
                        ))
                    }
                </Swiper>
                { project.url && <h2><a href={`${url}`} className='project__link project__link_site' target="_blank">[ Ссылка на сайт
                    ]</a></h2>}
                { project.gitUrl && <h2><a href={`${project.gitUrl}`} className='project__link project__link_site' target="_blank">[ Ссылка на git
                    ]</a></h2>}
                <p className={"project__paragraph"}>{description}</p>
            </section>
        </>
    )
}

export  default Project;