import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "50vh",
      backgroundColor: "#f8f8f8",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "80px", color: "#FF8A00", marginBottom: "20px" }}>404</h1>
      <h2 style={{ fontSize: "30px", color: "#333", marginBottom: "10px" }}>Page Not Found</h2>
      <p style={{ fontSize: "18px", color: "#666", marginBottom: "30px" }}>
        Oops! The page you are looking for does not exist.
      </p>

      <NavLink to="/" style={{
        padding: "10px 20px",
        backgroundColor: "#FF8A00",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        fontSize: "18px"
      }}>

        Go Back Home
      </NavLink>
    </div>
  );
};

export default NotFound;
