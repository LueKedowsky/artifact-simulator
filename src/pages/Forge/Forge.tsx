import { generateArt } from 'shared/utils/artifacts';

export const Forge = () => {
  const arts = Array.from({ length: 15 }, generateArt);
  console.log('🚀 ~ Forge ~ arts:', arts);

  return (
    <div>
      {/* {arts.map((art, i) => (
        <div key={i}>
          <span>{Object.entries(art)}</span>
          <span>{Object.entries(art)}</span>
        </div>
      ))} */}
    </div>
  );
};
