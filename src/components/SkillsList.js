import React, {Component} from 'react';
// import Skill component
import Skill from './Skill';

class SkillsList extends Component {
  render() {
    const {skills} = this.props
    return (
      /* receive `skills` array as props from App compnonent */
      <section>
        <h4>Skills</h4>
        <div className="skills-list">

          { /*
              map over skills array and return an array of <Job/> components
              NOTE: you must pass the string value to the <Skills> component as props...
            */
           skills.map((s,index)=>{
            return <Skill key={index} skill={s} />
          })
          }
        </div>
      </section>
    )
  }
}

export default SkillsList;
