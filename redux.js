// 1/ Сделали Action  
const deposit = amount => {
    // возвращаем action
    return {
        type: 'deposit',
        payload: {amount}
    }
}

// 1/ Сделали Reducer 

function fundsReducer(state = 0, action) {
    switch (action.type) {
        case 'deposit':
            return state + action.payload.amount;
          
        default:
            return state;
    }
    
}

// 3 Сделали Store - зарегистрировали и все инициализировали  
const store = createStore(fundsReducer);


// 4 - привзяали к компоненту и отправляем action
<button onClick={REDUX.dispatch(deposit(100))}></button>