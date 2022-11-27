import axios from "axios";
import { apiUrl } from "./constants";

//const token = localStorage.getItem("token");
// get all posts
export async function getPosts() {
    const posts = await axios.get(apiUrl + "/posts");
    return posts;
}

// delete post
export async function deletePost(postId) {
    const post = await axios.delete(apiUrl + "/posts/"+postId)
    return post;
}

export async function getPostItem(postId){
    const post = await axios.get(apiUrl + "/posts/"+postId);
    return post;
}