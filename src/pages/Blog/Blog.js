import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/blog.jpg";
import { Helmet } from "react-helmet";
import Images from "./Images";
import Masonry from "../../components/Masonry/Masonry";

const title = "Blog";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";

function Blog() {
  const myRef = useRef(null);
  return (
    <>
      <Helmet>
        <title>Graphic Rhino | Blog</title>
      </Helmet>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="bekijk ons werk"
        link="/cases"
        scrollTo={myRef}
      />
      <main className="blog" ref={myRef}>
        <div className="container">
          <Masonry images={Images} />
        </div>
      </main>
    </>
  );
}

export default Blog;
