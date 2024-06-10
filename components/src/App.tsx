import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

// import {
//   Modal,
//   AlertModal,
//   ConfirmModal,
//   PromptModal,
//   ButtonInterface,
// } from '@seongjinme/react-modal';

import { Modal, AlertModal, ConfirmModal, PromptModal, ButtonInterface } from './lib';

function App() {
  const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isOpenPromptModal, setIsOpenPromptModal] = useState(false);
  const [isOpenCenterModal, setIsOpenCenterModal] = useState(false);
  const [isOpenBottomModal, setIsOpenBottomModal] = useState(false);

  const MODAL_CENTER_BUTTONS: ButtonInterface[] = [
    {
      text: '동의하고 저장하기',
      style: 'primary',
      onClick: () => {
        setIsOpenCenterModal(false);
      },
    },
    {
      text: '닫기',
      style: 'secondary',
      onClick: () => {
        setIsOpenCenterModal(false);
      },
    },
  ];

  const MODAL_BOTTOM_BUTTONS: ButtonInterface[] = [
    {
      text: '동의하고 저장하기',
      style: 'primary',
      onClick: () => {
        setIsOpenBottomModal(false);
      },
    },
    {
      text: '닫기',
      style: 'transparent',
      onClick: () => {
        setIsOpenBottomModal(false);
      },
    },
  ];

  const handleSubmitFromPromptModal = (value: string) => {
    console.log(`PromptModal에서 '${value}' 값이 입력되었습니다.`);
    setIsOpenPromptModal(false);
  };

  return (
    <>
      <h1 className="page-title">@seongjinme/react-modal Module</h1>
      <p>우아한테크코스 6기 FE 미션을 위해 제작된 React 기반의 간단한 모달 컴포넌트입니다.</p>

      <h2 className="page-sub-title">타입별 모달 예시</h2>
      <div className="button-container">
        <button onClick={() => setIsOpenAlertModal(true)}>'확인' 타입 모달(AlertModal) 열기</button>
        <button onClick={() => setIsOpenConfirmModal(true)}>
          '확인/취소' 타입 모달(ConfirmModal) 열기
        </button>
        <button onClick={() => setIsOpenPromptModal(true)}>
          '입력' 타입 모달(PromptModal) 열기
        </button>

        <AlertModal
          isOpen={isOpenAlertModal}
          title="아이디를 입력해 주세요."
          width="382px"
          onClose={() => setIsOpenAlertModal(false)}
          onConfirm={() => setIsOpenAlertModal(false)}
        >
          <p>아이디는 필수로 입력해야 합니다.</p>
        </AlertModal>

        <ConfirmModal
          isOpen={isOpenConfirmModal}
          title="카드를 삭제하시겠습니까?"
          buttonsFlexDirection="row-reverse"
          onClose={() => setIsOpenConfirmModal(false)}
          onCancel={() => setIsOpenConfirmModal(false)}
          onConfirm={() => setIsOpenConfirmModal(false)}
        >
          <p>삭제하면 복구하실 수 없습니다.</p>
        </ConfirmModal>

        <PromptModal
          isOpen={isOpenPromptModal}
          size="medium"
          title="쿠폰 번호를 입력해 주세요."
          inputField={{
            name: 'promptInput',
            placeholder: '쿠폰 번호',
          }}
          buttonsFlexDirection="row-reverse"
          onClose={() => setIsOpenPromptModal(false)}
          onCancel={() => setIsOpenPromptModal(false)}
          onSubmit={(_, value: string) => handleSubmitFromPromptModal(value)}
        />
      </div>

      <h2 className="page-sub-title">위치 옵션별 모달 예시</h2>
      <div className="button-container">
        <button onClick={() => setIsOpenCenterModal(true)}>'Center' 타입 모달 열기</button>
        <button onClick={() => setIsOpenBottomModal(true)}>'Bottom' 타입 모달 열기</button>

        <Modal
          isOpen={isOpenCenterModal}
          title="Center 타입 모달 컴포넌트"
          position="center"
          hasCloseButton={true}
          buttons={MODAL_CENTER_BUTTONS}
          onClose={() => setIsOpenCenterModal(false)}
        >
          <Form>
            <InputCheckBox>
              <input
                name="checkbox-1"
                type="checkbox"
                value=""
              />
              <label htmlFor="checkbox-1">[필수] 개인정보 수집이용 동의</label>
            </InputCheckBox>
            <InputCheckBox>
              <input
                name="checkbox-2"
                type="checkbox"
                value=""
              />
              <label htmlFor="checkbox-2">[필수] 고객정보 제 3자 제공 동의</label>
            </InputCheckBox>
          </Form>
        </Modal>

        <Modal
          isOpen={isOpenBottomModal}
          title="Bottom 타입 모달 컴포넌트"
          position="bottom"
          hasCloseButton={true}
          buttons={MODAL_BOTTOM_BUTTONS}
          onClose={() => setIsOpenBottomModal(false)}
        >
          <Form>
            <InputCheckBox>
              <input
                name="checkbox-1"
                type="checkbox"
                value=""
              />
              <label htmlFor="checkbox-1">[필수] 개인정보 수집이용 동의</label>
            </InputCheckBox>
            <InputCheckBox>
              <input
                name="checkbox-2"
                type="checkbox"
                value=""
              />
              <label htmlFor="checkbox-2">[필수] 고객정보 제 3자 제공 동의</label>
            </InputCheckBox>
          </Form>
        </Modal>
      </div>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputCheckBox = styled.div`
  margin-bottom: 4px;
  text-align: left;
`;

export default App;
