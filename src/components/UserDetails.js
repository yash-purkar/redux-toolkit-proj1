import React from 'react'
import { DeleteAllUsers } from './DeleteAllUsers'

export const UserDetails = () => {
  return (
    <div>
      <div className='header'>
        <h2 className='list-heading'>List Of Users</h2>
        <button>Add New User</button>
      </div>
      <hr />
      <ul>
        <li>User 1</li>
        <li>User 2</li>
      </ul>
      <DeleteAllUsers/>
    </div>
  )
}
