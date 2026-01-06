import { ideasData, categoriesData } from '../data/ideasData';

export const useIdeasData = () => {
  return {
    ideas: ideasData,
    categories: categoriesData,
  };
};
