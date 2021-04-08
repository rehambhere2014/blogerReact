import axios from "axios"
import React, { useState } from "react"
import { withRouter } from "react-router"
import { Form, FormBox, Heading, Label, LinkItem, FormInput, Image, FormLogo, Text, FormSection, Button, InputSection } from "./signupStyle.js"
function SignUp(props) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await axios.post("register", { username, email, password })
      props.history.push("/login")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Form>
      <div className="container">
        <FormBox>
          <FormInput>
            <Heading>Sign Up</Heading>
            <FormSection onSubmit={handleSubmit}>
              <Label htmlFor="">
                <small>Username</small>
              </Label>
              <InputSection type="text" placeholder="username" autoComplete="off" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <Label htmlFor="">
                <small>Email</small>
              </Label>
              <InputSection type="email" placeholder="email" autoComplete="off" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Label htmlFor="">
                <small>Password</small>
              </Label>
              <InputSection type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button>Sign Up to Writescape</Button>
            </FormSection>

            <Text>
              Already have an account? <LinkItem to="/login">Login</LinkItem>.
            </Text>
          </FormInput>

          <FormLogo>
            <Image src="./images/register-illustration.svg" />
          </FormLogo>
        </FormBox>
      </div>
    </Form>
  )
}

export default withRouter(SignUp)
