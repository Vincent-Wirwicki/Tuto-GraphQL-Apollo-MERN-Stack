import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
  query getCLients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export { GET_CLIENTS };
