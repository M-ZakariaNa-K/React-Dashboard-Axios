import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen, activeItem, setActiveItem }) => {


    const handleItemClick = (item) => {
        if (setActiveItem) {
            setActiveItem(item); // Ensure setActiveItem is called here

            console.log("Active Item Set To:", item); // Add this to verify
            console.log("Active Item Set To:", activeItem); // Add this to verify
        } else {
            console.error("setActiveItem is not defined");
        }
    };

    return (
        <section id="sidebar" className={isSidebarOpen ? '' : 'hide'}>
            <a href="#z" className="brand">
                <i className='bx bxs-smile'></i>
                <span className="text">AdminHub</span>
            </a>
            <ul className="side-menu top">
                <li className={setActiveItem === "Home" ? "active" : ""}>
                    <a href="#z" onClick={() => handleItemClick("Home")}>
                        <i className='bx bxs-dashboard'></i>
                        <span className="text">Dashboard</span>
                    </a>
                </li>

                <li className={setActiveItem === "My Store" ? "active" : ""}>
                    <a href="#z" onClick={() => handleItemClick("My Store")}>
                        <i className='bx bxs-shopping-bag-alt'></i>
                        <span className="text">My Store</span>
                    </a>
                </li>
                <li className={activeItem === "Analytics" ? "active" : ""}>
                    <a href="#z" onClick={() => handleItemClick("Analytics")}>
                        <i className='bx bxs-doughnut-chart'></i>
                        <span className="text">Analytics</span>
                    </a>
                </li>
                <li className={activeItem === "Message" ? "active" : ""}>
                    <a href="#z" onClick={() => handleItemClick("Message")}>
                        <i className='bx bxs-message-dots'></i>
                        <span className="text">Message</span>
                    </a>
                </li>
                <li className={activeItem === "Team" ? "active" : ""}>
                    <a href="#z" onClick={() => handleItemClick("Team")}>
                        <i className='bx bxs-group'></i>
                        <span className="text">Team</span>
                    </a>
                </li>
            </ul>
            <ul className="side-menu">
                <li className={activeItem === "Settings" ? "active" : ""}>
                    <a href="#z" onClick={() => handleItemClick("Settings")}>
                        <i className='bx bxs-cog'></i>
                        <span className="text">Settings</span>
                    </a>
                </li>
                <li className={activeItem === "Logout" ? "active" : ""}>
                    <a href="#z" className="logout" onClick={() => handleItemClick("Logout")}>
                        <i className='bx bxs-log-out-circle'></i>
                        <span className="text">Logout</span>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Sidebar;
