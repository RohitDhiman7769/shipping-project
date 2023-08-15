import React from 'react';
import './Qualification.css';

export default function Qualification() {
    return (
        <>
            <p style={{ color: 'green' }}>As an  software engineer with 1 years in the industry, I bring a wealth of technical expertise and leadership abilities to drive successful software development projects. With a strong background in full-stack development and proficiency in multiple programming languages, including React, Nodejs, , and JavaScript, I have consistently delivered high-quality solutions while adhering to project timelines.</p>
            <div style={{ display: 'flex' }}>
                <div className='qualificaton-sidenav'>
                    <p id='twelveth' >2019:</p>
                    <p id='college'>2022:</p>
                    <p id='deploma'>2023:</p>

                </div >
                <div className='rightbox'>
                    <p>In 2018 - 2019, As a 12th-grade art student, I possess a strong passion for creativity and a keen eye for artistic expression. Through my coursework and projects, I have developed a solid foundation in various art forms, including drawing, painting, sculpture, and mixed media. I have honed my skills in composition, color theory, and visual storytelling, allowing me to effectively communicate ideas and emotions through my artwork. I am proficient in using different art materials and techniques, and I am comfortable working both independently and collaboratively. </p>
                    <p>In 2019 - 2022 ,As an art student, my educational background encompasses a comprehensive study of artistic principles, techniques, and theories. I hold a [Degree Name] in [Art-related Field] from [University Name], where I gained a solid foundation in visual arts and honed my creative skills. Throughout my studies, I explored various mediums, such as painting, drawing, sculpture, and digital art, allowing me to develop a versatile artistic style.</p>
                    <p>In 2022 - 2023 ,Obtaining a coding diploma has equipped me with comprehensive knowledge and practical skills in software development. Through the program, I gained a solid foundation in programming languages, such as Java, C++, and Python, as well as an understanding of fundamental concepts like data structures and algorithms. </p>
                </div>
            </div>
        </>
    )
};