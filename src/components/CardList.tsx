import * as React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';

interface IRobotsArray {
  robots: Array<IRobot>;
}

const CardList: React.FunctionComponent<IRobotsArray> = ({ robots }) => {
  return (
    <div>
      {
        robots.map((robot:IRobot, i:number) => {
          return (
            <Card
              key={i}
              id={robot.id}
              name={robot.name}
              email={robot.email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;