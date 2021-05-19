import React, {ReactElement} from "react"
import {useHistory} from "react-router-dom"
import Project from "../types/Project"

interface Props {
  project: Project
}

function ProjectListItem(props: Props): ReactElement {
  const history = useHistory()
  const project = props.project

  const progressBarClassMap = {
    'is-completed': 'success',
    'in-progress': 'warning',
    'on-hold': 'error'
  }

  const goToProjectDetails = () => {
    history.push(`/projects/${project.id}`)
  }

  return (
    <div onClick={goToProjectDetails} className="card">
      <div className="item" style={{margin: 15}}>
        <h2 className="ui image header">
          <div className="content">
            {project.title}
          </div>
        </h2>
        <div className="content">
          <table className="ui very basic celled table">
            <tbody>
              <tr>
                <td>
                  <h4 className="ui header">
                    <i className="flag outline middle aligned icon" />
                  </h4>
                </td>
                <td>
                  <div className={`ui progress ${progressBarClassMap[project.status]}`}>
                    <div className="bar" style={{width: `${project.progress}%`}}>
                      <div className="progress">{project.progress}%</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="ui header">
                    <i className="compass outline middle aligned icon" />
                  </h4>
                </td>
                <td>
                  {project.status}
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="ui header">
                    <i className="clock outline middle aligned icon" />
                  </h4>
                </td>
                <td>
                  <div className="ui relaxed divided list metadata">
                    {project.times.map(({begin, end, title}) =>
                      <div key={begin.toString()} className="item">
                        <div className="content">
                          <span className="header">
                            {title}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="ui header">
                    <i className="file image outline middle aligned icon" />
                  </h4>
                </td>
                <td>
                  <img className="ui image small" alt="" src={project.img} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProjectListItem
