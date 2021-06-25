import React, { useEffect, useState} from 'react';
import { useSelector} from "react-redux";
import { useParams, Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import './project.scss';
import 'swiper/swiper.scss';


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
    console.log(project);
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
                    <SwiperSlide className='slide'>1</SwiperSlide>
                    <SwiperSlide className='slide'>2</SwiperSlide>
                    <SwiperSlide className='slide'>3</SwiperSlide>
                </Swiper>


                {
                    description.desctop.map((block, i)=> {
                        return (
                            <div className="project__wrapper-text" key={i}>
                                <img className={"project__image"} src={block.image} alt="скриншот сайта"/>
                                <p className={"project__paragraph"}>{block.paragraph}</p>
                            </div>
                            )

                    })
                }
                {
                    description.mobile.image && (
                            <div className="project__wrapper-text-about-mobile" >
                                <h2>Mobile</h2>
                                <img className={"project__image"} src={description.mobile.image} alt="скриншот сайта"/>
                                <p className={"project__paragraph"}>{description.mobile.paragraph}</p>
                            </div>
                    )
                }


            </section>
        </>
    )
}

export  default Project;