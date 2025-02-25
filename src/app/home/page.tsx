import Menu from "../components/Menu";
import NomLogo from "../components/Nom-Nom-Logo";

const Home = () => {
  return (
    <div className="flex">
      <div className="bg-white h-screen w-1/6 p-10">
        <NomLogo />
        <Menu />
      </div>
      <div className="bg-gray-200 h-screen w-5/6"></div>
    </div>
  );
};
export default Home;
