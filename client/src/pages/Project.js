import { Link, useParams } from "react-router-dom";
import DeleteProjectBtn from "../components/project/DeleteProjectBtn";
import EditProjectForm from "../components/project/EditProjectForm";
import Spinner from "../components/utils/Spinner";
import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p> Something went wrong...</p>;
  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            back home
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>

          <h5 className="mt-5">Client Information</h5>
          <ul className="list-group">
            <li className="list-group-item">
              <FaIdBadge className="icon" /> {data.project.client.name}
            </li>
            <li className="list-group-item">
              <FaEnvelope className="icon" /> {data.project.client.email}
            </li>
            <li className="list-group-item">
              <FaPhone className="icon" /> {data.project.client.phone}
            </li>
          </ul>
          <EditProjectForm project={data.project} />
          <DeleteProjectBtn projectId={data.project.id} />
        </div>
      )}
    </>
  );
};

export default Project;
