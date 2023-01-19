// React
import React from "react";

// Redux
import {useDispatch} from "react-redux";
import {setAlbums, setPosts, setUsers} from "../redux/slices/usersInfoSlice";


export function DataRequest()  {
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchData() {
      try {
        await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(setUsers(json))),
          fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(setPosts(json))),
          fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => dispatch(setAlbums(json)))
        ] )
      } catch (error) {
        alert ("Ошибка при запросе данных :(")
      }
    }
    fetchData().then(r => r)
  },[])

}