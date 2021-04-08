import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import { Link } from "react-router-dom"
import { Wrapper, ImagePost, PostBody, PostInfo } from "./postStyle"
export default function Post(props) {
  let { id } = useParams()
  let [loading, setLoading] = useState(true)
  let [post, setPost] = useState([])
  useEffect(() => {
    async function fetchPost() {
      try {
        let res = await axios.get(`/post/${id}`)
        setPost(res.data)
        setLoading(false)
      } catch (err) {
        console.log("ther is proplem")
      }
    }

    fetchPost()
  }, [])
  if (loading) {
    return <h1>loading .........</h1>
  }
  let date = new Date(post.createdDate)

  const formatdata = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

  return (
    <Wrapper>
      <div className="container">
        <div className="postContent">
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <PostInfo>
            <ImagePost src={`${post.author.avatar}`} />
            Posted by {post.username} on {formatdata}
          </PostInfo>

          <PostBody>
            <p>{post.body}</p>
          </PostBody>
        </div>
      </div>
    </Wrapper>
  )
}
