// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'flowbite-react';
import { signoutSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Header = () => {
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
        navigate('/signin');
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Navbar>
      <Navbar.Brand href="/">
        <span className="self-center text-xl font-semibold whitespace-nowrap">
          MERN.
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex items-center space-x-4">
          {!currentUser ? (
            <>
              <Button as={Link} to="/signup" gradientDuoTone="purpleToBlue" outline>
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Button as={Link} to="/profile" gradientDuoTone="purpleToBlue" outline>
                Profile Page
              </Button>
              <Button
              // as={Link} to="/signout"
                onClick={handleSignout} 
                gradientDuoTone="purpleToBlue"
                outline
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
