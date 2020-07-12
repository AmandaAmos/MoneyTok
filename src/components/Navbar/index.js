import React from "react";
import "./style.css";


function Navbar() {
    return(
        <div class="fixed-top">
            <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
                <div class="container">
                    <a href="#" class="navbar-brand">
                        <img src="../../../images/MoneyTok.png" width="45" alt=""
                        class="d-inline-block align-middle mr-2"></img>
                        <span class="font-weight-bold">MoneyTok</span>
                    </a>
                </div>
            </nav>
        </div>
                             
    )
}

export default Navbar;