import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/blog.jpg";
import Images from "./Images";
import Masonry from "../../components/Masonry/Masonry";

const title = "Blog";
const text =
  "Klanten helpen gaat niet enkel over adviseren en ontwerpen maken. Graag willen we ook jouw kennis bijschaven. Wil je meer weten over drukwerk, online marketing of één van onze andere diensten? Snuister eens door onze blog en leer bij! En wie weet merk je iets op waar jouw zaak nog nood aan heeft. Heb je daar vragen over? Dan helpen we je uiteraard, zeer graag verder!";

function Blog() {
  const myRef = useRef(null);
  return (
    <>
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
