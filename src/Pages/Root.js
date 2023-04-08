import { Link, Outlet } from "react-router-dom"
import "./Root.css"

export default function App() {
    return (
        <>
            <nav>
                <div className='linksDiv'>
                    <Link to="/">Pokedex</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}