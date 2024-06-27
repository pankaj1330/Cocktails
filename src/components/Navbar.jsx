import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="max-w-[1000px] mx-auto p-2 py-4 flex flex-row justify-between items-center">
      <div>
        <h2 className="text-3xl font-semibold text-blue-800">Cocktails</h2>
      </div>
      <ul className="flex flex-row items-center gap-6 text-gray-600">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </ul>
    </nav>
  )
}

export default Navbar
