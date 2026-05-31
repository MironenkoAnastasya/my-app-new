import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';


const UserDetail = () => {
   const user = useLoaderData();

   
    return (
        <div>
            <h1 className='text-3xl'>{user.login}</h1>
            <div><img src={user.avatar_url} alt={user.login} /></div>
            
        </div>
    );
}

export default UserDetail;
