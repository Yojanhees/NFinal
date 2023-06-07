import { Link } from "react-router-dom"
import 'animate.css'
import WOW from 'wow.js';
import { useEffect } from "react";
import './Menu.css'


export function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary wow animate__animated animate__rollIn" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/menu">
                        Menu
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/history">
                                    History
 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/musica"> 
                                    Musica</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/fans"> 
                                    Fans</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}