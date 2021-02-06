import { ChangeViewDispatch, CHANGE_INDEX, CHANGE_VIEW, HIGHLIGHT_SECTION } from "../actions/ChangeViewActions"

interface DefaultStateI{
    view: boolean;
    id?: string;
    index: number;
}

const defaultState: DefaultStateI = {
    view: false,
    index: 0
}

export default (state: DefaultStateI = defaultState, action: ChangeViewDispatch) => {
    switch(action.type){
        case CHANGE_VIEW:
            return Object.assign({}, state, {...state, view: action.payload});
        case HIGHLIGHT_SECTION:
            return Object.assign({}, state, {...state, id: action.payload});
        case CHANGE_INDEX:
            return Object.assign({}, state, {...state, index: action.payload})
        default:
            return state;
    }
}