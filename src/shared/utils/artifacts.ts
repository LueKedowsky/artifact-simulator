import { numbers, stats } from 'shared/constants/artifacts';
import { getRandomObjectKey } from 'shared/utils/objectUtils';

export const generateMainStat = () => ({
  [getRandomObjectKey(stats)]: numbers.main,
});

export const generateSubStat = () => ({
  [getRandomObjectKey(stats)]: numbers.sub,
});
