import Menu from "@/components/Menu";
import NomLogo from "@/components/Nom-Nom-Logo";

const Home = () => {
  return (
    <div className="flex">
      <div className="bg-white h-screen w-[10%] p-10">
        <NomLogo />
        <Menu />
      </div>
      <div className="bg-gray-200 h-screen w-[90%]"></div>
    </div>
  );
};
export default Home;
