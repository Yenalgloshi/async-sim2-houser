// INITIAL STATE


// CONST VARIABLES


// REDUCER FUNCTION
export default function reducer(state, actionOutput){
  switch(action.type) {
  case ADD_STUFF:
      return Object.assign({}, state, {num: ++state.num})
  }
}

// ACTION BUILDERS/CREATORS
