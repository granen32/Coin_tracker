import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../atom';
const NaviHome = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 20px;
  top: 20px;
  > button{
    width: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #222;
    margin-bottom:10px;
    color: #fff;
    text-align: center;
  }
`;
const ThemeButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: #222;
  margin-bottom:10px;
  color: #fff;
  text-align: center;
`;
export const Navigation = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev)
  const navigate = useNavigate();
  const onclickGohome = () =>{
    navigate("/");
  }
  const onclickGoback = () =>{
    navigate(-1);
  }
  return (
    <NaviHome>
      <button name="go" onClick={onclickGohome}>Home</button>
      <button name="back" onClick={onclickGoback}>Back</button>
      <ThemeButton onClick={toggleDarkAtom}>Dark Mode</ThemeButton>
    </NaviHome>
  )
}

export default Navigation