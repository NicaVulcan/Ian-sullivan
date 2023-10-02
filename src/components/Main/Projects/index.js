import React, { useState } from "react";
import ProjectTiles from "./Project-Tiles";

function Projects () {

    const [featuredProjects] = useState([
        {
            title: "Alternative Fuels Conversion",
            date: "August 2022",
            description: "This Project is a personal project to convert a 2014 Subaru WRX STI to run on 100% renewable biofuels such as Ethanol. Fueling considerations such as fuel injector size, fuel flow needs, fuel line material, and size increase were needed. Specialty fuel system components were needed for the conversion including Teflon coated fuel lines, custom calibration was needed for the Engine Control Unit. Custom Calibration was performed using an off the shelf software, however sensor selection for the process was chosen and specified by myself for the change in application. A conversion from Mass Air flow to Speed Density was also performed to optimize the system changes. After all conversions and modifications the vehicle produces 250% more power compared to the original calibration and setup on traditional Fossil Fuels.",
            skills: ["Fluid Dynamics", "Thermodynamics", "Design engineering", "Automotive Engineering", "Electrical Engineering", "Mechanical Engineering", "Energy Engineering", "Data Acquisition", "Fabrication", "TIG Welding", "Troublshooting", "Project Management",  "Sustainability", "Communication", "Product integration", "Product Developement", "Product testing"],
            images: ["alternative-fuels-1.jpg", "alternative-fuels-2.jpg", "alternative-fuels-3.jpg", "alternative-fuels-4.jpg", "alternative-fuels-5.jpg", "alternative-fuels-6.jpg", "alternative-fuels-7.png", "alternative-fuels-8.png", "alternative-fuels-9.png"]
        },
        {
            title: "Autonomus 2-Axis Pick and Place Robot",
            date: "June - August 2022",
            description: "This project combined Programming, Design, Fabrication and Team work into one project. The objective was to build an Autonomous 2-Axis Pick and Place Robot that would grab a .500in Steel ball and place it into pre-determined holes. The balls would be randomly placed on the unsorted side of the platform and it was the robot's job to determine when to pick up the ball. This was accomplished using an IR distancing sensor from Sharp and fine tuning the parameters for accurate detection. The platform was designed and built by myself and 5 other individuals. My primary role was design and fabrication of the platform and pivoting armatures. The robot was successful in delivering the stated objectives and deliverables. Sorting time was 27 seconds for 5 balls, however with more refinement this could be greatly improved.",
            skills: ["CAD", "Fusion 360", "Siemens NX", "Arduino Programming", "Mechanical Engineering", "Fabrication and Machining", "Electrical Wiring", "Metal Fabrication", "Team work", "Communication", "Presentation Coordination", "Public Speaking"],
            images: ["pick-and-place-robot-1.jpg", "pick-and-place-robot-2.jpg", "pick-and-place-robot-3.jpg", "pick-and-place-robot-4.jpg", "pick-and-place-robot-5.jpg", "pick-and-place-robot-6.jpg"]
        },
        {
            title: "Extreme Budget Lithium Battery Testing System",
            date: "February 2022",
            description: "This System was created with budget in mind at a total cost of $350. The objective of the Project was to build a scale testing unit for lithium batteries of varying chemistries and sizes. The challenge and reason for developing this system was to test pre-packaged batteries for an Electric Racecar project. While data sheets are available for battery cells, they are rarely comprehensive enough to test enclosed environments and varying load/charging conditions, therefore a platform was developed to measure the current draw and voltage under supervised conditions and this would be coupled with temperature monitoring to assess the overall characteristics of the battery. The system utilized 3 Particle Argon chips, a Hall effect current sensor, 49 H3- Automotive light bulbs, a few switches and solenoids.",
            link: "https://www.hackster.io/458538/megr-3171-li-po-battery-testing-c1325e",
            skills: ["CAD", "Data Acquisition", "Thermodynamics", "Energy Conversion", "Electrical Wiring", "Product Testing", "Project Management"],
            images: ["battery-testing-rig-1.jpg", "battery-testing-rig-2.jpg", "battery-testing-rig-3.jpg", "battery-testing-rig-4.jpg", "battery-testing-rig-5.jpg", "battery-testing-rig-6.jpg", "battery-testing-rig-7.jpg", "battery-testing-rig-8.jpg", "battery-testing-rig-9.jpg", "battery-testing-rig-10.jpg"]
        },
        {
            title: "Santa Maria Inspired Grill",
            date: "August 2021",
            description: "This Project was inspired by a post on Pinterest for a wood burning Santa Maria style grill. My old grill sucummed to corrosion and was recycled so I created this one. It was made from scrap Stainless Steel and scrap metal. I took the time to measure out all the recycling bin metal and created a drawing to optimize metal use, for the largest grill without having to use new material. The bin dimensions are 24in x 30in and can use Charcoal or Hardwoods. All elements were designed, machined and welded by myself using TIG welding.",
            skills: ["Project Innovation", "Design Engineering", "Mechanical Engineering", "TIG Welding", "Fabrication", "Project Management", "Utilization of Resources"],
            images: ["santa-maria-grill-1.jpg", "santa-maria-grill-2.jpg", "santa-maria-grill-3.jpg", "santa-maria-grill-4.jpg", "santa-maria-grill-5.jpg", "santa-maria-grill-6.jpg", "santa-maria-grill-7.jpg", "santa-maria-grill-8.jpg", "santa-maria-grill-9.jpg", "santa-maria-grill-10.jpg", "santa-maria-grill-11.jpg", "santa-maria-grill-12.png"]
        },
        {
            title: "Wind Tunnel Fabrication",
            date: "June 2021 - June 2022",
            description: "This Project was a long term project at UNC-Charlotte, it was already started previous to me joining. The concept of the project was to create a rolling road wind tunnel witht the most laminar air possible. The test section was 2ft x 3ft and 25 feet long. My role was to fabricate and complete the project, myself and two other students were recruited for this. The project had build specifications, but no plan of action for manufacturing. It was my role to manufacure this product and it required an extensive amount of custom rigging and bracing until welding and securement was complete. The Project was 98% TIG welded and 2% Wire welded. Coumpound cuts were needed primarily on the Inlet and Diffuser sections. After nearly a year and 700L of argon the project was completed, hundreds of members were fabricated and welded. The project performed as designed!",
            skills: ["CAD", "Mechanical Engineering", "Fluid Dynamics", "Technical Drawings", "Schematic Reading", "System Integration", "Troubleshooting", "Fabrication", "Welding", "Machining", "Project Management", "Problem Solving", "Innovation", "Collaboration", "Company Outreach"],
            images: ["wind-tunnel-1.jpg", "wind-tunnel-2.jpg", "wind-tunnel-3.jpg", "wind-tunnel-4.jpg", "wind-tunnel-5.jpg", "wind-tunnel-6.jpg", "wind-tunnel-7.jpg", "wind-tunnel-9.png", "wind-tunnel-10.jpg", "wind-tunnel-11.jpg", "wind-tunnel-12.jpg", "wind-tunnel-13.jpg", "wind-tunnel-14.jpg", "wind-tunnel-15.jpg", "wind-tunnel-16.jpg", "wind-tunnel-17.jpg", "wind-tunnel-18.jpg", "wind-tunnel-19.jpg", "wind-tunnel-20.png", "wind-tunnel-21.jpg", "wind-tunnel-22.jpg", "wind-tunnel-23.jpg", "wind-tunnel-24.jpg", "wind-tunnel-25.jpg", "wind-tunnel-26.jpg", "wind-tunnel-27.png", "wind-tunnel-28.png", "wind-tunnel-29.jpg", "wind-tunnel-30.jpg", "wind-tunnel-31.jpg", "wind-tunnel-32.jpg", "wind-tunnel-33.jpg", "wind-tunnel-34.jpg", "wind-tunnel-35.jpg", "wind-tunnel-36.jpg", "wind-tunnel-37.jpg"]
        },
        {
            title: "Off-Grid PV and Battery",
            date: "June 2021",
            description: "This project combined PV Solar, Chemical battery storage and simple logic controls. All combined this system powers a small shed and provides constant power for interior lighting and exterior for the building at night. The system is sized small, currently with a 150W PV attached to 1.2kWh of batteries. The inverter setup is good for 1.0 kW continuous power. Expansion is planned in the future, possibly creating a mobile solution to charge my father's Electric Vehicle.",
            skills: ["Data Acquisition", "Battery Engineering", "PV Engineering", "System Integration", "Product Testing", "Optimization", "Project Management"],
            images: ["pv-off-grid-1.jpg"]
        },
        {
            title: "Formula SAE EV UNCC",
            date: "April 2020 - May 2023",
            description: "This Project was not just a project but rather the creation of a large Collegiate racing team. Formula SAE was established at UNC-Charlotte in the 1990s, however I took the traditional team a step forward into the future of Electric Vehicles. The school presented interest in having an EV team, however no formal team had been created. I founded the team in 2020, and remaine president until May of 2023. I started with a small budget of $5000 from the school to get the team started, and over 3 years I raised over $70,000 for the team in the form of monetary and physical product donations. Donors included Companies such as TESLA Inc, Siemens, Lucid Motors, and the Kulwicki Motorsports Foundation. As Team President I oversaw all operations and acted as a CEO and CFO the 501-C Non-Profit. As team lead, I also helped in every aspect of the creation of the car, including fabrication, wiring, engineering and testing.",
            skills: ["CAD", "Siemens NX", "Battery Engineering", "Data Acquisition","Power System Design", "Electrical Engineering", "Mechanical Engineering", "Fluid Dynamics", "Thermodynamics", "Automotive Engineering", "Design Engineering", "Welding", "Electrical Wiring", "Project Management", "Project Planning", "Product Testing", "Risk Management", "Design Review", "Formal Document Submission", "Formal Presentations", "Formal Fundraising", "Finance Management", "Community Outreach", "Time Management", "Conflict Resolution"],
            images: ["uncc-fsae-1.jpg", "uncc-fsae-2.jpg", "uncc-fsae-3.jpg", "uncc-fsae-4.jpg", "uncc-fsae-5.jpg", "uncc-fsae-6.jpg", "uncc-fsae-7.jpg", "uncc-fsae-8.jpg", "uncc-fsae-9.jpg", "uncc-fsae-10.jpg", "uncc-fsae-11.jpg", "uncc-fsae-12.jpg", "uncc-fsae-13.jpg", "uncc-fsae-14.jpg"]
        },
        {
            title: "Filtration and Fuel System Retrofit F250",
            date: "February 2019",
            description: "The Project was fueled by the need for a cleaner diesel fuel solution. The truck this project was performed on was a 2003 Ford F250-Superduty with a 7.3 Liter Powerstroke Diesel. The Fuel system was damaged by internal engine failure of the cylinder heads injector cooling cups. These cups seperate engine coolant from Low pressure diesel fuel, however after an engine overheating event these cups failed leading to diesel fuel and engine coolant mixing. This contamination affected the cooling system as well as the fuel system. The Fuel injector cups were replaced and fixed however fuel system contamination was still an issue, the fuel tank was removed, drained and cleaned. This is an acceptable repair, however the owner wanted to engineer a fuel system with better filtration and water filtration capabilies. The system also had to be capable of providing 600 hp worth of fuel volume, for future upgrade needs. The system engineered removed the stock fuel pickup and replaced with a 5/8 I.D. steel pickup tube, -10 suction fuel lines to a 20 Micron, spin-on style water fuel seperator, -10 line to an AEM external Fuel pump, then -8 lines to a 2 Micron Fuel Filter. A regulated return system was created utilizing stock fuel ports previously blocked off in the cylinder heads. Fuel was directed completely throught the cylinder heads and terminated at an external fuel pressure regulator. The Fuel pressure regulator utilizes the OEM Fuel lines previously to supply fuel, now run in parallel as a fuel return. It should be noted Braided hydraulic hose was used in the suction side of the fuel system, due to bending constraints and concern for collapsing fuel hoses. The system was built to last and uses standardized fuel system components commonly found in the commercial trucking industry, therefore servicing the system with new filters can be achieved at any truck stop, and most autoparts stores will carry the filters.",
            skills: ["Design Engineering", "Automotive Engineering", "Fluid Dynamics Engineering", "Mechanical Engineering", "System Integration", "Retrofitting", "Utilization of Common Parts"],
            images: ["fuel-system-upgrade-1.jpg", "fuel-system-upgrade-2.jpg", "fuel-system-upgrade-3.jpg", "fuel-system-upgrade-4.jpg", "fuel-system-upgrade-5.jpg", "fuel-system-upgrade-6.jpg", "fuel-system-upgrade-7.jpg", "fuel-system-upgrade-8.jpg"]
        },
        {
            title: "3DS Max House Re-Creation",
            date: "April 2018",
            description: "This Project was done to test my skills and learn a new software, 3DS Max by AutoDesk. I took a pitcure of my home and Proportionally recreated it. All apects of the house, with the exception of the foliage, was created by myself as individual sub-assemblies. Unfortnately I only have a picture of the final product now as my old laptop stored intermittent stages of the build. It should be noted that attention to detail was given to exterior aspects including sun-orientation and reflectance of glass. I am especially proud of the effect of the glass, given the window assemblies included the 2 pane window and interior blinds as part of the assmebly, this was done to give the most realistic effect.",
            skills: ["CAD", "3DS Max", "Attention to Detail"],
            images: ["3ds-max-1.jpg", "3ds-max-2.jpg"]
        },
        {
            title: "Scale Model Water Elevator/Lock System",
            date: "December 2016",
            description: "This was the first group engineering project I had in school, back in 2016 at Central Piedmont Community College. I worked with two other individuals on the project, but I was responsible with project design, electrical system integration, fabrication of the project and manufacturing. The idea was to create a scale model of a lock system or water elevator for differing water elevations of canals and rivers. The project budget was $300, however our project came in under budget at $150. The system would use aquarium pumps switched on by an arduino style microchip. Two pumps were used, one for the the first stage drainage into a holding section, then a secondary pump to refill as needed. Four servo motors were used on a simple slotted shaft system to actuate the doors, a 20 gallon fish tank was used for the project. Power was supplied by two 6V akline batteries in series. This was the first time I TIG welded, utilizing the help of my job's fabricator to help me learn. This project completed all of the intended objectives and operated as intended with negligable door leakage. The system was designed and engineered in the Autodesk Suite and parts were cut using a C02 laser. ",
            skills: ["CAD", "AutoDesk", "Arduino Programming", "Design Engineering", "Mechanical Engineering", "Electrical Engineering", "Fluid Engineering", "Manufacturing", "Welding", "Project Management", "Team Work", "Formal Presentations"],
            images: ["water-elevator-1.jpg", "water-elevator-2.jpg", "water-elevator-3.jpg", "water-elevator-4.jpg", "water-elevator-5.jpg", "water-elevator-6.jpg", "water-elevator-7.jpg", "water-elevator-8.jpg", ]
        },
    ]);

    return (
        <div>
            <h1>My Projects</h1>
            <div id="project-tile-menu">
                {featuredProjects.map((project) => (
                    <ProjectTiles {...project} key={project.title}></ProjectTiles>
                ))}
            </div>
        </div>
    )
}

export default Projects;