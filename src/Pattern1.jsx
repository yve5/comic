import React from 'react';
import Large1 from './resources/Large1.png';
import Small1 from './resources/Small1.png';
import Small2 from './resources/Small2.png';
import Small3 from './resources/Small3.png';
import Small4 from './resources/Small4.png';

const Pattern = () => (
  <div className="row">
    <div className="col-md-4 mb-4 mb-md-0">
      <img alt="Large" className="img-fluid" src={Large1} />
    </div>
    <div className="col-md-8">
      <div className="row mb-md-4">
        <div className="col-md-6 mb-4 mb-md-0">
          <img alt="Small" className="img-fluid" src={Small1} />
        </div>
        <div className="col-md-6 mb-4 mb-md-0">
          <img alt="Small" className="img-fluid" src={Small2} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          <img alt="Small" className="img-fluid" src={Small3} />
        </div>
        <div className="col-md-6 mb-4 mb-md-0">
          <img alt="Small" className="img-fluid" src={Small4} />
        </div>
      </div>
    </div>
  </div>
);

export default Pattern;
