import AddClientModal from "../components/home/modal/AddClientModal";
import AddProjectModal from "../components/home/modal/AddProjectModal";
import Clients from "../components/home/Clients";
import Projects from "../components/home/Projects";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <Clients />
    </>
  );
};

export default Home;
