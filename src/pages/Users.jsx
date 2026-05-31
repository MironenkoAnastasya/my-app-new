import axios from 'axios';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useSearchParams } from 'react-router';

const User = () => {

    const users = useLoaderData();
    //const [users, setusers] = useState([]);
    const [queryParams, setQueryParams] = useSearchParams();
    const [searchText, setsearchText] = useState(queryParams.get('q') || '');

     /*useEffect(() => {
        const  getUsers = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`,);
        setusers(response.data);
    }
    getUsers();
      }, []);*/

    const handSearch = (e) => {
        setsearchText(e.target.value);
        setQueryParams({q: e.target.value});
    };

    const filterUsers = (user) => {
        return searchText.trim() === '' ? true : user.login.toLowerCase().includes(searchText.toLowerCase());
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-blue-600'>Users</h1>
            <input type="text" value={searchText} onChange={handSearch} className='border' />
            
            {users.filter(filterUsers).map(user => <div key={user.id}>
                <Link to= {`/user/${user.login}`} className='text-blue-600'>{user.login} </Link></div >)}
        </div>
    );
}

export default User;
