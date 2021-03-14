import { createContext } from 'react';
import { initialState } from 'globalStore';

export const Context = createContext({ store: initialState });
