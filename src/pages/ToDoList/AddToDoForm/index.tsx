import React, { useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import theme, { MiniRoundedButton, MiniRoundedBorderButton, flexCustom } from '../../../styles/theme';
import type { ModalProps } from '..';
import { api } from '../../../config';

const AddToDoForm = ({ setIsAddFormOpen }: ModalProps) => {
  const [toDo, setToDo] = useState({
    title: '',
    content: '',
  });

  const changeToDoValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setToDo((state) => ({ ...state, [name]: value }));
  };

  const submitToDo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(api.todos, toDo, {
        headers: { Authorization: localStorage.getItem('token') },
      });

      if (response.statusText === 'OK') {
        setIsAddFormOpen(false);

        setToDo({
          title: '',
          content: '',
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  const closeModal = () => {
    setIsAddFormOpen(false);

    setToDo({
      title: '',
      content: '',
    });
  };

  return (
    <Modal>
      <CloseModalBtn onClick={closeModal}>
        <i className="fa-solid fa-xmark" />
      </CloseModalBtn>
      <Form onSubmit={submitToDo}>
        <TitleInput name="title" placeholder="제목을 입력하세요." onChange={changeToDoValue} value={toDo.title} />
        <ContentTextarea
          name="content"
          placeholder="내용을 입력하세요."
          onChange={changeToDoValue}
          value={toDo.content}
          wrap="hard"
        />
        <SubmitToDoBtn>
          <i className="fa-solid fa-plus" />
        </SubmitToDoBtn>
      </Form>
    </Modal>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 720px;
  height: 480px;
  transform: translate(-50%, -50%);
  background-color: ${theme.backgroundColor};
  border-radius: 16px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  z-index: 100;
`;

const CloseModalBtn = styled(MiniRoundedBorderButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  font-size: 16px;
  border: none;
`;

const Form = styled.form`
  ${flexCustom('stretch', 'flex-start', 'column')}
  padding: 48px;
`;

const InputStyle = css`
  padding: 4px;
  border: 1px solid ${theme.color.gray};
  border-radius: 4px;
`;

const TitleInput = styled.input`
  margin-bottom: 12px;
  height: 32px;
  ${InputStyle}
`;

const ContentTextarea = styled.textarea`
  height: 296px;
  ${InputStyle}
  resize: none;
`;

const SubmitToDoBtn = styled(MiniRoundedButton)`
  position: absolute;
  bottom: 24px;
  left: 50%;
  width: 48px;
  height: 48px;
  transform: translateX(-50%);
  font-size: 24px;
`;

export default AddToDoForm;