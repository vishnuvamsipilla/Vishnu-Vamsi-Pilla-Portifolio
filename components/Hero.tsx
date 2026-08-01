import Image from "next/image";
import BuilderMock from "./BuilderMock";
import ScrollButton from "./ScrollButton";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="byline">
            <Image
              className="ava"
              src="/vishnu.jpg"
              alt="N S Vishnu Vamsi Pilla"
              width={42}
              height={42}
              priority
            />
            <div>
              <div className="by-n">N S Vishnu Vamsi Pilla</div>
              <div className="by-r">Full Stack Developer · Andhra Pradesh, India</div>
            </div>
          </div>

          <span className="badge">
            <span className="dot" /> Open to roles · Available for freelance
          </span>

          <h1 className="h1">
            I build the tools
            <br />
            other people build
            <br />
            <span className="accent">websites</span> with.
          </h1>

          <p className="lede">
            Full Stack Developer at SellersCommerce, where I own the drag-and-drop Builder and the
            live Storefront engine behind CommerceEdge — a platform where admins design and publish
            full websites without writing code.
          </p>

          <div className="cta">
            <ScrollButton to="work" className="btn btn-p">
              See my work
            </ScrollButton>
            <ScrollButton to="contact" className="btn">
              Start a project
            </ScrollButton>
          </div>
        </div>

        <BuilderMock />
      </div>
    </section>
  );
}
