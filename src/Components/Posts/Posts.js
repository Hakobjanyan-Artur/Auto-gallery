import Post from "../Post/Post"
import './Posts.css'

const Posts = ({posts, search}) => {
  return (
    <>
        <h1>Posts</h1>
        <hr />
        <div className="container">
          <div className="postSection">
        {
            posts.filter(el => el.title.toLowerCase().includes(search.toLowerCase())).map(post => <Post key={post.id} img={post.img} title={post.title} aboutAll={post.aboutAll} about={post.about} id={post.id}/>)
        }
          </div>
        </div>
    </>
  )
}

export default Posts