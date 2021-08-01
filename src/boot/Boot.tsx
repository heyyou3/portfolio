import React from 'react';
import { useEffect } from 'react';
import {useState} from 'react';
import './Boot.css';

const bootMessages = [
  'Welcome to heyyou Portfolio!',
  '...',
  'Start Boot',
  '...',
  '...',
  'Set heyyou Profile',
  'Set GitHub User  heyyou3',
  'Set Qiita User hey1you1',
  '...',
  '...',
  '...',
  'Running heyyou Portfolio!',
];

const Boot: React.FC = () => {
  const [displayMessages, setDisplayMessages] = useState<String[]>([]);
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if  (bootMessages.length === cnt) {
        clearInterval(id);
      }
      if (bootMessages.length !== cnt)  {
        setCnt(c => c + 1);
        setDisplayMessages(dm => {
          return [...dm, bootMessages[cnt]];
        });
      }
    }, 300);
    return () => clearInterval(id);
  }, [cnt]);


  return (
    <div className="boot">
      {
        displayMessages.map((msg, i) => (
          <div key={i.toString()}>{msg}</div>
        ))
      }
    </div>
  );
};

export default Boot;