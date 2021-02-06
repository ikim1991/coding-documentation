export const CHANGE_VIEW = "CHANGE_VIEW";
export const HIGHLIGHT_SECTION = "HIGHLIGHT_SECTION"
export const CHANGE_INDEX = "CHANGE_INDEX"

interface ChangeView{
    type: typeof CHANGE_VIEW;
    payload: boolean;
}

interface HighlightSection{
    type: typeof HIGHLIGHT_SECTION;
    payload: string;
}

interface ChangeIndex{
    type: typeof CHANGE_INDEX;
    payload: number;
}

export type ChangeViewDispatch = ChangeView | HighlightSection | ChangeIndex;


export const changeView = (view: boolean) => ({ type: CHANGE_VIEW, payload: view})
export const highlightSection = (id: string) => ({type: HIGHLIGHT_SECTION, payload: id})
export const changeIndex = (index: number) => ({ type: CHANGE_INDEX, payload: index})