import { createStore, createTypedHooks } from 'easy-peasy';

export interface StoreModel {}

const model: StoreModel = {};

const store = createStore(model);
const { useStoreActions, useStoreDispatch, useStoreState } =
  createTypedHooks<StoreModel>();
export { useStoreActions, useStoreDispatch, useStoreState };

export default store;
