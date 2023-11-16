import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://img.freepik.com/free-photo/travel-concept-with-worldwide-landmarks_23-2149153263.jpg?3&w=740&t=st=1689387305~exp=1689387905~hmac=c9772eb00a27c5e9953277b5f59ab6392ab1b6442086d389a473cbc97aa1620e"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
