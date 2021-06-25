import React, { useEffect, useState} from 'react';
import { useSelector} from "react-redux";
import { useParams, Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import './project.scss';
import 'swiper/swiper.min.css'


function Project() {

    const projects = useSelector(state => state.projects);


    const arrPath = projects.map(item => {
        console.log(item)
        return item.path;
    });

    const {projectPath} = useParams();

    const project = projects.filter(project=> {
        return project.path === projectPath;
    })[0];
    const description = project.description;
    const images = project.images;
    console.log(images);
    console.log(description);

        //Отметка где именно в масиве находиться выбранный проект,
        // чтобы реализовать перехад по проектам с помощью кнопок "туда", "сюда"
        const marker = arrPath.findIndex(path => path === project.path);


    return (
        <>
            <section className={'project wrapper-for-bg'}>

                <div className="project__top-wrapper">
                    {marker !== 0 ? <Link className={'project__link'} to={`/about/${arrPath[marker - 1]}`} >Туда</Link> : ''}

                    <h2 className={'project__title'}>{project.name}</h2>

                    {marker !== arrPath.length - 1 ? <Link to={`/about/${arrPath[marker + 1]}`} className={'project__link '}>Сюда</Link>  : ''}
                </div>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
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



                <p className={"project__paragraph"}>{description}</p>



            </section>
        </>
    )
}

export  default Project;