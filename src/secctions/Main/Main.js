import React, { useEffect, useState } from 'react';
import './Main.css';
import { getRequest } from '../../util/Api';
import Author from '../../models/AuthorModel';

const Main = ({ activeItem }) => {
    const [authors, setAuthors] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getRequest('');
            if (result) {
                const mappedAuthors = result.map(authorData => new Author(...Object.values(authorData)));
                setAuthors(mappedAuthors);
            }
        };

        fetchData();
    }, [activeItem]);

    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>{activeItem}</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <a className="active" href="#">{activeItem}</a>
                        </li>
                    </ul>
                </div>
            </div>

            {activeItem === "Home" && (
                <div>
                    <h3>Welcome to the Dashboard</h3>
                    {/* Dashboard content here */}
                </div>
            )}
            {activeItem === "My Store" && (
                <div>
                    <h3>My Store Information</h3>
                    {/* My Store content here */}
                </div>
            )}
            {activeItem === "Analytics" && (
                <div>
                    <h3>Analytics Overview</h3>
                    {/* Analytics content here */}
                </div>
            )}
            {activeItem === "Message" && (
                <div>
                    <h3>Messages Section</h3>
                    {/* Messages content here */}
                </div>
            )}
            {activeItem === "Team" && (
                <div>
                    <h3>Team Overview</h3>
                    {/* Team content here */}
                </div>
            )}
            {activeItem === "Settings" && (
                <div>
                    <h3>Settings</h3>
                    {/* Settings content here */}
                </div>
            )}
            {activeItem === "Logout" && (
                <div>
                    <h3>Logout</h3>
                    {/* Logout content here */}
                </div>
            )}
            {activeItem === "" && <p>Select an option from the sidebar</p>}
        </main>
    );
};

export default Main;
 