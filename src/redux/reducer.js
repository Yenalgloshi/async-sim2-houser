// INITIAL STATE


// CONST VARIABLES
const ADD_STUFF = 'ADD_STUFF';

// REDUCER FUNCTION
export default function reducer(state, action){
  switch(action.type) {
  case ADD_STUFF:
      return Object.assign({}, state, {num: ++state.num})
  }
}

// ACTION BUILDERS/CREATORS
