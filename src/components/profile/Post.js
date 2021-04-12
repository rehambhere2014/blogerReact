import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import { Link } from "react-router-dom"
import { Wrapper, ImagePost, PostBody, PostInfo, PostHeader } from "./postStyle"
import ReactMarkdown from "react-markdown"
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import ReactToolTip from "react-tooltip"
import Page from "../../utilits/page/Page"
export default function Post(props) {
  let { id } = useParams()
  let [loading, setLoading] = useState(true)
  let [post, setPost] = useState([])
  useEffect(() => {
    let ourRequest = axios.CancelToken.source()

    async function fetchPost() {
      try {
        let res = await axios.get(`/post/${id}`, { cancleToken: ourRequest.token })
        setPost(res.data)
        setLoading(false)
      } catch (err) {
        console.log("ther is proplem")
      }
    }

    fetchPost()
    return () => {
      ourRequest.cancel()
    }
  }, [])
  if (loading) {
    return <h1>loading .........</h1>
  }
  let date = new Date(post.createdDate)

  const formatdata = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

  return (
    <Page title={post.title} wide="true">
      <div className="container">
        <div className="postContent">
          <PostHeader>
            <h1>{post.title}</h1>
            <div className="button">
              <Link to={`/post/${post._id}/edit`} data-for="edit" data-tip="edit">
                <FaEdit />
              </Link>{" "}
              <ReactToolTip id="edit" />
              <a href="#" data-for="delete" data-tip="delete">
                <FaTrashAlt />
              </a>
              <ReactToolTip id="delete" />
            </div>
          </PostHeader>
          <PostInfo>
            <ImagePost src={`${post.author.avatar}`} />
            Posted by {post.username} on {formatdata}
          </PostInfo>

          <PostBody>
            <ReactMarkdown source={post.body} />
          </PostBody>
        </div>
      </div>
    </Page>
  )
}
