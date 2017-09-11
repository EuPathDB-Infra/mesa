import React from 'react';

const bgImage = 'https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif';
const fancy = {
  color: '#fff',
  fontWeight: 900,
  fontStyle: 'italic',
  fontSize: '0.8em',
  display: 'block',
  margin: '-40px -20px',
  padding: '20px',
  height: 'calc(100% + 50px)',
  width: 'calc(100% + 40px)',
  backgroundPosition: 'center 35%',
  backgroundImage: `url(${bgImage})`
};

const CustomSetup = {
  dataSet: {
    primary: true,
    style: { width: '20%' },
    renderCell (key, value) {
      let style = { fontWeight: 400, letterSpacing: 0 };
      return (
        <h2 style={style}>{value}</h2>
      )
    },
    renderHeading: () => {
      return (
        <div style={fancy}>
          DATA SET
        </div>
      );
    }
  },
  organism: {
    name: 'Organism',
    type: 'html',
    width: '150px'
  },
  released: { name: 'Released', width: '10%' },
  category: 'Category',
  contact: {
    name: 'Contact',
    style: { fontWeight: 'bold' }
  },
  description: {
    type: 'html',
    name: 'Description',
    width: '50%',
    maxHeight: ''
  }
};

/* Functionally the same as
[
  {
    key: 'dataSet',
    primary: true
  },
  {
    key: 'organism',
    type: 'html'
  },
  {
    key: 'category'
  }
];                       */

export default CustomSetup;
