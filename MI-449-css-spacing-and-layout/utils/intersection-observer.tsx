import { createContext, useContext, useEffect, useRef, useState } from 'react';

const ObserverContext = createContext(null);

export const ObserverProvider = ({ children }) => {
  const observer = useObserverProvider();
  return (
    <ObserverContext.Provider value={observer}>
      {children}
    </ObserverContext.Provider>
  );
};

export const useObserver = () => {
  return useContext(ObserverContext);
};

const useObserverProvider = () => {
  const [isVisible, setVisible] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (ref.current) {
      observer.observe(ref.current);
      return () => observer.unobserve(ref.current);
    }
  }, [ref]);

  useEffect(() => {
    if (ref.current) {
      if (isVisible) {
        ref.current.classList.add('fade-in');
      } else {
        ref.current.classList.remove('fade-in');
      }
    }
  }, [isVisible]);

  return {
    ref,
    isVisible,
  };
};
