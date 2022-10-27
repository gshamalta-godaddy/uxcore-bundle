// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useState} from 'react';
import Search from '@ux/search';
// import '@ux/search/dist/styles.css';


export default () => {
  const [value,setValue] = useState('')

  return (
    <div>
      <p>uxcore test</p>
      <Search
      id='search'
      placeholder='Enter keywords here'
      size={20}
      value={value}
      onChange={(value: string) => setValue(value)}
    />
  </div>
  );
};
