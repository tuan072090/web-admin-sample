let defaultState = {
  listState: [],
  detailState: null
};

export const SET_BUSINESS_DETAIL = 'SET_BUSINESS_DETAIL';
export const SET_BUSINESS_LIST = 'SET_BUSINESS_LIST';

export const businessReducer = (state = defaultState, action) => {
  const { type, data } = action;

  switch (type){
    case SET_BUSINESS_DETAIL:
      return {...state, detailState: data}

    case SET_BUSINESS_LIST:
      return {...state, listState: data}
  }

  return state;
}
