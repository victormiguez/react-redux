export const getTodos = () => {
  return fetch('http://localhost:8080/todos')
    .then(response => response.json());
};
