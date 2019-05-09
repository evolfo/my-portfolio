const initialState = {
  modalIsOpen: false
}

export default function expansionReducer(state = initialState, action) {
  switch(action.type) {
   case 'EXPANDER_OPEN':
     return {...state, expanded: !state.expanded}
   case 'EXPANDER_CLOSE':
     return {...state, expanded: false}
   case 'MODAL_OPEN':
     return {...state, modalIsOpen: true}
   case 'MODAL_CLOSE':
     return {...state, modalIsOpen: false}
   default: 
     return state
  }
}