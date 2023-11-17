export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts,
  });

export const like = (id) => ({
  type: "LIKE",
  payload: id
})

export const createNewPost = (post) => ({
  type: "CREATE_NEW_POST",
  payload: post,
})

export const toggleLoading  = () =>({
  type: "TOGGLE_LOADING",
})

export const toggleModal = () => ({
    type: "TOGGLE_MODAL",
})