import axios from "axios"
import React, { useState, useEffect } from "react"
import { ProfileBox, Wrapper, ImageProfile, ProfileHeader, ButtonProfile, ProfileNav, ProfileLink, ProfileList, ProfileListItem, DateSpan } from "./ProfileStyle"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

export default function PostList() {
  let { username } = useParams()
  let [posts, setPosts] = useState([])
  useEffect(() => {
    async function fetchPost() {
      try {
        let res = await axios.get(`/profile/${username}/posts`)
        console.log(res.data)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPost()
  }, [])
  return (
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
  )
}
