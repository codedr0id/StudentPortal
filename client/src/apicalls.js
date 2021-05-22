import { API } from "./API";

export const createStudent = (student) => {
  return fetch(`${API}/student/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(student),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getStudents = () => {
  return fetch(`${API}/students`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
