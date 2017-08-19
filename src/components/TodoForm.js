import React from 'react';

export default ({ currentTodo, changeCurrent }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    changeCurrent(value);
  }

  return (
    <form>
      <input
        type="text"
        value={currentTodo}
        onChange={handleInputChange}
      />
    </form>
  );
}
