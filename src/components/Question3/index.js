import Markdown from 'markdown-to-jsx';
import React, { useState, useEffect } from 'react';

import mdPath from './index.md';

import './index.css';
import 'github-markdown-css/github-markdown-light.css';

function Question3() {
  const [mdString, setMdString] = useState('');

  useEffect(() => {
    fetch(mdPath)
      .then((res)=> res.text())
      .then((text)=> setMdString(text));
  }, []);

  return (
    <div className='markdown-body'>
      <Markdown children={mdString} />
    </div>
  );
}

export default Question3;
