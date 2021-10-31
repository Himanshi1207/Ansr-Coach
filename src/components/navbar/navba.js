import React, {useState} from 'react'
import './style.css'
import BtnSlider from './navbar'



export default function Navba() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }



const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelector('navlinks li');


hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle("fade");
    })
});