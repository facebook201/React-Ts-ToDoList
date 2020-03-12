




let nextTodoId = 0;

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId,
    text
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

// reducers
export const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    
    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.id) ? : { ...todo, completed: !todo.completed } : todo)
    
    default:
      return state;
  }
};

















