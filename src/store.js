import {createStore} from "redux"

const initialState :{
    user : {
        username :'santhosh',
        wallet : 25000
    }
}

//action type
const UPDATE_WALLET ='UPDATE_WALLET';

//action creation
const action (updateWallet) =>(
    {
        type: 'UPDATE_WALLET',
        payload : amount
    }
)

    function  reducer(state = initialState,action) {
        switch(action.type){
            case UPDATE_WALLET:{
                user:{
                    state.user.username=state.user.username;
                    state.user.wallet = state.user.wallet -action.payload;
                }

            }
          default:{

          }
        }
        
    }

    const store =createStore(reducer);
    export default store;
