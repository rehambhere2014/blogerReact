import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router"
import axios from "axios"
import Page from "../../utilits/page/Page"
import { BodyRoule, ChangeBody, ChangeTitle, Edite, FetchPostAction, SaveEnd, SaveStart, TitleRoule } from "../../redux/action/index"
import { useImmerReducer } from "use-immer"
import { initialState } from "../../redux/store/storeEditPost"
import Loading from "../../utilits/LoadingComponent/Loading"
import { Form, FormBox, Heading, Label, FormInput, FormSection, Button, InputSection, TextArea, Small } from "./style"
import { StateContext } from "../../redux/context/StateContext"
import { DispatchContext } from "../../redux/context/DispatchContext"
import { Reducer } from "../../redux/reducer/reducerEditPost"
import { FlashMessageAction } from "../../redux/action"

export default function EditPost(props) {
  let { id } = useParams()
  const [state, dispatch] = useImmerReducer(Reducer, initialState)
  let appState = useContext(StateContext)
  let appDispatch = useContext(DispatchContext)
  useEffect(() => {
    let ourRequest = axios.CancelToken.source()
    async function fetchPost() {
      try {
        let res = await axios.get(`/post/${id}`, { cancleToken: ourRequest.token })
        dispatch(FetchPostAction(res.data))
      } catch (err) {
        console.log("ther is proplem")
      }
    }

    fetchPost()
    return () => {
      ourRequest.cancel()
    }
  }, [])
  console.log(state)

  useEffect(() => {
    let ourRequest = axios.CancelToken.source()

    if (state.sendCount) {
      dispatch(SaveStart())
      async function editPost() {
        await axios.post(`/post/${id}/edit`, { title: state.title.value, body: state.body.value, token: appState.user.token }, { cancleToken: ourRequest.token })
        dispatch(SaveEnd())
        appDispatch(FlashMessageAction("edit post success "))
      }
      editPost()
    }
    return () => {
      ourRequest.cancel()
    }
  }, [state.sendCount])
  if (state.isFeatching) {
    return <Loading />
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(TitleRoule(state.title.value))
    // dispatch(BodyRoule(state.body.value))

    dispatch(Edite())
  }
  console.log(state)
  return (
    <Page title="Edit post">
      <Form onSubmit={handleSubmit}>
        <div className="container">
          <FormBox>
            <FormInput>
              <Heading>Edit Post</Heading>
              <FormSection>
                <Label htmlFor="">
                  <small>Title</small>
                </Label>
                <InputSection onBlur={(e) => dispatch(TitleRoule(e.target.value))} name="title" value={state.title.value} onChange={(e) => dispatch(ChangeTitle(e.target.value))} type="text" placeholder="title" autoComplete="off" />
                {state.title.hasError && <Small>{state.title.message}</Small>}
                <Label htmlFor="">
                  <small>Body</small>
                </Label>
                <TextArea type="text" name="body" onBlur={(e) => dispatch(BodyRoule(e.target.value))} placeholder="write some thing........" value={state.body.value} onChange={(e) => dispatch(ChangeBody(e.target.value))} />
                {state.body.hasError && <Small>{state.body.message}</Small>}

                <Button disabled={state.title.hasError || state.body.hasError || state.isSaving}>Edit post</Button>
              </FormSection>
            </FormInput>
          </FormBox>
        </div>
      </Form>
    </Page>
  )
}
