import React, { useEffect, useState } from 'react';

import { useStoreActions, useStoreState } from './store';
import { Objective, ObjectiveWithChildren } from './utils/types/objective';

import styles from './App.module.scss';
import ObjectiveList from './container/ObjectiveList';
import Header from './container/Header';
import Modal from './components/Modal';

function App() {
  // store
  const { map } = useStoreState((state) => state.objective);
  const { getObjectives } = useStoreActions((actions) => actions.objective);

  // state
  const [objectiveList, setObjectiveList] = useState<ObjectiveWithChildren[]>(
    [],
  );

  const [showModal, setShowModal] = useState(false);
  const [selectedChildObjective, setSelectedChildObjective] =
    useState<Objective | null>(null);

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

  const openModal = (childObjective: Objective) => {
    setSelectedChildObjective(childObjective);
    setShowModal(true);
  };

  const getParentTitle = () => {
    if (selectedChildObjective) {
      const parent = map[selectedChildObjective?.parent_objective_id];
      return parent.title;
    }
    return '';
  };

  const getModalContent = () => {
    if (!selectedChildObjective) return null;

    return (
      <dl>
        <dt>Parent Title</dt>
        <dd>{getParentTitle()}</dd>
        {Object.entries(selectedChildObjective).map((item) => {
          const [key, value] = item;
          if (!value) return null;
          return (
            <>
              <dt>{key}</dt>
              <dd>{value}</dd>
            </>
          );
        })}
      </dl>
    );
  };

  return (
    <div className={styles.app}>
      <Header />
      <Modal
        isVisible={showModal}
        title="Objective Details"
        onClose={() => setShowModal(false)}
      >
        {getModalContent()}
      </Modal>
      <ObjectiveList objectiveList={objectiveList} onChildClick={openModal} />
    </div>
  );
}

export default App;
