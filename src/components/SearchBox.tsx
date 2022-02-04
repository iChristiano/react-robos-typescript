import * as React from 'react';

interface ISearchBox {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>):void
}

// const SearchBox = ({ searchChange }: ISearchBox) => {}
const SearchBox: React.FunctionComponent<ISearchBox> = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;