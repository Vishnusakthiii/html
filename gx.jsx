import React, { useReducer } from 'react';
const initialState = {
  name: '',
  email: '',
  password: '',
};
function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: 'UPDATE_FIELD',
      field: name,
      value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', state);
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default Form;
