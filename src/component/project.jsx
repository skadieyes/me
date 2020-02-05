import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div className="project">
                <div className="project-content-title">
                    工作项目
                    </div>
                <div className="project-content">
                    {
                        this.props.data.work.map((profile, index) => {
                            return <div className="project-item" key={index}>
                                <div className="project-img"></div>
                                <div className="project-title">{profile.title}</div>
                            </div>
                        })
                    }
                </div>
                <div className="project-content-title">
                    个人项目
                    </div>
                <div className="project-content">
                    {
                        this.props.data.personal.map((profile, index) => {
                            return <div className="project-item" key={index}>
                                <div className="project-img"></div>
                                <div className="project-title">{profile.title}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Project;
