
import React from 'react';
import Zara from './components/lern/Zara'; 
import ToDoList from './components/ToDoList/ToDoList';
import Second from './components/lern/Second';
import { Link, NavLink, Outlet, useNavigation } from 'react-router';
import Header from './components/Header/Header';

function App() {
 /* const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  if (isLoading) {
    return <div>Loading...</div>;
  }*/

  return (
    <div className="App">
      <Header />

      <Outlet /> 
    </div>
  );
}

export default App;
