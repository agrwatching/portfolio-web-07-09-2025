"use client"
import { useState } from "react"
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"

interface Comment {
  id: number
  user: string
  text: string
}

export default function Contact() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState("Agra User") // dummy nama dari Google login
  const [commentText, setCommentText] = useState("")
  const [comments, setComments] = useState<Comment[]>([])
  const [editId, setEditId] = useState<number | null>(null)

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
    setUsername("")
  }

  const addComment = () => {
    if (!commentText.trim()) return
    if (editId !== null) {
      setComments(comments.map(c => c.id === editId ? { ...c, text: commentText } : c))
      setEditId(null)
    } else {
      setComments([...comments, { id: Date.now(), user: username, text: commentText }])
    }
    setCommentText("")
  }

  const deleteComment = (id: number) => {
    setComments(comments.filter(c => c.id !== id))
  }

  const startEdit = (c: Comment) => {
    setEditId(c.id)
    setCommentText(c.text)
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0b0d1a] text-white px-6 md:pt-12"
    >
      {/* Judul */}
      <h2 className="text-3xl font-bold text-center mb-2">
        Get in <span className="text-blue-500">Touch</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>

      {/* Deskripsi */}
      <p className="text-gray-400 text-center mb-4">
        Feel free to reach me via email, social media, or leave a comment below :
      </p>

      {/* Sosial Media */}
      <div className="flex gap-6 mb-12 text-2xl">
        <a href="#" target="_blank" className="hover:text-blue-500"><FaWhatsapp /></a>
        <a href="#" target="_blank" className="hover:text-blue-500"><FaFacebook /></a>
        <a href="#" target="_blank" className="hover:text-blue-500"><FaInstagram /></a>
        <a href="#" target="_blank" className="hover:text-blue-500"><FaYoutube /></a>
        <a href="#" target="_blank" className="hover:text-blue-500"><FaTiktok /></a>
      </div>

      {/* Komentar */}
      <div className="w-full max-w-2xl bg-[#12162c] p-6 rounded-xl shadow border border-gray-800">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>

        {!loggedIn ? (
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition"
          >
            Login with Google
          </button>
        ) : (
          <div className="mb-4">
            <p className="mb-2 text-gray-300">Logged in as <span className="text-blue-400">{username}</span></p>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full p-2 rounded bg-[#0b0d1a] border border-gray-700 mb-2"
              placeholder="Write a comment..."
            />
            <div className="flex gap-2">
              <button
                onClick={addComment}
                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
              >
                {editId !== null ? "Update" : "Post"}
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        )}

        {/* Daftar Komentar */}
        <div className="space-y-3">
          {comments.length === 0 && (
            <p className="text-gray-500 text-sm">No comments yet.</p>
          )}
          {comments.map((c) => (
            <div key={c.id} className="p-3 bg-[#0b0d1a] rounded border border-gray-700">
              <p className="text-sm text-gray-400 mb-1">{c.user}</p>
              <p>{c.text}</p>
              {loggedIn && c.user === username && (
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => startEdit(c)}
                    className="text-blue-400 text-sm hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteComment(c.id)}
                    className="text-red-400 text-sm hover:underline"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
