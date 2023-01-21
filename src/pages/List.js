import React from "react";
import Table from 'react-bootstrap/Table';

const User = ({userDate}) => {
    return (
        <tr>
            <td>{userDate.email}</td>
            <td>{userDate.name}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email: 'user1@gmail.com', name: '김덕구'},
        {email: 'user2@gmail.com', name: '김팔봉'},
        {email: 'user3@gmail.com', name: '김덕'},
        {email: 'user4@gmail.com', name: '하덕구'},
    ];

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>이메일</th>
                <th>이름</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => <User key = {user.name} userDate={user} />)}
            </tbody>
        </Table>
    )
}

export default UserList;