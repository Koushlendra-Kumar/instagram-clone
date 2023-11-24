const initialState = {
  showModal: false,
  loading: false,
  posts: [
    {
      _id: "65576639daa4bb783723fc76",
      user: "mark_101",
      text: "Old is gold",
      image:
        "https://images.unsplash.com/photo-1509281373149-e957c6296406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTYxOTl8MHwxfHNlYXJjaHw0fHxyYW5kb218ZW58MHx8fHwxNzAwMjI1MzAwfDA&ixlib=rb-4.0.3&q=80&w=200?w=248&auto=format&dpr=2 2x",
      likes: 0,
      date: "2023-11-17T13:04:48.009Z",
      comments: [],
      __v: 0,
    },
    {
      _id: "65576697daa4bb783723fc78",
      user: "alice",
      text: "Looking at the sky",
      image:
        "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTYxOTl8MHwxfHNlYXJjaHwxMHx8cmFuZG9tfGVufDB8fHx8MTcwMDIyNTMwMHww&ixlib=rb-4.0.3&q=80&w=200?w=248&auto=format&dpr=2 2x",
      likes: 0,
      date: "2023-11-17T13:04:48.009Z",
      comments: [],
      __v: 0,
    },
    {
      _id: "655766c2daa4bb783723fc7a",
      user: "Rajesh",
      text: "Have fun",
      image:
        "https://images.unsplash.com/photo-1485550409059-9afb054cada4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTYxOTl8MHwxfHNlYXJjaHw2fHxyYW5kb218ZW58MHx8fHwxNzAwMjI1MzAwfDA&ixlib=rb-4.0.3&q=80&w=200?w=248&auto=format&dpr=2 2x",
      likes: 0,
      date: "2023-11-17T13:04:48.009Z",
      comments: [],
      __v: 0,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "LIKE":
      const likedPost = state.posts.map((post) => {
        if (post._id === action.payload) {
          console.log(post._id, action.payload);
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      });
      return {
        ...state,
        posts: likedPost,
      };
    case "CREATE_NEW_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        showModal: !state.showModal,
      };
    case "TOGGLE_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

export default rootReducer;
