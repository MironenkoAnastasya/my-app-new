import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/About";
import ToDoList from "../components/ToDoList/ToDoList";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import { getUsers, getUsersDetails, searchUsers } from "../loaders/usersLoaders";
import SearchResults from "../pages/SearchResults";
import ErrorBoudary from "../components/ErrorBoudary";

const router = createBrowserRouter(
    [{
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <h1>Home</h1>
            },
            {
                 path: '/about',
                element: <About />
            },

            {
                 path: '/todo',
                element: <ToDoList />
            },
            {
                 path: '/Users',
                element: <Users />,
                loader: getUsers
            },

             {
                 path: '/User/:id',
                element: <UserDetail />,
                loader: getUsersDetails,
                errorElement: <ErrorBoudary />
            },
            {
                path: '/search',
                element: <SearchResults />,
                loader: searchUsers
            }
        ]
    },
    
    {
        path: '/*',
        element: <h1>Page Not Faund 404</h1>
    },



]
)
export default router