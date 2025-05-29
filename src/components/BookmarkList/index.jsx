import BookmarkItem from "../BookmarkItem"

const BookmarkList = ({ bookmarks }) => {
  return (
    <div>
      <h2>Bookmark List</h2>
      <ul>
        {bookmarks.map((bookmark) => (
          <BookmarkItem key={bookmark.time_added} bookmark={bookmark} />
        ))}
      </ul>
    </div>
  )
  
}

export default BookmarkList