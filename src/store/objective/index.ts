import { action, Action } from 'easy-peasy';
import { Objective } from '../../utils/types/objective';

export interface ObjectiveModel {
  items: Objective[];
  set: Action<ObjectiveModel, Objective[]>;
  reset: Action<ObjectiveModel>;
}

const objective: ObjectiveModel = {
  items: [],
  set: action((state, payload) => {
    state.items = payload;
  }),
  reset: action((state) => {
    state.items = [];
  }),
};

export default objective;
