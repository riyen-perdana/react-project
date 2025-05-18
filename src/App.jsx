import { useState } from "react";
import MainHeader from "./components/MainHeader";
// import Post from "./components/Post";
import PostList from "./components/PostList";

function App() {

  // TODO: Set Value For Modal is True
  const [isModalOpen, setIsModalOpen] = useState(false);

  function hideModalHandler() {
    setIsModalOpen(false);
  }
  function showModalHandler() {
    setIsModalOpen(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      {/* The Post component is used to display a post with a random name and a static message */}
      {/* <Post />
      <Post /> */}
      <PostList isModalOpen={isModalOpen} onClose={hideModalHandler} />
    </>
  );
}

export default App