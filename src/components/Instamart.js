import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsvisible }) => {
    return (
        <div className="border border-black m-2 p-2">
            <h3 className="font-bold">{title}</h3>
            {isVisible ? (
                <>
                    <button onClick={() => setIsvisible(false)} className="cursor-pointer underline">
                        Hide
                    </button>
                    <p>{desc}</p>
                </>
            ) : (
                <button onClick={() => setIsvisible(true)} className="cursor-pointer underline">
                    Show
                </button>
            )}
        </div>
    );
};


const Instamart = () => {
    const [visibleSection, setIsvisibleSection] = useState("team");
    return (
        <div className="m-4 bg-pink-50">
            <h1 className=" text-3xl m-2 p-2 font-bold">Instamart</h1>
            <Section title={"About Instamart"} desc={"Launched in August 2020, FoodVilla instamart is India's leading quick commerce grocery service. Present in over 25 cities, FoodVilla instamart uses FoodVilla's superior technology and dedicated delivery fleet to bring groceries and other home needs to the doorsteps of Indians within minutes.As the trends suggest, at FoodVilla instamart, we are not just delivering home needs with convenience and care, but making the need-it-now buying experience exciting by stocking up on all things users wish to have within 10 minutes.Note: Data presented is from FoodVilla’ instamart’s order analysis and reflects millions of on-demand transactions across 25+ cities in India from 01, January- 23 November 2023."}
                isVisible={visibleSection == "about"}
                setIsvisible={() => setIsvisibleSection("about")} />
            <Section title={"Team Instamart"} desc={"Team Summry of Instamart. The Team Has 1000+ members.t’s been only three years since the inception of quick commerce in India. Only three. This fact blows our minds when we see that consumers have spent 2023 ordering everything from kanda, batata, and condoms to silver coins and air purifiers on FoodVilla instamart. Bringing you India’s top quick commerce trends of the year. We’ll try to make this faster than FoodVilla instamart’s 10-minute deliveries.Insta-pur: If you put all those who ordered from FoodVilla instamart’s top five cities in a country, it would be the 17th most populated in the world. Here are some standout users......"}
                isVisible={visibleSection == "team"}
                setIsvisible={() => setIsvisibleSection("team")}
            />
            <Section title={"Career Instamart"} desc={"At FoodVilla, we’re always looking for people who can bring new perspectives and life experiences to our teams. If you’re looking for a place that values your curiosity, passion, and desire to learn, if you’re seeking colleagues who are big thinkers and eager to take on fresh challenges as a team, then you’re a future Swiggster.See something you want to be part of? Just select the job and apply in the above section.If we like what we see in your profile, we'll reach out for a written/technical interview as a precursor to the next big thing."}
                isVisible={visibleSection == "career"}
                setIsvisible={() => setIsvisibleSection("career")}
            />

        </div>
    );
}
export default Instamart;