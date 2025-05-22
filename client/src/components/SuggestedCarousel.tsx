import React from "react"
import RecipeCard from "./RecipeCard";

const SuggestedCarousel = function () {

    return (
        <div className="h-fit bg-pale-yellow">

            <div className="p-10">
                <span className="text-2xl text-stone-500">Suggested</span>

                <div className="mt-3 flex gap-15">

                    <RecipeCard
                        name="Chickpea Tagine"
                        description='Tagine with Chickpeas is a cozy one-pot stew packed with warm Moroccan flavors. Healthy, vegan, gluten-free, and allergen-friendly'
                        difficulty='Medium'
                    />

                    

                    <RecipeCard
                        name="Chickpea Tagine"
                        description='Tagine with Chickpeas is a cozy one-pot stew packed with warm Moroccan flavors. Healthy, vegan, gluten-free, and allergen-friendly'
                        difficulty='Medium'
                    />

                    

                    <RecipeCard
                        name="Chickpea Tagine"
                        description='Tagine with Chickpeas is a cozy one-pot stew packed with warm Moroccan flavors. Healthy, vegan, gluten-free, and allergen-friendly'
                        difficulty='Medium'
                    />

                    

                </div>
            </div>

        </div>
    )
};


export default SuggestedCarousel;