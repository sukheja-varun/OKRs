import { action, Action } from 'easy-peasy';
import { Notification } from '../../utils/types/notification';

export interface NotificationModel {
  item: Notification | null;
  set: Action<NotificationModel, Notification>;
  reset: Action<NotificationModel>;
}

const notification: NotificationModel = {
  item: null,
  set: action((state, payload) => {
    state.item = payload;
  }),
  reset: action((state) => {
    state.item = null;
  }),
};

export default notification;
