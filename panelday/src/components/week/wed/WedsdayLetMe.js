// /** Reminder: do not rearange the day outside of the panelday. 
//  * Week: brief continues to be built out inside the panelday where it will depend on the nodes therein. 
//  */
// import { humpDay } from '../../Wednesday/humpDay';

// String(humpDay, "Wednesday-Let-Me"); // for Friday("Wednesday-Let-You", getPaid(payDay))... (#payouts);

// /** > Top Three TODO's (QAT_Regression);
//  * 1. paySchedge(acceptable) // b/c it was accepted by rest(Owner(branch-manager));
//  * 2. init(loader) // b/c it was accepted by local(Driver(delivery-driver));
//  * 3. loader("Wednesday-Let-Me");
//  * 4. weekly(acceptable) = payDay; 
//  */


import React from 'react';
import { Link } from 'react-router-dom';

function WedsdayLetMe() {
  return (
    <div>
    <div>Wednesday Component</div>
    <button>
      <Link to="/">Home</Link>
    </button>
    <button>
      <Link to="/thurs">Tomorrow</Link>
    </button>
    <button>
      <Link to="/tues">Yesterday</Link>
    </button>
  </div>
  )
}

export default WedsdayLetMe