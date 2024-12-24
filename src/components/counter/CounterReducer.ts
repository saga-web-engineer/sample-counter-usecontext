import { useReducer } from 'react';

type Action = {
  type: '+' | '-';
  step: number;
};

const reducer = (prev: number, { type, step }: Action) => {
  switch (type) {
    case '+':
      return prev + step;
    case '-':
      return prev - step;
    default:
      throw new Error('Error');
  }
};

const initialState = 0;

export const useCounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

export const defaultCounterReducer: ReturnType<typeof useCounterReducer> = {
  state: initialState,
  dispatch: () => {},
};
