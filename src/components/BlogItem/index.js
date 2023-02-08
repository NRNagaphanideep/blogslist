// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <div className="item-container">
      <div className="item">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <div>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default BlogItem
