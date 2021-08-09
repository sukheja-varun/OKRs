import api from '../../utils/axios/api';
import { Objective } from '../../utils/types/objective';

export default {
  /**
   * @description it fetches all the objective from the db
   * @returns {Objective[]} List of objectives
   */
  getAll: () => api.get<{ data: Objective[] }>(''),
};
