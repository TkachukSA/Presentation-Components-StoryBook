import {reducer, SteteType, togl} from "./reducer";
import {action} from "@storybook/addon-actions";


test('reducer tests', () => {
    const state: SteteType = {
        collapsed: false
    }

    let res = reducer(state, {type: togl})

    expect(res).toBe(false)


})