import {useSelector} from "react-redux";


export const UsersPage = () => {
  const { users } = useSelector(state => state.user)
  console.log(users, "+++")

  const renderUsers = () => users.map(item => (<div>item.name</div>))

  return (
    <div>
      <div>sad</div>
      <div>render</div>
    </div>
  )
};