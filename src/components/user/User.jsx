// React
import React from "react";
import {Link} from "react-router-dom";

// Redux
import {useDispatch, useSelector} from "react-redux";
import {setUsername, setId} from "../../redux/slices/usersInfoSlice";

// Common
import "./userStyle.css"
import {Modal} from "../modal/Modal";


export const User = () => {
  const [modalActive, setModalActive] = React.useState(false);
  const { users } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const addId = (id, username) => {
    dispatch(setId(id))
    dispatch(setUsername(username))
  };

  const renderUsers = () => users.map((item) => (
      <div className="userWrapper" key={item.id}>
        <div className="nameBlock">
          <div >
            <span className="title">
              Name:
            </span>
            <span className="nameItem">
              {item.name}
            </span>
          </div>
          <div>
            <span className="title">
              Username:
            </span>
            <span className="nameItem">
              {item.username}
            </span>
          </div>
          <div>
            <span className="title">
              email:
            </span>
            <span className="nameItem">
              {item.email}
            </span>
          </div>
        </div>
        <div className="buttonBlock">
          <Link className="link" to="/posts">
            <div onClick={() => addId(item.id, item.username)} className="button">
              Posts
            </div>
          </Link>
          <div onClick={() => {
            setModalActive(true)
            addId(item.id, item.username)
          }} className="button">
            Albums
          </div>
        </div>
      </div>
    )
  )

  return (
    <>
      {renderUsers()}
      <Modal active={modalActive} setActive={setModalActive}/>
    </>
  )
};