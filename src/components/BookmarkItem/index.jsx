// STYLES
import './styles.scss'

const BookmarkItem = ({ bookmark }) => {
  return (
    <div className="BookmarkItem">
      <h3>{bookmark.title}</h3>
      <p>{bookmark.url}</p>
      <p>{bookmark.time_added}</p>
      <p>{bookmark.tags}</p>
      <p>{bookmark.status}</p>
    </div>
  )
}

export default BookmarkItem
