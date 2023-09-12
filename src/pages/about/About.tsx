import "./About.css";

interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <div className="page about">
      <img
        src="src\assets\about__img.png"
        alt="about__img"
        className="about__img"
      />
      <div className="about__content">
        <h1 className="about__header">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="home__sub">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
        <div className="explore">
          <h1 className="explore__header">
            Your destination is waiting. Your van is ready.
          </h1>
          <button className="home__btn">Explore our vans</button>
        </div>
      </div>
    </div>
  );
};

export default About;
