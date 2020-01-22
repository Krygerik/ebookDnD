import raceData from "./raceData.js";

export const getLinks = () => ({
  title: "Расы",
  links: raceData.map(race => {
    return {
      key: race.key,
      name: race.name
    };
  })
});

export const getRaceByKey = inputKey => {
  return raceData.filter(currentRace => currentRace.key == inputKey)[0];
};
