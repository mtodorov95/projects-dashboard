export const createProject = (project) => {
  // Without thunk:
  // return {
  //     type: 'SOMETYPE',
  //     payload: project,
  // }

  // Halt the dispatch, make async calls and resume after
  // getFirebase from thunk.withExtraArgument at index.js
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({
      type: "CREATE_PROJECT",
      project,
    });
  };
};
