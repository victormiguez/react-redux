const initState = {
  todos: [
    {
      id: 1,
      name: 'Foo',
      isComplete: false
    },
    {
      id: 2,
      name: 'Bar',
      isComplete: true
    },
    {
      id: 3,
      name: 'Lorem',
      isComplete: false
    },
  ]
};

export default (state = initState, action) =>  {
  switch(action.type) {
    case 'TODO_ADD':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    default:
      return state;
  }
};
