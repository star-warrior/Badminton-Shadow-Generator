import { useState, useRef, useEffect } from "react";
import { googleLogout } from "@react-oauth/google";

export default function NavbarDropdown({ name, picture, mail }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Account");
  const dropdownRef = useRef(null);

  const options = ["Sign Out"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    googleLogout();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const styles = {
    container: {
      position: "relative",
      fontFamily: "Arial, sans-serif",
    },
    button: {
      backgroundColor: "#636ae8",
      border: "none",
      color: "#ffffff",
      padding: "10px 15px",
      fontSize: "16px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      borderRadius: "4px",
      transition: "background-color 0.2s",
    },
    buttonHover: {
      backgroundColor: "#535bd8", // Slightly darker variant for hover
    },
    dropdown: {
      position: "absolute",
      top: "100%",
      right: "0",
      minWidth: "180px",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 12px rgba(99, 106, 232, 0.2)",
      borderRadius: "4px",
      marginTop: "5px",
      zIndex: 100,
      overflow: "hidden",
      border: "1px solid #e0e2ff",
    },
    list: {
      listStyle: "none",
      padding: "5px 0",
      margin: 0,
    },
    item: {
      padding: "10px 15px",
      color: "#333",
      cursor: "pointer",
      transition: "background-color 0.2s, color 0.2s",
      fontSize: "14px",
      display: "block",
      textAlign: "left",
      width: "100%",
      border: "none",
      backgroundColor: "transparent",
    },
    divider: {
      height: "1px",
      backgroundColor: "#e0e2ff",
      margin: "5px 0",
    },
    arrow: {
      fontSize: "10px",
      marginLeft: "5px",
    },
    // Optional user info section styles
    userInfo: {
      padding: "10px 15px",
      borderBottom: "1px solid #e0e2ff",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    avatar: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      backgroundColor: "#636ae8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      fontWeight: "bold",
      color: "#ffffff",
    },
    image: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
    },
    userName: {
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "2px",
      color: "#333",
    },
    userEmail: {
      fontSize: "12px",
      color: "#666",
    },
  };

  return (
    <div ref={dropdownRef} style={styles.container}>
      <button
        onClick={toggleDropdown}
        style={styles.button}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#535bd8";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#636ae8";
        }}
      >
        {selected}
        <span style={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div style={styles.dropdown}>
          {/* Optional user info section */}
          <div style={styles.userInfo}>
            <div style={styles.avatar}>
              <img
                src={picture}
                style={styles.image}
                referrerPolicy="no-referrer"
                alt=""
              />
            </div>
            <div>
              <div style={styles.userName}>{name}</div>
              <div style={styles.userEmail}>{mail}</div>
            </div>
          </div>

          <ul style={styles.list}>
            {options.map((option, index) => (
              <li key={option}>
                {index === options.length - 1 && (
                  <div style={styles.divider}></div>
                )}
                <button
                  onClick={() => handleSelect(option)}
                  style={styles.item}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f0f1ff";
                    e.target.style.color = "#636ae8";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "#333";
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
