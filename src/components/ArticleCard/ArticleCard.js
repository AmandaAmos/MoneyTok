import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './style.css';

const ArticleCard = (props) => {
  return (
    <Carousel>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.moneyunder30.com/wp-content/uploads/2018/02/Banking-648x364-c-default.jpg"
          alt="Banking 101"
        />
        <Carousel.Caption>
          <h3>Banking 101</h3>
          <a style={{textShadow: "-1px 1px 2px white", fontSize: "large", fontWeight: "bold"}} href ="https://www.moneyunder30.com/banking-basics" target="_blank">A Guide for Teenagers</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.moneyunder30.com/wp-content/uploads/2018/02/teen_budget-1-648x364-c-default.jpg"
          alt="Budgeting"
        />
        <Carousel.Caption>
          <h3>Budgeting for Teens</h3>
          <a style={{textShadow: "-1px 1px 2px white", fontSize: "large", fontWeight: "bold"}} href = "https://www.moneyunder30.com/budgeting-for-teens" target="_blank">Grow Your Money While You're Young</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.moneyunder30.com/wp-content/uploads/2018/02/make_money_for_teens-1-648x364-c-default.jpg"
          alt="Making Money"
        />
        <Carousel.Caption>
          <h3>How to Make Money</h3>
          <a style={{textShadow: "-1px 1px 2px white", fontSize: "large", fontWeight: "bold"}} href = "https://www.moneyunder30.com/how-to-make-money-for-teens" target="_blank">A Guide for Teens</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.moneyunder30.com/wp-content/uploads/2018/05/102_how-teens-can-save-money-648x364-c-default.jpg"
          alt="Saving Money"
        />
        <Carousel.Caption>
          <h3>How to Save Money</h3>
          <a style={{textShadow: "-1px 1px 2px white", fontSize: "large", fontWeight: "bold"}} href ="https://www.moneyunder30.com/how-teens-can-save-money" target="_blank">As a Teen</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.moneyunder30.com/wp-content/uploads/2018/05/377_How-To-Spend-Money-Wisely%E2%80%94A-Guide-For-Teens-648x364-c-default.jpg"
          alt="Spending Money"
        />
        <Carousel.Caption>
          <h3>How to Spend Money Wisely</h3>
          <a style={{textShadow: "-1px 1px 2px white", fontSize: "large", fontWeight: "bold"}} href ="https://www.moneyunder30.com/how-to-spend-money-wisely-for-teens" target="_blank">A Guide for Teens</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.moneyunder30.com/wp-content/uploads/2018/02/saving-for-college-as-a-teen-1-648x364-c-default.jpg"
          alt="Saving for College"
        />
        <Carousel.Caption>
          <h3>7 Tips on Saving</h3>
          <a style={{textShadow: "-1px 1px 2px white", fontSize: "large", fontWeight: "bold"}} href = "https://www.moneyunder30.com/7-tips-on-saving-for-college-as-a-teen" target="_blank">For College as a Teen</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.moneyunder30.com/wp-content/uploads/2018/04/Employee_Rights-1-648x364-c-default.jpg"
          alt="Employee Working"
        />
        <Carousel.Caption>
          <h3>8 Most Important Employee Rights</h3>
          <a style={{textShadow: "-1px 1px 2px white", fontSize: "large", fontWeight: "bold"}} href = "https://www.moneyunder30.com/important-employee-rights-teens-should-know" target="_blank">Teens should know</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.moneyunder30.com/wp-content/uploads/2018/02/Credit-Card-Basics-1-648x364-c-default.jpg"
          alt="Credit Card"
        />
        <Carousel.Caption>
          <h3>Credit Card Basics</h3>
          <a style={{textShadow: "-1px 1px 2px white", fontSize: "large", fontWeight: "bold"}} href = "https://www.moneyunder30.com/credit-card-basics" target="_blank">A Guide for Teens</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.moneyunder30.com/wp-content/uploads/2018/02/money_lessons-1-648x364-c-default.jpg"
          alt="Money Tree"
        />
        <Carousel.Caption>
          <h3>6 Money Lessons</h3>
          <a style={{textShadow: "-1px 1px 2px white", fontSize: "large", fontWeight: "bold"}} href = "https://www.moneyunder30.com/money-lessons-our-parents-learned" target="_blank">Our Parents Learned, But We Didn't</a>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

// import React from "react";

// function ArticleCard(){
//     return(
//         <div>
//         <div id="TabbingCard" class="card text-center">
//             <div class="card-header">
//                 <ul class="nav nav-tabs card-header-tabs">
//                     <li class="nav-item">
//                         <a class="nav-link active" href="#">Articles</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="#">Saved Articles</a>
//                     </li>
//                 </ul>
//             </div>
//             <div body>
//                 <div class="card-body">
//                     <div class="card-deck">
//                     <div class="card">
//                         <img class="card-img-top" src="https://specials-images.forbesimg.com/imageserve/5d112209142c500008c71504/960x0.jpg?fit=scale"></img>
//                         <div class="card-body">
//                             <h5 class="card-title">Scraped Article title</h5>
//                             <p class="card-text">Scraped Article Description
//                             src.components.TabbingCard.index.js</p>
//                             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                             <a href="#" class="btn btn-warning">Save Article</a>
//                         </div>
//                         </div>
//                         <div class="card">
//                         <img class="card-img-top" src="https://www.ahaparenting.com/img/Teens-reading-outside300.jpg" ></img>
//                         <div class="card-body">
//                             <h5 class="card-title">Scraped Article title</h5>
//                             <p class="card-text">Scraped Article Description
//                             src.components.TabbingCard.index.js</p>
//                             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                             <a href="#" class="btn btn-warning">Save Article</a>
//                         </div>
//                         </div>
//                         <div class="card">
//                         <img class="card-img-top" src="https://specials-images.forbesimg.com/imageserve/5d112209142c500008c71504/960x0.jpg?fit=scale"></img>
//                         <div class="card-body">
//                             <h5 class="card-title">Scraped Article title</h5>
//                             <p class="card-text">Scraped Article Description
//                             src.components.TabbingCard.index.js</p>
//                             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                             <a href="#" class="btn btn-warning">Save Article</a>
//                         </div>
//                         </div>
//                         </div>
//                         <a href="#" class="btn btn-primary">More Articles</a>
//                     </div>
//                     </div>
//                     <div class="card-footer"></div>
//             </div>
//         </div>
//     )
// }

export default ArticleCard;
