import React from "react";
import resume from "../../../assets/documents/Ian-resume.pdf";

function About () {
    return (
        <div>
            <h1>About Me</h1>
            <p>I am a Mechanical Engineer specializing in Energy Production and Sustainability, formerly an automotive and diesel technician by trade. I am slated to graduate from UNC-Charlotte in December 2023 as Summa Cum Lade. As a student at UNCC, I engaged in engineering projects on campus, such as the creation of a wind tunnel for the Fluid Dynamics department. I also started a collegiate racing team and club known as Formula SAE Electric Vehicle, where students from any major can participate in a design competition to build a rules-complaint electric racecar. I consider myself a lifelong learner, taking any opportunity to learn and teach others where I can.</p>
            <p>I am passionate about making life more sustainable without impacts to everyday life. I have engaged in a study abroad program based in Paris, France for sustainability and I have been working as a Co-Op for an Energy Company specializing in Greenfield projects to bring more wind, solar and battery storage online. In addition to a sustainability passion, I am hungry to create and provide the most economical and reliable solutions for products and services.</p>
            <p>I consider my tenure servicing and maintaining a fleet of over 50 school buses to be one of my biggest professional achievements, due to the satisfaction of providing safe travel for tens of thousands of children every day. I believe this achievement of hard work trumps other achievements of innovation, due to the service provided for future generations. A personal accomplishment I am prouder of than any other is my hand in creating and running the Formula SAE Electric Vehicle team at UNCC. This team provided a safe haven for future engineers and other majors alike. The team was founded to not single any one person out, and allow those individuals to grow while learning career skills, such as corporate outreach, marketing, financial planning, project planning, project engineering, and communications.</p>
            <p>I believe in thoroughness and thoughtfulness in the workplace and in my personal life. I am an avid cyclist, father, husband, innovator, and friend. I look towards the future in terms of sustainability and creating the best environment, economy, and culture for future generations. I actively wants to help fill the void in sustainable manufacturing, energy and construction.</p>
            <p><a href={resume} download="Ian-Sullivan_Resume">Click HERE to download my resume.</a></p>
        </div>
    )
}

export default About;