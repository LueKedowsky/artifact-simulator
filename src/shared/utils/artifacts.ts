import { numbers, stats } from 'shared/constants/artifacts';
import { getRandomObjectKey } from 'shared/utils/objectUtils';
import { getRandom } from 'shared/utils/getRandom';
import { ART_NUMBERS, ART_STATS, type StatsType } from 'shared/types/artifacts';
import { shuffle } from 'shared/utils/arrayUtils';

export const generateStat = (
  stat: ART_STATS[number] = getRandomObjectKey(stats),
  type: StatsType = ART_NUMBERS.MAIN
) => ({
  [stat]: numbers[type],
});

export const generateSubsCount = () => Math.max(2, getRandom(numbers.max_subs));

export const generateArt = () => {
  const statsSet = shuffle(Object.values(stats));

  const main = generateStat(statsSet.pop());
  const subs = [];

  for (let i = 0; i < generateSubsCount(); i++) {
    subs.push(generateStat(statsSet.pop(), ART_NUMBERS.SUB));
  }

  return [main, ...subs];
};
