import React from "react";
import "./Project.css";
import blog from './img/Blog.png';
import hotel from './img/Hotel.png';
import ecommerce from './img/ecommerce.png';
import car from './img/car.png';
import coffee from './img/coffee.png';
import watch from './img/watch.png';
import {
    FaGithub,
} from "react-icons/fa";


function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">My Latest Project</h1>

            </div>
            <div className="container">
                <div className="row__project row__flex">

                    <div className="col__3" data-aos="flip-up">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={blog} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>

                            <div className="project__meta absolute">
                                <h5 className="project__text">Admin Dashboard</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://mythu-admin-dashboard.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/mythily-muthu/admin_dashboard_app" className="project__btn"><FaGithub /> For Client</a>

                                </div>



                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="flip-up">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={hotel} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>

                            <div className="project__meta absolute">
                                <h5 className="project__text">Netflix</h5>
                                <h4 className="project__text"> Getting tickets to the big show</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://mythu-netlify.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/mythily-muthu/netflix" className="project__btn"><FaGithub /> For Client</a>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="flip-up">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={ecommerce} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Food App</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://mythu-food-app.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/mythily-muthu/website_tailwind" className="project__btn"><FaGithub /> View GitHub</a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="flip-down">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={car} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Responsive Navbar</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://mythu-crud-application.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/mythily-muthu/navbar_react" className="project__btn"><FaGithub /> View GitHub</a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="flip-down">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={coffee} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">To Do App</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://mythu-netlify-to-do.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/mythily-muthu/to_do_app" className="project__btn"><FaGithub /> View GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="flip-down">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={watch} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Watch Store</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://online-watch-store.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/Gokulcasper/Watch-store" className="project__btn"><FaGithub /> View GitHub</a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                        <button className="view__more pointer btn">View more</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;
