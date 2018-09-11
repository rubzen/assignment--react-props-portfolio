import React, { Component } from 'react';
import {skills, eduList, jobsList} from './data/datasource';


import SkillsList from './components/SkillsList'
import EducationHistory from './components/EducationHistory'
import WorkHistory from './components/WorkHistory'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SkillsList skills = {skills}/>
        <EducationHistory eduList = {eduList}/>
        <WorkHistory jobsList = {jobsList}/>
      </div>
    );
  }
}

export default App;
