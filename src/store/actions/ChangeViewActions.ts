export const CHANGE_VIEW = "CHANGE_VIEW";
export const HIGHLIGHT_SECTION = "HIGHLIGHT_SECTION"

interface ChangeView{
    type: typeof CHANGE_VIEW;
    payload: boolean;
}

interface HighlightSection{
    type: typeof HIGHLIGHT_SECTION;
    payload: string;
}

export type ChangeViewDispatch = ChangeView | HighlightSection;


export const changeView = (view: boolean) => ({ type: CHANGE_VIEW, payload: view})
export const highlightSection = (id: string) => ({type: HIGHLIGHT_SECTION, payload: id})