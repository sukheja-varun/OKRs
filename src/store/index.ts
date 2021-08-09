import { createStore, createTypedHooks } from 'easy-peasy';
import notification, { NotificationModel } from './notification';
import objective, { ObjectiveModel } from './objective';

export interface StoreModel {
  notification: NotificationModel;
  objective: ObjectiveModel;
}

const model: StoreModel = {
  notification,
  objective,
};

const store = createStore(model);
const { useStoreActions, useStoreDispatch, useStoreState } =
  createTypedHooks<StoreModel>();
export { useStoreActions, useStoreDispatch, useStoreState };

export default store;
