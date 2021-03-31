import React, { useContext } from "react"
import { StateContext } from "../../redux/context/StateContext"
import { Heading, HomeBox, HomeInfo, HomeLogo, HomeSection, Image, Text, Wrapper } from "./homeStyle"

export default function Home() {
  const appState = useContext(StateContext)
  return (
    <HomeSection>
      <div className="container">
        <Wrapper>
          <HomeLogo>
            <Image src="./images/feed-1-illustration.svg" />
          </HomeLogo>

          <HomeInfo>
            <Heading>
              Hello <span>{appState.user.username}</span>, your feed is empty.
            </Heading>
            <HomeBox>
              <Text>Your feed displays the latest posts from the people you follow. If you don’t have any friends to follow that’s okay; you can use the “Search” feature in the top menu bar to find content written by people with similar interests and then follow them</Text>
            </HomeBox>
          </HomeInfo>
        </Wrapper>
      </div>
    </HomeSection>
  )
}
