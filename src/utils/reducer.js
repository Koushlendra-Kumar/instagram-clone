const initialState = {
    showModal: false,
    loading: false,
    posts: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POSTS':
        return {
          ...state,
          posts: action.payload,
        };
      case 'LIKE':
        const likedPost = state.posts.map(post => {
          if(post._id === action.payload){
            console.log(post._id, action.payload)
            return {...post, likes: post.likes + 1}
          }
          return post;
        })
        return {
          ...state, posts: likedPost
        }
      case 'CREATE_NEW_POST':
        return {
          ...state,
         posts: [action.payload, ...state.posts]
        }
      case 'TOGGLE_MODAL':
        return {
          ...state, showModal: !state.showModal
        }
      case 'TOGGLE_LOADING': 
        return {
          ...state, loading: !state.loading
        }
      default:
        return state;
    }
  };
  
  export default rootReducer;