import {useContext} from 'react'
import { userContext } from './Usercontext'

const Child = () => {
    const {username} = useContext(userContext);
  return (
      <div>
          <h3>UserName : {username}</h3>
      </div>
  )
}

export default Child
