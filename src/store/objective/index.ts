import { action, Action, thunk, Thunk } from 'easy-peasy';
import { StoreModel } from '..';
import api from './service';
import { Objective, ObjectiveWithChildren } from '../../utils/types/objective';
import { transformObjectives } from '../../utils/helpers/data-transform';

export interface ObjectiveModel {
  items: Objective[];
  map: { [key: string]: ObjectiveWithChildren };
  categories: string[];
  set: Action<ObjectiveModel, Objective[]>;
  reset: Action<ObjectiveModel>;
  getObjectives: Thunk<ObjectiveModel, undefined, any, StoreModel>;
}

const objective: ObjectiveModel = {
  items: [],
  map: {},
  categories: [],
  set: action((state, payload) => {
    state.items = payload;
    const { categoriesList, objectivesMap } = transformObjectives(payload);
    state.map = objectivesMap;
    state.categories = categoriesList;
  }),
  reset: action((state) => {
    state.items = [];
  }),
  getObjectives: thunk(async (actions, payload, { getStoreActions }) => {
    const setNotification = getStoreActions().notification.set;
    try {
      const result = await api.getAll();
      actions.set(result.data.data);
    } catch (err) {
      setNotification({ type: 'danger', msg: 'Failed to fetch Objectives' });
    }
  }),
};

export default objective;
