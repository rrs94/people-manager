import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 50px;
  flex-direction: row;
  border-bottom: 1px solid black;
  background-color: black;
`;

export const Logo = styled.div`
  display: flex;
  width: 20%;
  font-size: 20px;
  color: white;
  align-items: center;
  justify-content: center;
`;

export const NavBar = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const NavItem = styled.div`
  width: 100px;
  display: flex;
  color: white;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
