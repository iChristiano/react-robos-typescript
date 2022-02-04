import * as React from 'react';

type IScrollProps = {
  children?: JSX.Element
}

const Scroll = (props:IScrollProps) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;