import React from "react";
import { useEffect, useState } from "react";



export default function NavBar() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);

    return (
        <header className={`w-screen h-15 sticky px-4   ${scroll ? "border-b-1 border-black/10 backdrop-blur-sm bg-tan/30 "  : "bg-tan"} top-0`}>

            <nav className=" pt-3 pb-1 text-ochre font-light gap-1.25 md:gap-3 flex items-center">

                <span className="text-lg md:text-3xl">LOGO</span>
                <ul className="flex-1 flex items-center gap-4">



                    <a href="#" className="md:text-lg">Home</a>
                    <a href="#Recipes" className="md:text-lg">Recipes</a>
                    <a href="#Calendar" className="md:text-lg">Calendar</a>
                    <a href="#ShoppingList" className="md:text-lg">Shopping List</a>

                </ul>

                <a href="#Login" className="md:text-lg">Login</a>
            </nav>

        </header>
    );

}
