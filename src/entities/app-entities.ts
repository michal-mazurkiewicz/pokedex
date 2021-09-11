
export enum ViewState{
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export interface AppState{
    viewState: ViewState
    error?: string
}