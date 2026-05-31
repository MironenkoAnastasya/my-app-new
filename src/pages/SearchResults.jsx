import React from 'react';

const SearchResults = () => {
    const results = useLoaderData();
    return (
        <div>
            {results.items.map(user => <div key={user.id}>{user.login}</div>)}
        </div>
    );
}

export default SearchResults;
