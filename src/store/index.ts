import { createStore, createTypedHooks } from 'easy-peasy';
import notification, { NotificationModel } from './notification';

export interface StoreModel {
  notification: NotificationModel;
}

const model: StoreModel = {
  notification,
};

const store = createStore(model);
const { useStoreActions, useStoreDispatch, useStoreState } =
  createTypedHooks<StoreModel>();
export { useStoreActions, useStoreDispatch, useStoreState };

export default store;
