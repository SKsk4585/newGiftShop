import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/all-books">Home</NavLink><br/><br/><br/>
            <NavLink to="/book-add">Add</NavLink>
			
        </div>
    );
}

export default Menu;
