import { NavLink } from "react-router-dom";

export default function MainMenu() {


    return (
        <nav>
            <NavLink to='/'>Homepage</NavLink>
            <NavLink to='Posts'>Posts</NavLink>
            <NavLink to='About'>About us</NavLink>
        </nav>
    )
}