import axios from "axios"
import React, { useEffect, useContext, useState } from "react"
import { useParams } from "react-router"
import { StateContext } from "../../redux/context/StateContext"
import Loading from "../../utilits/LoadingComponent/Loading"
import PostList from "./PostList"
import { ProfileBox, Wrapper, ImageProfile, ProfileHeader, ButtonProfile, ProfileNav, ProfileLink, ProfileList, ProfileListItem } from "./ProfileStyle"

export default function Profile() {
  let { username } = useParams()
  let appState = useContext(StateContext)
  let [loading, setLoading] = useState(true)
  let [profileData, setProfileData] = useState({
    counts: {
      followerCount: 0,
      followingCount: 0,
      postCount: 0,
    },

    isFollowing: false,
    profileAvatar: "",
    profileUsername: "...",
  })

  useEffect(() => {
    async function fetchPosts() {
      try {
        let res = await axios.post(`/profile/${username}`, { token: appState.user.token })

        setProfileData(res.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPosts()
  }, [])

  if (loading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div className="container">
        <ProfileBox>
          <ProfileHeader>
            <ImageProfile src={profileData.profileAvatar} /> {profileData.profileUsername}
            <ButtonProfile>follow +</ButtonProfile>
          </ProfileHeader>
          <ProfileNav>
            <ProfileLink active="true" to="">
              Posts: {profileData.counts.postCount}
            </ProfileLink>

            <ProfileLink to=""> Followers: {profileData.counts.followingCount} </ProfileLink>

            <ProfileLink to=""> Following: {profileData.counts.followerCount}</ProfileLink>
          </ProfileNav>
          <PostList />
        </ProfileBox>
      </div>
    </Wrapper>
  )
}
