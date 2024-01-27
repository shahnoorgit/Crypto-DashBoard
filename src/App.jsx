import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [sidevisible, setSidevisible] = useState(false); // Initially visible

  useEffect(() => {
    const handleMediaChange = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setSidevisible(!isMobile); // Show sidebar on larger screens
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    handleMediaChange(); // Initial check
    mediaQuery.addEventListener("change", handleMediaChange); // Listen for changes

    return () => mediaQuery.removeEventListener("change", handleMediaChange); // Cleanup
  }, []);

  const handleSidebarToggle = () => {
    setSidevisible(!sidevisible);
  };

  return (
    <>
      <div className="appcon">
        {sidevisible && <Sidebar />}

        <Outlet headAct />

        {!sidevisible && (
          <button
            className="sidebar-toggle-button"
            onClick={handleSidebarToggle}
          >
            Show Sidebar
          </button>
        )}
      </div>
    </>
  );
}

export default App;
