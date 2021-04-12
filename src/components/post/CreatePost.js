import axios from "axios"
import React, { useState, useContext } from "react"
import { withRouter } from "react-router"
import { StateContext } from "../../redux/context/StateContext"
import { DispatchContext } from "../../redux/context/DispatchContext"
import { Form, FormBox, Heading, Label, FormInput, FormSection, Button, InputSection, TextArea } from "./style"
import Page from "../../utilits/page/Page"
import { FlashMessageAction } from "../../redux/action"
function CreatePost(props) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  let appState = useContext(StateContext)
  let appDispath = useContext(DispatchContext)
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let res = await axios.post("create-post", { title, body, token: appState.user.token })
      if (title && body) {
        props.history.push(`/post/${res.data}`)
        appDispath(FlashMessageAction())
      } else {
        alert("please but data")
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Page title="create-post">
      <Form>
        <div className="container">
          <FormBox>
            <FormInput>
              <Heading>Create Post</Heading>
              <FormSection onSubmit={handleSubmit}>
                <Label htmlFor="">
                  <small>Title</small>
                </Label>
                <InputSection type="text" placeholder="title" autoComplete="off" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Label htmlFor="">
                  <small>Body</small>
                </Label>
                <TextArea type="text" name="body" placeholder="write some thing........" value={body} onChange={(e) => setBody(e.target.value)} />
                <Button>create post</Button>
              </FormSection>
            </FormInput>
          </FormBox>
        </div>
      </Form>
    </Page>
  )
}

export default withRouter(CreatePost)
