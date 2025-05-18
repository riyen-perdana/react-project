const Post = () => {

    // *The component uses the Math.random() method to randomly select one of the names from the array.
    // *The selected name is then displayed in an h1 tag.
    // *It also displays a static message "React Js is Awesome" in an h3 tag

    const names = ['Riyen', 'Yelvita'];
    const randomName = Math.random() > 0.5 ? names[0] : names[1];

    return (
        <>
            <h1>{ randomName }</h1>
            <h3>React Js is Awesome</h3>
        </>
    );
}

export default Post;