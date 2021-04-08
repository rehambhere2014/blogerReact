import React, { useContext } from "react"
import { Link, withRouter } from "react-router-dom"
import { Button, ImageProfile, LinkItem, LinkItemProfile, NavbarButton, Wrapper } from "./headerstyle"
import { DispatchContext } from "../../redux/context/DispatchContext"
import { StateContext } from "../../redux/context/StateContext"
import { LogoutAction } from "../../redux/action"
function HeaderLogin() {
  let appDispatch = useContext(DispatchContext)
  let appState = useContext(StateContext)
  function handleremoveLocalstorge() {
    appDispatch(LogoutAction())
  }
  return (
    <Wrapper>
      <LinkItemProfile to={`/profile/${appState.user.username}`}>
        <ImageProfile src={`${appState.user.avatar}`} />
      </LinkItemProfile>
      <LinkItem to="/create-post">
        <Button login={true}>createBost</Button>
      </LinkItem>{" "}
      <LinkItem to="">
        <Button onClick={handleremoveLocalstorge}>logout</Button>
      </LinkItem>
    </Wrapper>
  )
}
export default withRouter(HeaderLogin)
