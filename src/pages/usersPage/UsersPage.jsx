// Common
import "./userPageStyle.css"
import {User} from "../../components/user/User";


export const UsersPage = () => {

  return (
    <div className="userContainer">
      <div className="userContent">
        <User/>
      </div>
    </div>
  )
};