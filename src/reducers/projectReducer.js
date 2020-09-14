const initState = {
  projects: [
    { id: 1, title: "Some title", content: "Project content" },
    { id: 2, title: "Some title 2", content: "Project content" },
    { id: 3, title: "Some title 3", content: "Project content" },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
