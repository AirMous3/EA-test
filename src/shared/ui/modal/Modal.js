import { useContext } from 'react';
import { Portal } from 'react-portal';

import { ModalContext } from '@/shared';

import * as S from './components';

export const Modal = () => {
  const { setVisible, visible } = useContext(ModalContext);
  return (
    <Portal>
      <S.Mask $visible={visible} />
      {visible && (
        <S.Modal>
          <S.ModalWrapper>
            <S.Cross onClick={() => setVisible(false)} />
            <S.Title>SUCCESS!</S.Title>
            <S.Subtitle>
              You have successfully subscribed to the email newsletter
            </S.Subtitle>
            <S.CloseButton onClick={() => setVisible(false)}>
              Close
            </S.CloseButton>
          </S.ModalWrapper>
        </S.Modal>
      )}
    </Portal>
  );
};
