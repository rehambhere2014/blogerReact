import React, { useContext } from "react"
import { StateContext } from "../../redux/context/StateContext"
import "./flassMessageStyle.css"
export default function FlashMessage({ flassMessage }) {
  return (
    <div className="floating-alerts">
      {" "}
      {flassMessage.map((item) => {
        return (
          <div
            key={item.id}
            className="alert alert-success text-center 
        floating-alert shadow-msg"
          >
            {item}
          </div>
        )
      })}{" "}
    </div>
  )
}
