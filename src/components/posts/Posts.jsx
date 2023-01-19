// React
import {Link} from "react-router-dom";

// Redux
import {useSelector} from "react-redux";

// Common
import "./postsStyle.css"

export const Posts = () => {
  const { posts, Id, username } = useSelector(state => state.user);

  const selectedUsersPosts = posts.filter(item => item.userId === Id);

  const renderPosts = () =>
    selectedUsersPosts.map(item => (
      <div key={item.id} >
        <div >
          <div>
            <span className="title">Title:</span>
            <span>{item.title}</span>
          </div>

          <div>
            <span className="title">Post:</span>
            <span>{item.body}</span>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <div className="postsWrapper">
        <h1 >{username} posts:</h1>
        <div className="postBlock">
          {renderPosts()}
        </div>
      </div>
      <Link className="backLink" to="/">
        <span>Back to users</span>
      </Link>
    </>

)
}