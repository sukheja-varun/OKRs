import React, { useEffect, useState } from 'react';

import { useStoreActions, useStoreState } from './store';
import { ObjectiveWithChildren } from './utils/types/objective';

import styles from './App.module.scss';
import ObjectiveList from './container/ObjectiveList';
import Header from './container/Header';

function App() {
  // store
  const { map } = useStoreState((state) => state.objective);
  const { getObjectives } = useStoreActions((actions) => actions.objective);

  // state
  const [objectiveList, setObjectiveList] = useState<ObjectiveWithChildren[]>(
    [],
  );

  /**
   * fetch all objectives
   */
  useEffect(() => {
    getObjectives();
  }, []);

  /**
   * create and set list of parent objective on change of objectives map
   */
  useEffect(() => {
    const list = Object.values(map);
    setObjectiveList(list);
  }, [map]);

  return (
    <div className={styles.app}>
      <Header />
      <ObjectiveList objectiveList={objectiveList} />
    </div>
  );
}

export default App;
