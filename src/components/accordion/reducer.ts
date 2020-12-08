import React, {useReducer} from "react";

export type actionType = {
    type: string
}
export const togl = "Togl-Colapsed"

export type SteteType={
    collapsed: boolean
}
export const reducer = (state: SteteType, action: actionType): SteteType => {
    switch (action.type) {
        case togl:
            const stateCopy={...state, collapsed: !state.collapsed }
            return stateCopy
    }
    return state
}