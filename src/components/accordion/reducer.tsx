import React, {useReducer} from "react";

export type actionType = {
    type: string
}
export const togl = "Togl-Colapsed"

export type SteteType={
    collapsed: boolean
}
export const reducer = (state: SteteType, action: actionType) => {
    if (action.type === togl) {
        return  !state
    } else {
        throw new Error('bad action')
    }
    return state
}