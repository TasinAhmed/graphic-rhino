import React from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/blog.png";
import { Helmet } from "react-helmet";

const title = "Blog";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";

function Blog() {
  return (
    <div className="blog">
      <Helmet>
        <title>Graphic Rhino | Blog</title>
      </Helmet>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="bekijk ons werk"
        link="/cases"
      />
    </div>
  );
}

export default Blog;
