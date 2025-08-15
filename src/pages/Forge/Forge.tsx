import { generateMainStat, generateSubStat } from 'shared/utils/artifacts';

export const Forge = () => {
  const arts = [
    {
      main: generateMainStat(),
      sub: generateSubStat(),
    },
    {
      main: generateMainStat(),
      sub: generateSubStat(),
    },
    {
      main: generateMainStat(),
      sub: generateSubStat(),
    },
  ];

  return (
    <div>
      {arts.map((art, i) => (
        <div key={i}>
          <span>{Object.entries(art.main)}</span>
          <span>{Object.entries(art.sub)}</span>
        </div>
      ))}
    </div>
  );
};
