import React from "react"
import { Home, Image, HomeGuestBox, HomeguestLeft, HomeguestRight, Heading } from "./homestyle"

export default function HomeGuest() {
  return (
    <Home>
      <div className="container">
        <HomeGuestBox>
          <HomeguestLeft>
            <Heading>Remember Writing?</Heading>

            <p>Are you sick of short tweets and impersonal “shared” posts that are reminiscent of the late 90’s email forwards? We believe getting back to actually writing is the key to enjoying the internet again.</p>
          </HomeguestLeft>
          <HomeguestRight>
            <Image src="./images/homepage-hero-illustration.svg" />
          </HomeguestRight>
        </HomeGuestBox>
      </div>
    </Home>
  )
}
