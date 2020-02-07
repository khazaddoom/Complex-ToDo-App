function reducer(state={counter: 0}, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            
            return {
                counter: state.counter + 1,
                ...state
            }
        
            case 'DECREMENT_COUNTER':
        
            return {
                counter: state.counter - 1,
                ...state
            }
    
        default:
            break;
    }

    
}
