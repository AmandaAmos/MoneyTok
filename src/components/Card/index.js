import React from "react";

function Card(){ 
    return(
        <div id="ArticleCard" class="card text-center">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Articles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Saved Articles</a>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <h5 class="card-title">New York Times Economy Articles</h5>
                <p class="card-text">Put the Scraped/API called Articles here.</p>
                {/* Insert card groups for the articles here: https://getbootstrap.com/docs/4.0/components/card/#border -- Card Columns or Card groups from this page} */}
                <a href="#" class="btn btn-primary">More Articles</a>
            </div>
        </div>
    )
}

export default Card;