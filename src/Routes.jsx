import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Adminhandlerecipe = React.lazy(() => import("pages/Adminhandlerecipe"));
const AdminDashboard = React.lazy(() => import("pages/AdminDashboard"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Register = React.lazy(() => import("pages/Register"));
const ErrorPage = React.lazy(() => import("pages/ErrorPage"));
const Sitemap = React.lazy(() => import("pages/Sitemap"));
const Setting = React.lazy(() => import("pages/Setting"));
const HomeChefRecipe = React.lazy(() => import("pages/HomeChefRecipe"));
const FaQ = React.lazy(() => import("pages/FaQ"));
const MealPlanner = React.lazy(() => import("pages/MealPlanner"));
const ContactPage = React.lazy(() => import("pages/ContactPage"));
const BlogPostPage = React.lazy(() => import("pages/BlogPostPage"));
const BlogListPage = React.lazy(() => import("pages/BlogListPage"));
const RecipeDetails = React.lazy(() => import("pages/RecipeDetails"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
const CTA = React.lazy(() => import("pages/CTA"));
const Favoutite = React.lazy(() => import("pages/Favoutite"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/favoutite" element={<Favoutite />} />
          <Route path="/cta" element={<CTA />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/recipedetails" element={<RecipeDetails />} />
          <Route path="/bloglistpage" element={<BlogListPage />} />
          <Route path="/blogpostpage" element={<BlogPostPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/mealplanner" element={<MealPlanner />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path="/homechefrecipe" element={<HomeChefRecipe />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminhandlerecipe" element={<Adminhandlerecipe />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
