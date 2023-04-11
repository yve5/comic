import React from 'react';
import Large1 from './resources/Large1.png';
import Small1 from './resources/Small1.png';
import Small2 from './resources/Small2.png';
import Small3 from './resources/Small3.png';
import Small4 from './resources/Small4.png';

const stripExample = [
  { id: 1, alt: 'Large 1', src: Large1 },
  { id: 2, alt: 'Small 1', src: Small1 },
  { id: 3, alt: 'Small 2', src: Small2 },
  { id: 4, alt: 'Small 3', src: Small3 },
  { id: 5, alt: 'Small 4', src: Small4 },
];

const Pattern = () =>
  stripExample.map(({ id, alt, src }) => (
    <div className="row" key={id}>
      <div className="offset-sm-3 col-sm-6 offset-lg-4 col-lg-4 mb-3 mb-lg-4">
        <img alt={alt} className="img-fluid" src={src} />
      </div>
    </div>
  ));

export default Pattern;
