import React, {useState} from 'react';

function reducer(state = {text: ''}, action) {
    switch (action.type) {
        case "Search":
            return {
                text:  action.payload
            };
        default:
            return {
                text: ''
            }
    }
}

export default reducer;