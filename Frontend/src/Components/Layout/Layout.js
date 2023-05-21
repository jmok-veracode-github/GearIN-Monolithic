import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <div className="main-container">
        <main className="container main-content" style={{ minHeight: "70vh" }}>
          <Toaster />

          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Shop Now | GearIN",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "GearIn",
};

export default Layout;
