import React from "react"
import RecipeCard from "./RecipeCard";
import TagineImage from "../assets/tagine.jpg"
import ButterChickenImage from "../assets/Butter Chicken.jpg"
import SoyGlazedSalmonImage from "../assets/Soy Glazed Salmon.jpg"
import GnocchiImage from "../assets/Gnocchi.jpg"

const SuggestedCarousel = function () {

    return (
        <div className="h-fit bg-pale-yellow">

            <div className="p-10">

                <span className="text-2xl text-stone-500">Suggested</span>

                <div className="mt-3 flex gap-15">

                    <RecipeCard
                        name="Chickpea Tagine"
                        image={TagineImage}
                        description='Tagine with Chickpeas is a cozy one-pot stew packed with warm Moroccan flavors. Healthy, vegan, gluten-free, and allergen-friendly'
                        difficulty='Medium'
                    />

                    <RecipeCard
                        name="Butter Chicken"
                        image={ButterChickenImage}
                        description='Butter Chicken is a clasic Indian favorite, featuring a tomato and butter-based curry'
                        difficulty='Medium'
                    />

                    <RecipeCard
                        name="Soy Glazed Salmon"
                        image={SoyGlazedSalmonImage}
                        description='Soy glazed salmon is an easy but delicious dish. Slow baked salmon is sprinkled with sesame'
                        difficulty='Easy'
                    />


                    <RecipeCard
                        name="Gnocchi with Tomato Sauce"
                        image={GnocchiImage}
                        description='Gnocchi are tossed in a tomato sauce in this simple recipe that is bound to impress'
                        difficulty='Easy'
                    />

                </div>
            </div>

        </div>
    )
};


export default SuggestedCarousel;