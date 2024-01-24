import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <h3 className="text-3xl">This is home</h3>
      <Footer></Footer>
    </div>
  );
};

export default Home;
