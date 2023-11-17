import { Avatar, Box, Input, Modal } from "@mui/material";
import "./Main.css"
import { BookmarkBorder, FavoriteBorder, Instagram, Menu, Telegram } from "@mui/icons-material";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { red } from "@mui/material/colors";
import {  like, setPosts, toggleModal } from "../../utils/actions";

const Main = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state)=> state.posts);
    const showModal = useSelector((state)=> state.showModal);
    useEffect(() => {
        const getPosts = async () => {
            const {data} = await axios.get("https://instagram-clone-webdevkoushal.up.railway.app/posts");
            console.log(data);
            dispatch(setPosts(data));
        }
        getPosts();
    },[dispatch])

    const likePost = (postId) => {
        dispatch(like(postId));
    }
    return (
        <div className="main">
            <div className="header">
                <Instagram/>
                <input type="text" placeholder="Search" disabled/>
                <Menu/>
            </div>
            <div className="status-container">
                {["Rajesh", "Mark", "John", "Nikhil", "Alice"].map(person =>(
                    <div className="status">
                        <Avatar
                    alt={person}
                    sx={{ width: 55, height: 55 }}
                  /></div>
                ))}
            </div>
            <Modal
        open={showModal}
        onClose={() =>{dispatch(toggleModal())}}
      >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            }}>
                Hello world
            </Box>
      </Modal>
            <div className="post-container">
                {posts.length > 0 && posts.map((post) =>(
                    <div key={post._id} className="post">
                        <div className="postHeader">
                            <Avatar
                            alt={post.user}
                            sx={{ width: 35, height: 35, bgcolor: red[400] }}
                          >{post.user[0]}</Avatar>
                          <p>{post.user}</p>
                        </div>
                        <div className="postBody">
                            <img src={post.image} alt=""  width='430'/>
                            <div className="user-actions">
                                <FavoriteBorder onClick={e => likePost(post._id)} className="like-button"/>
                                <Telegram/>
                                <BookmarkBorder/>
                            </div>
                            <p>{post.likes} likes</p>
                            <p><span className="user-post-text">{post.user}</span> {post.text}</p>
                        </div>
                        <div className="comments-container">
                            {post.comments.length > 0 && post.comments.map((comment,index) =>(
                                <div key={index} className="comment">
                                    <p>{comment.user}</p>
                                    <p>{comment.text}</p>
                                </div>
                            ))}
                            <div className="add-comment">
                                <Input variant="standard" placeholder="Add your comment" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main;