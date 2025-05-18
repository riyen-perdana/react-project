import { useState } from 'react';
import Postprops from "./Postprops"
import classes from './PostList.module.css';
import NewPost from "./NewPost";
export default function PostList() {

    // TODO: Set First Value For Message and Name
    const [messages, setMessages] = useState('Hallo My Dear Yelvita');
    const [name, setName] = useState('Riyen Perdana');

    function messageChangeHandler(event) {
        setMessages(event.target.value);
        // setPosts(() => {
        //     return [
        //         { id: 1, name: posts[0].name, message: event.target.value },
        //     ];
        // });
    }
    function nameChangeHandler(event) {
        setName(event.target.value);
    }

    const [posts, setPosts] = useState([
        { id: 1, name: "Sabrina Adriyela", message: "Hallo My Little Princess Sabrina Adriyela" },
    ]);

    return (
        <>
            <NewPost 
                handleMessage={messageChangeHandler} 
                handleName={nameChangeHandler} 
            />
            <ul className={classes.posts}>

                {/* TODO: Map The Posts For Looping */}
                {posts.map((post) => (
                    <Postprops key={post.id} name={post.name} message={post.message} />
                ))}

                <Postprops name={ name } message={messages} />
                <Postprops name="Yelvita" message="Hallo My Sweety Riyen Perdana" />
            </ul>
        </>
    )
}
