import React from 'react';
import cl from './MyModal.module.css';

export default function MyModal({ children, visible, setVisible }) {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }
  return (
    // onClick={() => setVisible(false)} закрывает модалку при клике на темную область
    <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
      {/* чтобы предотвратить всплытие события (принажатии на контентную часть модалка
      теперь тоже закрывается)
      навешиваем onClick={(e) => e.stopPropagation() на контентную часть */}
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
