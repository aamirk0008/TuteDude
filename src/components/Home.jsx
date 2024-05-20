import React from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import { GiSevenPointedStar } from "react-icons/gi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrSend } from "react-icons/gr";
import { FaBookOpen } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { PiSealQuestionLight } from "react-icons/pi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import { TiPointOfInterest } from "react-icons/ti";
import certificate1 from "../assets/certificate.jpg";
import study from "../assets/studying.jpg";


import Hiring from './Hiring';
const Home = () => {
  return (
    <>
    <header>
        <div className='social flex'>
            <div className="logo">
                <h2>TuteDude</h2>
            </div>
            <div className="btnLogin">
                <button className="login">LogIn</button>
                <button className="signUp">SignUp</button>
            </div>
        </div>
        <div>
            <nav>
                <ul className='navList'>
                    <li className='navItems'><a href="#front">Overview</a></li>
                    <li className='navItems'><a href="#curriculum">Curriculum</a></li>
                    <li className='navItems'><a href="#refund">Refund</a></li>
                    <li className='navItems'><a href="#testimonials">Testimonials</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section className="front" id='front'>
        <div className="container flex">
            <div className='box1'>
                <h1 className='flex'><span><RiGraduationCapFill className='cap'/></span> An IIT Delhi Alumni Initiative</h1>
            </div>
            <div className='box2'>
                <h1>Become an Expert in the field of <span>Data Science with 6 cources</span></h1>
                <p>A specially crafted Tech Kickstart, with <span>5+ extensive online cources.</span> </p>
            </div>
            <div className='box3 flex'>
                <h4><GiSevenPointedStar /> Personal Mentorship</h4>
                <h4><GiSevenPointedStar /> Internship Assistance</h4>
                <h4><GiSevenPointedStar /> Industry Certified Cources</h4>
            </div>
            <div className='box4 flex'>
                <button className='btn1'>Enroll now <GrSend/></button>
                <button className='btn2'>Know more <AiOutlineQuestionCircle/></button>
            </div>
        </div>
        <div className="services flex">
            <div className="box flex">
                <div className="icon">
                <FaBookOpen />
                </div>
                <div className="head">
                    <h2>24</h2>
                    <p>Cources</p>
                </div>
            </div>
            <div className="box flex">
                <div className="icon">
                    <PiStudentFill/>
                </div>
                <div className="head">
                    <h2>30K+</h2>
                    <p>Learners</p>
                </div>
            </div>
            <div className="box flex">
                <div className="icon">
                    <PiSealQuestionLight/>
                </div>
                <div className="head">
                    <h2>100K+</h2>
                    <p>Doubts Solved</p>
                </div>
            </div>
            <div className="box flex">
                <div className="icon">
                    <FaProjectDiagram/>
                </div>
                <div className="flexCol">
                    <h2>10K+</h2>
                    <p>Student Projects</p>
                </div>
            </div>
        </div>
    </section>
    <section className="curriculum" id="curriculum">
        <div className="container2">
            <div className="bigBox1">
                <h4>Our Top Cource Curriculum</h4>
                <h1><span>Data Science</span> Cource Curriculum</h1>
            </div>
            <div className="bigBox2">
                <div className="smallbox flex">
                    <div>
                        <h2>C++</h2>
                        <p>Learn C++ for strong programming fundamentals.</p>
                    </div>
                    <div className='flex viewbox'>
                    <MdOutlineRemoveRedEye />
                    <p>View Curriculum</p>
                    </div>
                </div>
                <div className="smallbox flex">
                    <div>
                        <h2>MERN Stack</h2>
                        <p>Master the MERN Stack for high-demand projects.</p>
                    </div>
                    <div className='flex viewbox'>
                    <MdOutlineRemoveRedEye />
                    <p>View Curriculum</p>
                    </div>
                </div>
                <div className="smallbox flex">
                    <div>
                        <h2>Data Structures and Algorithms</h2>
                        <p>Excel the Data Structures and Algorithms for interview success.</p>
                    </div>
                    <div className='flex viewbox'>
                    <MdOutlineRemoveRedEye />
                    <p>View Curriculum</p>
                    </div>
                </div>
                <div className="smallbox flex">
                    <div>
                        <h2>Competitive Programming</h2>
                        <p>Learn and enhance your ability to solve complex problems.</p>
                    </div>
                    <div className='flex viewbox'>
                    <MdOutlineRemoveRedEye />
                    <p>View Curriculum</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="refund" id="refund">
        <div className="container3 flex">
            <h1>Don't miss out on this <span>limited-time opportunity</span> to learn for <span>Free!</span></h1>
            <div className="coupon">
                <h3>100% Refund Offer <GiPartyPopper /></h3>
                <label for="points">20 sec left</label>
                <input type="range" id="points" name="points" min="0" max="60"></input>
                <p>offer ends in 10:00Mins</p>
            </div>
            <div className="working flex">
                <div className="bigBox">
                    <h2>Step1: Enroll into your favorite cource for only Rs.1499</h2>
                    <h4>Valid till 2 Years from the date of purchase</h4>
                    <p>Start learning with Lifetime Cource Access</p>
                </div>
                <div className="bigBox">
                    <h2>Step2: Complete Cource & Assignment within 2 Years!</h2>
                    <h4>2 years from the date of enrollment</h4>
                    <p>Finish the cource withtin 2 Years to qualify for Refund</p>
                </div>
                <div className="bigBox">
                    <h2>Step3:Receive 100% Refund upon completion</h2>
                    <h4>100% Enrollment fee is Refunded</h4>
                    <p>Upon Cource completion within 2 Years Get your Rs.1499 Back</p>
                </div>
            </div>
        </div>
    </section>

    {/* <Hiring/> */}
    <section className="hiring">
        <div className="hiringComp">
            <h1>Top Companies Hiring Data Scientist</h1>
            <div className="compLogo">
                <img src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" alt="" />
                <img src="https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo.png" alt="" />
                <img src="https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png" alt="" />
                <img src="https://1000logos.net/wp-content/uploads/2019/06/Tiktok_Logo.png" alt="" />
                <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt="" />
            </div>
        </div>
    </section>
    <section className="testimonials" id="testimonials">
        <div className="container4">
            <h1>Unclock <span>6 Certificates</span> & <span>Internship Opportunities!</span></h1>
            <div className="boxTest">
                <div className="boxsm">
                    <h2>Get 6 Industry Recognized Certificates</h2>
                    <img src={certificate1} alt="" />
                    <div className="buttonsTest">
                        <h4><TiPointOfInterest /> Offical and Verified</h4>
                        <h4><TiPointOfInterest /> Offical and Verified</h4>
                    </div>
                </div>
                <div className="boxsm">
                    <h2>Get 6 Industry Recognized Certificates</h2>
                    <p>with every cource we make you not only industry-ready but also help you crack your first internship</p>
                    <img src={study} alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
    
  )
}

export default Home