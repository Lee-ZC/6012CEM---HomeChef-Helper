import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/favoutite">Favoutite</Link>
        </li>
        <li>
          <Link to="/cta">CTA</Link>
        </li>
        <li>
          <Link to="/forgotpassword">ForgotPassword</Link>
        </li>
        <li>
          <Link to="/homepage">HomePage</Link>
        </li>
        <li>
          <Link to="/recipedetails">RecipeDetails</Link>
        </li>
        <li>
          <Link to="/bloglistpage">BlogListPage</Link>
        </li>
        <li>
          <Link to="/blogpostpage">BlogPostPage</Link>
        </li>
        <li>
          <Link to="/contactpage">ContactPage</Link>
        </li>
        <li>
          <Link to="/mealplanner">MealPlanner</Link>
        </li>
        <li>
          <Link to="/faq">FaQ</Link>
        </li>
        <li>
          <Link to="/homechefrecipe">HomeChefRecipe</Link>
        </li>
        <li>
          <Link to="/setting">Setting</Link>
        </li>
        <li>
          <Link to="/sitemap">Sitemap</Link>
        </li>
        <li>
          <Link to="/errorpage">ErrorPage</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
          <Link to="/admindashboard">AdminDashboard</Link>
        </li>
        <li>
          <Link to="/adminhandlerecipe">Adminhandlerecipe</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;