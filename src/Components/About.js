import React from 'react';


import './About.css';


const About = () => {
    return (
        <div >
            <h3 className='mtd'>Meet The Dev!</h3>

            <div className='Kerridene'>
                <img
                    className="dev-photo"
                    src="https://avatars.githubusercontent.com/u/115031259?v=4"
                    alt="Kerridene Small"
                ></img>

                <h4 className="bio-name">
                    <em>Kerridene Small</em>
                </h4>
                <p className="bio-text-ks">
                    I'm a Full Stack Developer with a background in education. Originally from Jamaica, WI, I'm currently based in the vibrant city of Brooklyn, NY.

                    <br /><br />

                    - Inspired by my sister's passion for fashion, I decided to pay tribute to her in this project by highlighting black fashion designers.

                    - With my expertise in Full Stack Development, I strive to create innovative and user-friendly solutions for complex problems.

                    - Feel free to explore the links below to connect with me, learn more about my work, or discuss potential collaborations.

                    <br /><br />

                    Don't hesitate to reach out if you have any questions or exciting project ideas. Let's create something amazing together!
                </p>

                <a href="https://github.com/Kendie22">
                    <img
                        className="icon"
                        alt="GitHub"
                        title="GitHub"
                        src="./icons/github.png"
                    />
                </a>
                <a href="https://www.linkedin.com/in/kerridene-small/">
                    <img
                        className="icon"
                        alt="LinkedIn"
                        title="LinkedIn"
                        src="./icons/linkedin.png"
                    />
                </a>
            </div>
        </div>

    );
};

export default About;