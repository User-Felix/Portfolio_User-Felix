import './hero.css';
import '../../index.css'
import HeroImage from '../../assets/hero-image.png';
import Button from '../button/button';
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

let icons_Size: number = 30;

export default function Hero() {
    return(
        <div id='content'>
            <div id='message-presentation'>
                <h1>
                    Sebastião Felix
                </h1>
                <p>
                    Software Engineer 
                </p>
                <div id='content-links'>
                    <Button text ="My Works"/>
                    <div id='contacts'>
                        <ul>
                            <li>
                                <CiFacebook id='icons' size={icons_Size}/>
                            </li>
                            <li>
                                <CiInstagram id='icons' size={icons_Size}/>
                            </li>
                            <li>
                                <FaSquareGithub id='icons' size={icons_Size}/>
                            </li>
                            <li>
                                <CiLinkedin id='icons' size={icons_Size}/>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div>
                <img id='hero-image' src={HeroImage} alt="" />
            </div>
        </div>
    );
};