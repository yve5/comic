import React from 'react';
import Large1 from './resources/Large1.png';
import Small1 from './resources/Small1.png';
import Small2 from './resources/Small2.png';
import Small3 from './resources/Small3.png';
import Small4 from './resources/Small4.png';

const Pattern = () => (
  <div className="row">
    <div className="offset-sm-3 col-sm-6 offset-lg-0 col-lg-4 mb-cell">
      <img alt="Large" className="img-fluid" src={Large1} />
    </div>

    <div className="offset-sm-3 col-sm-6 offset-lg-0 col-lg-8">
      <div className="row">
        <div className="col-lg-6 mb-cell">
          <img alt="Small" className="img-fluid" src={Small1} />
        </div>

        <div className="col-lg-6 mb-cell">
          <img alt="Small" className="img-fluid" src={Small2} />
        </div>

        <div className="col-lg-6 mb-cell">
          <img alt="Small" className="img-fluid" src={Small3} />
        </div>

        <div className="col-lg-6 mb-cell">
          <img alt="Small" className="img-fluid" src={Small4} />
        </div>
      </div>
    </div>
  </div>
);

export default Pattern;
