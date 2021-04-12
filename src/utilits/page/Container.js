import React from "react"

export default function Container(props) {
  return <div className={props.wide ? "container-content" : ""}>{props.children}</div>
}
