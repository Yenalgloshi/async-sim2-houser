import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Step1 from './components/Steps/Step1';
import Step2 from './components/Steps/Step2';
import Step3 from './components/Steps/Step3';
import Step4 from './components/Steps/Step4';
import Step5 from './components/Steps/Step5';


export default (
  <Switch>
    <Route exact path='/' component={ Login } />
    <Route path='/Dashboard' component={ Dashboard } />
    <Route path='/Wizard' component={ Wizard } />
    <Route path='/Step1' component={ Step1 } />
    <Route path='/Step2' component={ Step2 } />
    <Route path='/Step3' component={ Step3 } />
    <Route path='/Step4' component={ Step4 } />
    <Route path='/Step5' component={ Step5 } />
  </Switch>
)