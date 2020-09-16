export const createProject = (project) => {
  // Without thunk:
  // return {
  //     type: 'SOMETYPE',
  //     payload: project,
  // }

  // Halt the dispatch, make async calls and resume after
  // getFirebase from thunk.withExtraArgument at index.js
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorUsername: profile.username,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project,
        });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
