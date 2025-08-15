import { getRandom } from 'shared/utils/getRandom';

export const getRandomObjectKey = <T extends object>(obj: T) =>
  Object.keys(obj)[getRandom(Object.keys(obj).length)];
