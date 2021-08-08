import { Objective, ObjectiveWithChildren } from '../types/objective';

/**
 * @description it takes the list of objectives and transforms it into
 * a map having parent and children nodes
 * It also finds the unique list of categories from given objectives.
 * @param objectives
 * @returns {objectivesMap,categoriesList} an object containing the
 * Objectives Map and the list of unique categories
 */
const transformObjectives = (objectives: Objective[]) => {
  const map: { [key: string]: ObjectiveWithChildren } = {};
  const categorySet = new Set<string>();

  objectives.forEach((item) => {
    // add category to set
    categorySet.add(item.category);

    if (!item.parent_objective_id) {
      //   parent
      map[item.id] = { ...item, children: [] };
    } else {
      //   child
      const parent = map[item.parent_objective_id];
      if (parent) {
        parent.children.push(item);
      }
    }
  });
  return { objectivesMap: map, categoriesList: Array.from(categorySet) };
};

export { transformObjectives };
