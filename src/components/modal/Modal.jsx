// React
import React from "react";

// Redux
import {useSelector} from "react-redux";

// Common
import "./modalStyle.css"


export const Modal = ({ active, setActive}) => {

  const {albums, Id, username} = useSelector(state => state.user);

  const selectedAlbums = albums.filter(item => item.userId === Id);


  const renderAlbums = () => selectedAlbums.map(item => (
    <div key={item.id}>
      <h4>
       Title:
      </h4>
      <span>
        {item.title}
      </span>
    </div>
  ));

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        <h3>{username} albums:</h3>
        {renderAlbums()}
      </div>
    </div>
  )
}