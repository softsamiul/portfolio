import React from 'react';
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'
import { motion } from 'framer-motion'
const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using and SQLlite",
    },
    {
        icon: api,
        title: "API Development",
        about: "I can develop robust REST API using django-rest-api "
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "a daily problem solver in HackerRank and Leetcode"
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "minimalistic user interface designer using figma and  framer"
    },
    {
        icon: computer,
        title: "Whatever",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!"
    },
]


const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about"

            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* Who am I */}
            <div className="who-am-i">
                <h4 style={{fontWeight:"bold"}}>Who Am I</h4>
            </div>
            <p className="about__intro">
            Frontend Developer || JavaScript || React || Aspiring Full Stack Developer

            I'm Samiul Islam is a highly motivated individual with a passion for constantly developing skills and growing professionally.

            Pursuing bachelors degree in Computer Science and Engg. from Camellia Institute Of Technology (CIT), Kolkata and also completed diploma engg. in Computer Science And Technology from Dumkal Polytechnic.

            A fast learner, always on the lookout for opportunities.
            </p>
            <p className="about__intro">
            Frontend Developer || JavaScript || React || Aspiring Full Stack Developer

            I'm Samiul Islam is a highly motivated individual with a passion for constantly developing skills and growing professionally.

            Pursuing bachelors degree in Computer Science and Engg. from Camellia Institute Of Technology (CIT), Kolkata and also completed diploma engg. in Computer Science And Technology from Dumkal Polytechnic.

            A fast learner, always on the lookout for opportunities.
            </p>
        </motion.div>
    );
};

export default About;