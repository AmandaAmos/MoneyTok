import React from "react";

function ArticleCard(){ 
    return(
        <div>
        <div id="TabbingCard" class="card text-center">
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
            <div body>
                <div class="card-body">
                    <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src="https://specials-images.forbesimg.com/imageserve/5d112209142c500008c71504/960x0.jpg?fit=scale"></img>
                        <div class="card-body">
                            <h5 class="card-title">Scraped Article title</h5>
                            <p class="card-text">Scraped Article Description
                            src.components.TabbingCard.index.js</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <a href="#" class="btn btn-warning">Save Article</a>
                        </div>
                        </div>
                        <div class="card">
                        <img class="card-img-top" src="https://www.ahaparenting.com/img/Teens-reading-outside300.jpg" ></img>
                        <div class="card-body">
                            <h5 class="card-title">Scraped Article title</h5>
                            <p class="card-text">Scraped Article Description
                            src.components.TabbingCard.index.js</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <a href="#" class="btn btn-warning">Save Article</a>
                        </div>
                        </div>
                        <div class="card">
                        <img class="card-img-top" src="https://specials-images.forbesimg.com/imageserve/5d112209142c500008c71504/960x0.jpg?fit=scale"></img>
                        <div class="card-body">
                            <h5 class="card-title">Scraped Article title</h5>
                            <p class="card-text">Scraped Article Description
                            src.components.TabbingCard.index.js</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <a href="#" class="btn btn-warning">Save Article</a>
                        </div>
                        </div>
                        </div>
                        <a href="#" class="btn btn-primary">More Articles</a>
                    </div>
                    </div>
                    <div class="card-footer"></div>
            </div> 
        </div>
    )
}

export default ArticleCard;