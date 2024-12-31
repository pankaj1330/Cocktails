import { useContext,createContext, useState, useEffect } from "react";

const AppContext = createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export default function AppProvider({children}){
    const [loading,setLoading] = useState(false);
    const [cocktails,setCocktails] = useState([]);
    const [input,setInput] = useState('a');

    async function fetchCocktails(){
        try{
            setLoading(true);
            const response = await fetch(`${url}${input}`);
            const data = await response.json();
            
            const cocktailData = data.drinks.map(cocktail => {
                const {idDrink,strDrink,strAlcoholic,strGlass,strInstructions,strDrinkThumb,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = cocktail;
                return {
                    "id" : idDrink,
                    "name" : strDrink,
                    "alcoholic" : strAlcoholic,
                    "glass" : strGlass,
                    "instruction" : strInstructions,
                    "image" : strDrinkThumb,
                    "ingredients" : [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]
                }
            })
            
            setCocktails(cocktailData);
            setLoading(false);
            return;
        }
        catch(err){
            setCocktails([]);
            setLoading(false);
            console.log(err);
            return;
        }
    }

    useEffect(()=>{
        fetchCocktails();
    },[input])

    return <AppContext.Provider value={{setInput,loading,setLoading,cocktails}}>{children}</AppContext.Provider>
}

export const useGlobal = () => {
    return useContext(AppContext);
}
