import {useGlobal} from '../context'
import { Link } from 'react-router-dom';

function Cocktails() {
  const {cocktails,loading} = useGlobal();

  if(loading){
    return <h1 className='text-xl mt-5 text-center'>Loading ...</h1>
  }
  if(cocktails.length === 0){
    return <h1 className='text-xl mt-5 text-center'>No Cocktail found</h1>
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-2'>
      {
        cocktails.map(cocktail => {
          return (<div key={cocktail.id} className='shadow-md rounded-md overflow-hidden'>
            <div className='h-52'>
              <img src={cocktail.image} alt={cocktail.name} className='object-cover h-full w-full'/>
            </div>
            <div className='p-4'>
              <h3 className='text-2xl font-semibold'>{cocktail.name}</h3>
              <p>{cocktail.alcoholic}</p>
              <Link to={`cocktail/${cocktail.id}`} className='inline-block my-2 px-2 py-1 bg-gray-200 text-blue-800 rounded-md'>Details</Link>  
            </div>
          </div>)
        })
      }
    </div>
  )
}

export default Cocktails
