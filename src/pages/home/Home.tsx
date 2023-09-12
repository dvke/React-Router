import "./Home.css";
interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div className="page home">
      <div className="home__content">
        <h1 className="home__header">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="home__sub">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="home__btn">Find your van</button>
      </div>
    </div>
  );
};

export default Home;
