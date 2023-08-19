import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);

  const users = [
    { id: 1, name: "Mario" },
    { id: 2, name: "Duda" },
    { id: 3, name: "Rafa" },
  ];

  return response.json(users);
};
