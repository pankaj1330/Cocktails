import {useGlobal} from '../context'
import Cocktails from '../components/Cocktails';

function Home() {
  const {setInput} = useGlobal();
  
  return (
    <div className='max-w-[1000px] mx-auto'>
      <form className='text-center my-12 px-4' onSubmit={(e)=>e.preventDefault()}>
        <input type="text" name="cocktail" id="cocktail" onChange={(e)=>setInput(e.target.value)} className='border-2 border-purple-800 text-purple-800 rounded-md outline-none p-1 px-3 w-full max-w-[400px]' placeholder='Search Cocktail'/>
        {/* <input type="submit" value="Search" /> */}
      </form>
      <Cocktails />
    </div>
  )
}

export default Home
