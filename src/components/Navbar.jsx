import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const linkArray = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/product", text: "Product" },
    { id: 3, path: "/about", text: "About" },
    { id: 4, path: "/service", text: "Service" },
    { id: 5, path: "/contact", text: "Contact" },
]

const Navbar = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            fontSize: '20px',
            background: 'black',
            height: '80px',
            color: "white"
        }}>
            <div style={{ width: "20%", fontSize: "25px" }}><strong>E-Commerce</strong></div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: "30%"
            }}>
                {linkArray.map((el) => (
                    <div key={el.id}>
                        <NavLink to={el.path} style={({ isActive }) => isActive ? { color: "white", backgroundColor: "#FFA808", padding: '8px 13px', borderRadius: '5px', textDecoration: "none" } : { color: "white", textDecoration: "none" }}>
                            {el.text}
                        </NavLink>
                    </div>
                ))}

                <div>
                    <NavLink
                        to="/addtocart"
                        style={({ isActive }) =>
                            isActive
                                ? { color: "white", backgroundColor: "#FFA808", padding: '8px 13px', borderRadius: '5px', textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }
                                : { color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }
                        }>
                        <FaShoppingCart size={24} />
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default Navbar