import race from "./dictionaries/race";
import classes from "./dictionaries/classes";
import spells from "./dictionaries/spells";
import tables from "./dictionaries/tables";

const chapters = [race, classes];

const getUrlWithName = data => ({
  name: data.title,
  link: data.urlPath
});

const getChapterData = chapter => {
  const { title, urlPath, links } = chapter;

  return {
    urlPath,
    title,
    isKeyNavigation: true,
    links: links.map(link => ({
      name: link.name,
      key: link.key,
      keyProperty: link.data[0].key
    }))
  };
};

export const getMainNavigation = () => ({
  title: "Содержание",
  urlPath: "/",
  links: chapters.map(chapter => getUrlWithName(chapter))
});

export const getAllChapters = () => {
  return chapters.map(chapter => getChapterData(chapter));
};

export const getSubChapterByKey = key => {
  const subChapters = chapters.reduce((reduceLinks, chapter) => {
    return reduceLinks.concat(chapter.links);
  }, []);

  const filteredSubChapterByKey = subChapters.filter(
    subChapter => subChapter.key === key
  );

  return filteredSubChapterByKey[0];
};

export const getTableByKey = key => {
  return tables.filter(table => table.key === key)[0].data
}
