import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ACCESS_TOKEN_KEY } from '../../config';
import { RoundedBorderButton } from '../../styles/theme';

const LogoutButton = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    navigate('/');
  };

  return <LogoutBtn onClick={logoutUser}>๋ก๊ทธ์์</LogoutBtn>;
};

const LogoutBtn = styled(RoundedBorderButton)`
  font-size: 14px;
`;

export default LogoutButton;
