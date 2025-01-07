/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import { models } from '../db/models';
import {configuratorModel} from '../db/configurator';

const ModelContext = createContext();

export const useModels = () => {
  return useContext(ModelContext);
};

export const ModelProvider = ({ children }) => {
  const [modelList] = useState(models);
  const[configuratorModelList] = useState(configuratorModel)

  return (
    <ModelContext.Provider value={{ modelList,configuratorModelList }}>
      {children}
    </ModelContext.Provider>
  );
};
