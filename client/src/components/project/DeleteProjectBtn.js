import { useNavigate } from "react-router-dom";
import { GET_PROJECTS } from "../../queries/projectQueries";

import { DELETE_PROJECT } from "../../mutations/projectMutations";
// import { GET_PROJECTS } from "../../queries/projectQueries";
import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";

const DeleteProjectBtn = ({ projectId }) => {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger" onClick={deleteProject}>
        <FaTrash />
      </button>
    </div>
  );
};

export default DeleteProjectBtn;
