import React from "react";
import TagineImage from "../assets/tagine.jpg"
import { type RecipeDifficulty } from "../app/types";

interface RecipeCardProps {
    name: string;
    description: string;
    difficulty: RecipeDifficulty;
}
const RecipeCard: React.FC<RecipeCardProps> = function ({ name, description, difficulty }) {

    const difficultyColorMap = {
        "Easy": "text-green-500",
        "Medium": "text-amber-500",
        "Hard": "text-red-500"
    }


    return (
        <div className="w-70">

            <img className="h-100 w-70 rounded-lg" src={TagineImage}></img>

            <div className="px-1 line-clamp-2">

                <div className="flex  text-xl">
                    <span className="flex-1 font-medium">{name}</span>
                    <span className={`font-semibold ${difficultyColorMap[difficulty]}`}>{difficulty}</span>
                </div>

                <p className="text-stone-500 ">{description}</p>

            </div>

        </div>
    );
};


export default RecipeCard;