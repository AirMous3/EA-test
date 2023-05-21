import { createContext, useState } from 'react';

export const ModalContext = createContext({
  visible: false,
  setVisible: (arg) => {},
});

export const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const onSetVisibleHandler = (visible) => {
    setVisible(visible);
  };

  return (
    <ModalContext.Provider
      value={{
        visible: visible,
        setVisible: onSetVisibleHandler,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
