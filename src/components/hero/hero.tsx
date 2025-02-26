import './hero.css';
import '../../index.css'
import HeroImage from '../../assets/hero-image.png';
import Button from '../button/button';
import { FaSquareGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import React from 'react';

let icons_Size: number = 30;

export default function Hero(): React.ReactElement {
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