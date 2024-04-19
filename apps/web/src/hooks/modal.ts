import { useState } from 'react';

type TUseModalState<T = unknown> = { visible: boolean; modalData?: T | null };

export const useModal = <T = unknown>(initState?: TUseModalState<T>) => {
  const [modal, setModal] = useState<TUseModalState<T>>(
    initState || {
      visible: false,
      modalData: null,
    },
  );

  return [modal, setModal] as [TUseModalState<T>, (state: TUseModalState<T>) => void];
};
