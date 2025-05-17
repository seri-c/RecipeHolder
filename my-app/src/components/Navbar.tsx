import { useEffect, useState } from "react";



export default function NavBar() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <header className={`w-screen h-15 sticky px-4  bg-tan top-0`}>

            <div className=" pt-3 pb-1 text-ochre font-light gap-1.25 md:gap-3 flex items-center">

                <div className="flex-1 flex items-center gap-4">

                    <span className="md:text-3xl">LOGO</span>
                   
                    <a href="#" className="hidden md:block text-lg">Home</a>
                    <a href="#Recipes" className="hidden md:block text-lg">Recipes</a>
                    <a href="#Calendar" className="hidden md:block text-lg">Calendar</a>
                    <a href="#ShoppingList" className="hidden md:block text-lg">Shopping List</a>

                </div>

                <a href="#Login" className="hidden md:block text-lg">Login</a>
            </div>

        </header>
    );

}
