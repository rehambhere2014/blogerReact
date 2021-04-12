import axios from "axios"
import React, { useState, useEffect } from "react"
import { ProfileBox, Wrapper, ImageProfile, ProfileHeader, ButtonProfile, ProfileNav, ProfileLink, ProfileList, ProfileListItem, DateSpan } from "./ProfileStyle"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import Loading from "../../utilits/LoadingComponent/Loading"
import Page from "../../utilits/page/Page"
export default function PostList() {
  let { username } = useParams()
  let [posts, setPosts] = useState([])
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    let ourRequest = axios.CancelToken.source()

    async function fetchPost() {
      try {
        let res = await axios.get(`/profile/${username}/posts`, { cancleToken: ourRequest.token })
        setPosts(res.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPost()
    return () => ourRequest.cancel()
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <Page title="Posts-List">
      <ProfileList>
        {posts.map((item) => {
          let date = new Date(item.createdDate)

          const formatdata = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

          return (
            <ProfileListItem key={item._id} to={`/post/${item._id}`}>
              <ImageProfile src={`${item.author.avatar}`} />
              <strong>{item.title}</strong>
              <DateSpan className="small_text">{formatdata}</DateSpan>
            </ProfileListItem>
          )
        })}
      </ProfileList>
    </Page>
  )
}
