import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle";
import RemoveObject from "./pages/RemoveObject";
import Community from "./pages/Community";
import BlogTitle from "./pages/BlogTitle";
import GenerateImages from "./pages/GenerateImages";
import ReviewResume from "./pages/ReviewResume";
import RemoveBackground from "./pages/RemoveBackground";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="community" element={<Community />} />
          <Route path="blog-title" element={<BlogTitle />} />
          <Route path="generate-images" element={<GenerateImages />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="remove-background" element={<RemoveBackground />} />
          <Route path="remove-object" element={<RemoveObject />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
