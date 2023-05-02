import React from "react";
import "./Project.css";


// project images
import AdminDashboard from "./assets/admin_dashboard.png";
import Netflix from "./assets/netflix.png";
import Food from "./assets/food_app.png";
import Business from "./assets/online_business.png";
import Todo from "./assets/todo.png";
import DietApp from "./assets/dietapp.png";
import instagramPreview from "./assets/instagram.png";
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
                                    <img src={AdminDashboard} alt="" className="project__img" />
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
                                    <img src={DietApp} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>

                            <div className="project__meta absolute">
                                <h5 className="project__text">Diet App</h5>
                                <h4 className="project__text">Healthy Eating for a Healthy Weight</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://mythu-diet-app.netlify.app" className="project__btn">View Project</a>
                                    <a href="https://github.com/mythily-muthu/diet-app-client" className="project__btn"><FaGithub /> For Client</a>
                                    <a href="https://github.com/mythily-muthu/diet-app-server" className="project__btn"> For Server</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col__3" data-aos="flip-up">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={instagramPreview} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>

                            <div className="project__meta absolute">
                                <h5 className="project__text">Social Media</h5>
                                <h4 className="project__text">Post your movements and thoughts here..!</h4>
                                <div className="btn_view" style={{ display: "flex", gap: "5px" }}>
                                    <a href="https://mythu-instagram.netlify.app/" className="project__btn">View Project</a>
                                    <a href="https://github.com/mythily-muthu/instagram_client" className="project__btn"><FaGithub /> For Client</a>
                                    <a href="https://github.com/mythily-muthu/instagram_server" className="project__btn"> For Server</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="flip-up">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Netflix} alt="" className="project__img" />
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
                                    <img src={Food} alt="" className="project__img" />
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
                                    <img src={Business} alt="" className="project__img" />
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
                                    <img src={Todo} alt="" className="project__img" />
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


                    <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                        <button className="view__more pointer btn">View more</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;
