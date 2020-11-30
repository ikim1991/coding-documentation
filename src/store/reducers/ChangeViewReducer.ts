import { ChangeViewDispatch, CHANGE_VIEW, HIGHLIGHT_SECTION } from "../actions/ChangeViewActions"

interface DefaultStateI{
    view: boolean;
    id?: string
}

const defaultState: DefaultStateI = {
    view: false
}

export default (state: DefaultStateI = defaultState, action: ChangeViewDispatch) => {
    switch(action.type){
        case CHANGE_VIEW:
            return Object.assign({}, state, {view: action.payload});
        case HIGHLIGHT_SECTION:
            return Object.assign({}, state, {id: action.payload});
        default:
            return state;
    }
}