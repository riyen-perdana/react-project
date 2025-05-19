import { useState } from 'react';
import Postprops from "./Postprops"
import classes from './PostList.module.css';
import NewPost from "./NewPost";
import Modal from './Modal';
export default function PostList(props) {

    // TODO: Set First Value For Message and Name
    const [messages, setMessages] = useState('Hallo My Dear Yelvita');
    const [name, setName] = useState('Riyen Perdana');

    const [posts, setPosts] = useState([
        { id: 1, name: "Sabrina Adriyela", message: "Hallo My Little Princess Sabrina Adriyela" },
    ]);

    function addPostHandler(postData) {
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

            <ul className={classes.posts}>

                {/* TODO: Map The Posts For Looping */}
                {posts.map((post) => (
                    <Postprops key={post.id} name={post.name} message={post.message} />
                ))}

                <Postprops name={name} message={messages} />
                <Postprops name="Yelvita" message="Hallo My Sweety Riyen Perdana" />
            </ul>
        </>
    )
}
