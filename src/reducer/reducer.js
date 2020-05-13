import React from "react";

export const ContextApp = React.createContext();

export const initialState = [];

export const reducer = (state, action) => {
    switch (action.type) {
        case 'test_update':
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state
    }
};