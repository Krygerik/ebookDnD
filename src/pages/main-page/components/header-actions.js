export type TSetHeaderAction = {
  type: string,
  payload: string,
}

export const SET_HEADER = 'SET_HEADER'
export const setHeader = (newHeader: string): TSetHeaderAction => ({
  type: SET_HEADER,
  payload: newHeader,
})
