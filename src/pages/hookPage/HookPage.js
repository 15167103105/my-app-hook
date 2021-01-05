import React, { useReducer } from 'react'

export default function HookPage() {
  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'decremennt':
        return {
          count: state.count - 1,
        };
      case 'increment':
        return {
          count: state.count + 1,
        };
      default:
        throw new Error();
    }
  }; 
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>hook</h3>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decremennt' })}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  )
}
