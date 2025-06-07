import { useEffect, useState } from 'react';
import Postprops from "./Postprops"
import classes from './PostList.module.css';
import NewPost from "./NewPost";
import Modal from './Modal';
export default function PostList(props) {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    /* !!TODO: Fetch the posts from the server */
    useEffect(() => {
        async function fetchPosts() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/posts');
            const responseData = await response.json();
            setPosts(responseData.posts);
            setIsLoading(false);
        }

        /* !TODO Call the fetchPosts function */
        fetchPosts();

    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((posts) => [postData, ...posts]);
    }

    return (
        <>
            {props.isModalOpen &&
                <Modal>
                    <NewPost
                        onClose={props.onClose}
                        addPost={addPostHandler}
                    />
                </Modal>
            }

            {!isLoading && posts.length > 0 && (
                <ul className={classes.posts}>
                    {
                        posts.map((post) => (
                            <Postprops key={post.id} name={post.name} message={post.message} />
                        ))
                    }
                </ul>
            )}

            {!isLoading && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}

            {isLoading && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>Loading...</p>
                </div>
            )}
        </>
    )
}
