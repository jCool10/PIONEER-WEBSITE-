const initialState = {
  membersLead: {},
};

export const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'first':
      return { ...state, ...payload };

    default:
      return state;
  }
};
