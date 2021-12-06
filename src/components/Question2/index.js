import React, { useEffect, useReducer, useRef } from 'react';
import CheckItem from './components/CheckItem';
import './index.css';

const initialState = [
  {
    text: 'value 1',
    checked: false,
  },
  {
    text: 'value 2',
    checked: false,
  },
  {
    text: 'value 3',
    checked: false,
    disable: true,
  },
  {
    text: 'value 4',
    checked: false,
  },
  {
    text: 'value 5',
    checked: false,
  },
];

const SELECT_ITEM = 'SELECT_ITEM';
const SELECT_ALL = 'SELECT_ALL';
const SELECT_MULTI = 'SELECT_MULTI';

const changeItemChecked = (state, id) => {
  const nextState = [...state];
  const target = state[id];

  nextState[id] = {
    ...target,
    checked: !target.checked,
  };

  return nextState;
};

const changeAllChecked = (state, checked) => {
  return state.map((item) => {
    return {
      ...item,
      checked,
    };
  });
};

const changePartChecked = (state, index) => {
  const nextState = [...state];

  for (let i = index; i >= 0; i--) {
    const target = nextState[i];

    if (!target.disable) {
      nextState[i] = {
        ...target,
        checked: !target.checked,
      };
    }
  }

  return nextState;
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SELECT_ITEM:
      return changeItemChecked(state, payload.id);
    case SELECT_ALL:
      return changeAllChecked(state, payload.checked);
    case SELECT_MULTI:
      return changePartChecked(state, payload.id);
    default:
      return state;
  }
};

function Question2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const selectMultiRef = useRef(false);

  const handleItemSelect = (id, checked) => (e) => {
    const type = selectMultiRef.current ? SELECT_MULTI : SELECT_ITEM;

    dispatch({
      type,
      payload: {
        id,
        checked,
      },
    });
  };

  const handleAllSelect = (e) => {
    dispatch({
      type: SELECT_ALL,
      payload: {
        checked: e.target.checked,
      },
    });
  };

  const handleShiftIsKeyDown = (e) => {
    if (e.shiftKey) {
      selectMultiRef.current = true;
    }
  };

  const handleShiftIsKeyUp = (e) => {
    selectMultiRef.current = false;
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleShiftIsKeyDown);
    document.body.addEventListener('keyup', handleShiftIsKeyUp);

    return () => {
      document.body.removeEventListener('keydown', handleShiftIsKeyDown);
      document.body.removeEventListener('keyup', handleShiftIsKeyUp);
    };
  }, []);

  return (
    <table className='question2'>
      <thead>
        <tr>
          <th>
            <input type='checkbox' onChange={handleAllSelect} />
          </th>
          <th></th>
          <th>狀態</th>
        </tr>
      </thead>
      <tbody>
        {state.map(({ text, checked, disable }, index) => {
          return (
            <CheckItem
              text={text}
              disable={disable}
              checkProps={{
                checked: checked,
                onChange: handleItemSelect(index, checked),
              }}
              key={`check-item-${index}`}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Question2;
