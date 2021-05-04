import React, { useEffect } from "react";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  selectUserEmail,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";
function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    });
  };
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };
  return (
    <>
      <Nav>
        <Logo src="/images/logo.svg" />
        {!userName ? (
          <LoginContainer>
            <Login onClick={signIn}>Login</Login>
          </LoginContainer>
        ) : (
          <>
            <NavMenu>
              <a>
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
              </a>
              <a>
                <img src="/images/SEARCH-icon.svg" />
                <span>SEARCH</span>
              </a>
              <a>
                <img src="/images/watchlist-icon.svg" />
                <span>WATCHLIST</span>
              </a>
              <a>
                <img src="/images/original-icon.svg" />
                <span>ORIGINALS</span>
              </a>
              <a>
                <img src="/images/movie-icon.svg" />
                <span>MOVIES</span>
              </a>
              <a>
                <img src="/images/series-icon.svg" />
                <span>SERIES</span>
              </a>
            </NavMenu>
            <UserContainer>
              <button onClick={signOut}>Sign Out</button>
              <UserImg src={userPhoto} />
            </UserContainer>
          </>
        )}
      </Nav>
      {userName && (
        <NavMenu2>
          <a>
            <span>HOME</span>
          </a>
          <a>
            <span>SEARCH</span>
          </a>
          <a>
            <span>WATCHLIST</span>
          </a>
          <a>
            <span>ORIGINALS</span>
          </a>
          <a>
            <span>MOVIES</span>
          </a>
          <a>
            <span>SERIES</span>
          </a>
        </NavMenu2>
      )}
    </>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      
      height: 20px;
    }
    span {
      font-size: 13px;
      font-weight:bold;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  @media (max-width: 767px) {
    {
     display:none;
    }
`;

const NavMenu2 = styled.div`
  display:none;
  background: #090b13;
  align-items:center;
  flex: 1;
 justify-content:center;
 max-width:100vw;
 overflow-x: hidden;
  a {
    display: flex;
    align-items: center;
    padding: 5px 2px 15px ;
    cursor: pointer;
    margin-right:5px;
    img {
      height: 15px;
    }
    span {
      
      font-weight:bold;
      font-size: 10px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  @media (max-width: 767px) {
    {
   display:flex;
    }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index:-1;
  }
 
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const UserContainer = styled.div`
  &:hover {
    button {
      visibility: visible;
    }
  }
  button {
    position: absolute;
    right: 30px;
    top: 55px;
    border: 1px solid #f9f9f9;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    letter-spacing: 0px;
    visibility: hidden;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;
    z-index: 1;
    color: #f9f9f9;
    &:hover {
      background-color: #f9f9f9;
      color: #000;
      border-color: transparent;
    }
  }
  @media (max-width: 767px) {
   {
    position: absolute;
    right: 20px;
    top: 15px;
        }
        button {
    right: 0px;
    top: 40px;
    font-size:10px;
        }
`;
