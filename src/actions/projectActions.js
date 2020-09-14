export const createProject = (project) => {
  // Without thunk:
  // return {
  //     type: 'SOMETYPE',
  //     payload: project,
  // }

  // Halt the dispatch, make async calls and resume after
  console.log(project);
  return (dispatch, getState) => {
    dispatch({
      type: "CREATE_PROJECT",
      project,
    });
  };
};
