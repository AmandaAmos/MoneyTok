import React from "react";
import MoneyTok from "./MoneyTok.png";
import Login from "../Modal/Login";
import Register from "../Modal/Register";
import "./style.css";

function Navbar() {
    return(       
        <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm fixed-top">
            {/* <div class="container"> */}
                <Login />
                <Register />
                <a href="/" class="navbar-brand">
                    <img src={MoneyTok} width="45" alt="" class="d-inline-block align-middle mr-2"></img>
                    <span class="font-weight-bold">MoneyTok</span>
                </a>
                {/* Todo:Fix dropdown capability  */}
                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
                    <div id="navbarSupportedContent" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active"><a href="/" class="nav-link">Home <span class="sr-only">(current)</span></a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Profile</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Transactions</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Articles</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Budget</a></li>
                        </ul>
                    </div>
            {/* </div> */}
        </nav>
    )
}

export default Navbar;
