import React, { useState, useContext } from "react"
import axios from "axios"

import { withRouter } from "react-router"
import { Form, FormBox, Heading, Label, LinkItem, Text, FormInput, Image, FormLogo, Paragraph, FormSection, Button, InputSection } from "./loginStyle"
import { DispatchContext } from "../../redux/context/DispatchContext"
import { LoginAction, LogoutAction } from "../../redux/action"
function Login(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  let appDispatch = useContext(DispatchContext)
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let res = await axios.post("login", { username, password })
      if (res.data) {
        console.log(res.data)

        appDispatch(LoginAction(res.data))

        props.history.push("/")
      } else {
        console.log("try again")
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Form>
      <div className="container">
        <FormBox>
          <FormInput>
            <Heading>Login</Heading>
            <FormSection onSubmit={handleSubmit}>
              <Label htmlFor="">
                <small>Username</small>
              </Label>
              <InputSection type="text" placeholder="username" autoComplete="off" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />

              <Label htmlFor="">
                <small>Password</small>
              </Label>
              <InputSection type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <Button>Sign in to Writescape</Button>
            </FormSection>
            <Text>
              New user? <LinkItem to="/signup">Sign up</LinkItem> to create your account.
            </Text>
          </FormInput>
          <FormLogo>
            <Image src="./images/login-illustration.svg" />
          </FormLogo>
        </FormBox>
      </div>
    </Form>
  )
}
export default withRouter(Login)
