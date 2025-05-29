import { useEffect, useState } from "react"

// COMPONENTS
import BookmarkList from "../components/BookmarkList"

const Homepage = () => {
  const [loading, setLoading] = useState(true)
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/b734a786-c614-480a-8b64-3dca94a45beb')
      .then(response => response.json())
      .then(data => {
        setBookmarks(data)
        setLoading(false)
      })

  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Homepage</h1>
      <BookmarkList bookmarks={bookmarks} />
    </div>
  )
}

export default Homepage