import React from "react";
import About from "../About";
import Projects from "../Projects";
import Resume from "../Resume";
import Contact from "../Contact";

function Content(props) {
    //destructure props

    const { currentDisplay } = props

    if (currentDisplay === "About") {
        return <About></About>
    } else if (currentDisplay === "Projects") {
        return <Projects></Projects>
    } else if (currentDisplay === "Resume") {
        return <Resume></Resume>
    } else {
        return <Contact></Contact>
    }

}

export default Content;