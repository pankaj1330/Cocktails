import {useParams} from 'react-router-dom'
import {useGlobal} from '../context'
import { useEffect, useState } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function SingleCocktail() {
  const {loading,setLoading} = useGlobal();
  const {id} = useParams();
  const [cocktail,setCocktail] = useState(null);

  useEffect(() => {
    async function fetchCocktail(){
      setLoading(true);
      try{
        
      const resp = await fetch(`${url}${id}`);
      const data = await resp.json();
      if(!(data.drinks)){
        setCocktail(null);
        return;
      }
      const {idDrink,strDrink,strAlcoholic,strGlass,strInstructions,strDrinkThumb,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = data.drinks[0];
                setCocktail({
                    "id" : idDrink,
                    "name" : strDrink,
                    "alcoholic" : strAlcoholic,
                    "glass" : strGlass,
                    "instruction" : strInstructions,
                    "image" : strDrinkThumb,
                    "ingredients" : [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]
                })
                setLoading(false);
                return;
    } 
  
  catch(err){
    setLoading(false);
    setCocktail(null);
    console.log(err);
  }
}
    fetchCocktail();
  },[id])

  
  if(loading){
    return <h1 className='text-xl mt-5 text-center'>Loading ...</h1>
  }
  if(!cocktail){
    return <div className='text-center text-2xl '>
      <h1>No cocktail found</h1>
    </div>
  }
  return (
    <div className='max-w-[1000px] mx-auto mt-12 flex flex-col md:flex-row gap-8 justify-between items-center p-2'>
      <div className='md:w-1/2'>
        <img src={cocktail.image} alt={cocktail.name} className='rounded-md w-full'/>
      </div>
      <div className='space-y-6 text-gray-600 tracking-wide'>
        <h1 className='text-6xl font-normal text-orange-600'>{cocktail.name}</h1>
        <p><span className='font-bold text-blue-800'>Info : </span>{cocktail.alcoholic}</p>
        <p><span className='font-bold text-blue-800'>Glass : </span>{cocktail.glass}</p>
        <p><span className='font-bold text-blue-800'>Instructions : </span>{cocktail.instruction}</p>
        <p><span className='font-bold text-blue-800'>Ingredients : </span>{cocktail.ingredients}</p>
      </div>
    </div>
  )
}

export default SingleCocktail
