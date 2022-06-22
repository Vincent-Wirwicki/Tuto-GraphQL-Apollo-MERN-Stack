import Spinner from "../utils/Spinner";
import ProjectCard from "../project/ProjectCard";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../queries/projectQueries";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p> Something went wrong...</p>;
  return (
    <>
      {data.projects.length > 0 ? (
        data.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <p>No projects</p>
      )}
    </>
  );
};

export default Projects;
