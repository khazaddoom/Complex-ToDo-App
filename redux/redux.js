
function reducer(state=0, action) {
    switch (action.type) {
        case 'INCREMENT':            
            return state + 1;
        case 'DECREMENT':            
            return state - 1;    
        default:
            return state;
    }
}

let store = Redux.createStore(reducer);
document.getElementById('counter').innerHTML = store.getState();

function increment() {
    store.dispatch({
        type: 'INCREMENT'
    });
    document.getElementById('counter').innerHTML = store.getState();
}

function decrement() {
    store.dispatch({
        type: 'DECREMENT'
    });
    document.getElementById('counter').innerHTML = store.getState();
}