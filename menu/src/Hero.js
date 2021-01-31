import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

function Hero() {
  const { closeSubmenu } = useGlobalContext();
  //   console.log(data);
  return (
    <section className="hero">
      <div className="hero-center">
        <article class="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes-from startups to Fortune 500s-use
            Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article class="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone"></img>
        </article>
      </div>
    </section>
  );
}

export default Hero;