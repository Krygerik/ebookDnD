import classes from "./classesData";
import race from "./raceData";
import spells from "./spellsData";

const getUrlWithName = data => ({
  name: data.title,
  link: data.urlPath
});

export const getMainNavigation = () => ({
  title: "Содержание",
  urlPath: "/",
  links: [getUrlWithName(race), getUrlWithName(classes), getUrlWithName(spells)]
});

export const getRaceNavigation = () => {
  const { title, urlPath, links } = race;

  return {
    urlPath,
    title,
    isKeyNavigation: true,
    links: links.map(link => ({
      name: link.name,
      key: link.key
    }))
  };
};

export const getRaceByKey = key => {
  const { links } = race;

  console.table(key);

  return links.filter(currentRace => currentRace.key === key)[0];
};
