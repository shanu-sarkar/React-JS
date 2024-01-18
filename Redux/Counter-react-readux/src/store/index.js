import { createStore } from 'redux'

const INITAIL_VALUE = {
    counter: 0,
    privacy: false
}

const counterReducer = (store = INITAIL_VALUE, action) => {
    if (action.type === "INCREMENT") {
      return {...store, counter: store.counter + 1};
    } else if (action.type === "DECREMENT") {
      return {...store, counter: store.counter - 1};
    } else if (action.type === "ADD") {
      return {
        ...store,
        counter: store.counter + Number(action.payload.num),
      };
    } else if (action.type === "SUBRECT") {
      return {
        ...store,
        counter: store.counter - Number(action.payload.num),
      };
    } else if (action.type === 'PRIVACT_TOGGLE') {
        return {...store,  privacy: !store.privacy}
    }
    return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;