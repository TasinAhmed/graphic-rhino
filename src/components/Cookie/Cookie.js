import React from "react";
import { useCookies } from "react-cookie";
import Button from "../Button/Button";

function Cookie() {
  const [cookies, setCookie] = useCookies(["accept"]);
  return (
    <div
      className="cookie"
      style={cookies.accept === "true" ? { display: "none" } : null}
    >
      <div className="container">
        <div className="cookie__title">Cookies & privacy</div>
        <div className="cookie__info">
          We use cookies to personalize your experience. By continuing to visit
          this website, you agree to our use of cookies.
        </div>
        <Button
          btnText="understood"
          click={() => {
            setCookie("accept", "true", {
              path: "/",
              sameSite: "none",
              secure: true,
            });
            console.log(cookies.name);
          }}
        />
      </div>
    </div>
  );
}

export default Cookie;
