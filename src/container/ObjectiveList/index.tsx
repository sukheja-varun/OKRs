import React, { memo } from 'react';
import Accordion from '../../components/Accordion';
import { Objective, ObjectiveWithChildren } from '../../utils/types/objective';

import styles from './index.module.scss';

interface ObjectiveListProps {
  objectiveList: ObjectiveWithChildren[];
  onChildClick: (child: Objective) => void;
}
const ObjectiveList: React.FC<ObjectiveListProps> = (props) => {
  const { objectiveList, onChildClick } = props;

  return (
    <div className={styles.container}>
      {objectiveList.map((item) => (
        <Accordion key={item.id} title={item.title}>
          <ol type="a">
            {item.children.map((childObjective) => (
              <li
                role="presentation"
                key={childObjective.id}
                onClick={() => onChildClick(childObjective)}
                onKeyPress={(e) =>
                  e.key === 'enter' && onChildClick(childObjective)
                }
                className="pointer"
              >
                {childObjective.title}
              </li>
            ))}
          </ol>
        </Accordion>
      ))}
    </div>
  );
};
export default memo(ObjectiveList);
