import reducer from './todo';


describe('Todo Reducer', () => {

  it('should return a state object', () => {
    const result = reducer(undefined, { type: 'FOO' });
    expect(result).toBeDefined();
  });


  it('should add a todo', () => {
    const startState = {
      todos: [
        { id: 1, name: 'Foo', isComplete: false },
        { id: 2, name: 'Bar', isComplete: false },
        { id: 3, name: 'Lorem', isComplete: true },
      ]
    }

    const expectedState = {
      todos: [
        { id: 1, name: 'Foo', isComplete: false },
        { id: 2, name: 'Bar', isComplete: false },
        { id: 3, name: 'Lorem', isComplete: true },
        { id: 4, name: 'Ipsum', isComplete: false },
      ]
    }

    const action = { type: 'TODO_ADD', payload: { id: 4, name: 'Ipsum', isComplete: false } };
    const result = reducer(startState, action)

    expect(result).toEqual(expectedState);
  });


});
