const TODO_ADD = 'TODO_ADD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

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
  ],
  currentTodo: '',
};

export const updateCurrent = (val) => ({
  type: CURRENT_UPDATE,
  payload: val,
});

export default (state = initState, action) =>  {
  switch(action.type) {
    case TODO_ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case CURRENT_UPDATE:
      return {
        ...state,
        currentTodo: action.payload,
      }
    default:
      return state;
  }
};
