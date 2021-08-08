import React, { memo } from 'react';
import Accordion from '../../components/Accordion';
import { ObjectiveWithChildren } from '../../utils/types/objective';

// import styles from'./index.module.scss';

interface ObjectiveListProps {
  objectiveList: ObjectiveWithChildren[];
}
const ObjectiveList: React.FC<ObjectiveListProps> = (props) => {
  const { objectiveList } = props;
  return (
    <div>
      {objectiveList.map((item) => (
        <Accordion key={item.id} title={item.title}>
          <ol type="a">
            {item.children.map((childObjective) => (
              <li key={childObjective.id}>{childObjective.title}</li>
            ))}
          </ol>
        </Accordion>
      ))}
    </div>
  );
};
export default memo(ObjectiveList);
