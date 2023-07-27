

const innitialState = {
  todo: [
    // {
    //   id:1,
    //   title:'hello redux'
    // }
  ],
};

export default (state = innitialState, action) => {
  switch (action.type) {
    case "add":
      return {
        todo: [...state.todo, action.storo],
      };

    case "edit":
      return {
        todo: state.todo.map((p) => {
          if (p.id == action.storo.id) {
            return action.storo;
          } else {
            return p;
          }
        }),
      };

    case "delet":
      return {
        todo: state.todo.filter((all) => all.id != action.storo.id),
      };
    default:
      return state;
  }
};
