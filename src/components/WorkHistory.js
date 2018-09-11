import React, {Component} from 'react'
// import Job components
import Job from './Job';

class WorkHistory extends Component {
  render() {
    // console.log('???');
    const {jobsList} = this.props
    /* receive `jobsList` array as props from App compnonent */

    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">
          { /*
              map over jobsList array and return an array of <Job/> components
              NOTE: you must pass values from the each job object
                    to the <Job> component as props...
            */
           jobsList.map((s,index)=>{
            return <Job key={index} jobsList={s} />
          })
          }
        </div>
      </section>
    )
  }
}

export default WorkHistory;
