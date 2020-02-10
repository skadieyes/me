import React, { Component } from 'react';

class Project extends Component {
    constructor() {
        super();
        this.state = {
            initShowModal: true,
            ifShowModal: false,
            project: {
                title: '',
                label: '',
                img: '',
                skills: [],
            },
        }
    }
    render() {
        return (
            <div className="project">
                <div className="project-content-title">
                    工作项目
                    </div>
                <div className="project-content">
                    {
                        this.props.data.work.map((project, index) => {
                            return <div className="project-item" key={index} onClick={this.showModal.bind(this, project)}>
                                <div className="project-img">
                                    <img className="project-img" src={project.avator} alt="avator"/>
                                </div>
                                <div className="project-title">{project.title}</div>
                            </div>
                        })
                    }
                </div>
                <div className="project-content-title">
                    My toys
                </div>
                <div className="project-content">
                    {
                        this.props.data.personal.map((project, index) => {
                            return <div className="project-item" key={index} onClick={this.showModal.bind(this, project)}>
                                <div className="project-img">

                                <img className="project-img" src={project.avator} alt="avator"/>
                                </div>
                                <div className="project-title">{project.title}</div>
                            </div>
                        })
                    }
                </div>
                <div className={`project-detail ${this.state.ifShowModal ? 'project-detail-show' : 'project-detail-hide'}`}>
                    <div className="project-close" >
                        <span className="project-close-icon project-close-icon-red" onClick={this.hideModal.bind(this)}></span>
                        <span className="project-close-icon project-close-icon-yellow" onClick={this.hideModal.bind(this)}></span>
                        <span className="project-close-icon project-close-icon-green" onClick={this.hideModal.bind(this)}></span>
                    </div>
                    <div className="project-detail-title">
                        {this.state.project.title}
                    </div>
                    <div className="project-detail-skill">
                        {
                            this.state.project.skills.map((skill, index) => {
                                return <span className="project-detail-skill-item" key={index}>{skill}</span>
                            })
                        }
                    </div>
                    <div className="project-detail-content" dangerouslySetInnerHTML={{
                        __html: `${this.state.project.label}` }}>
                    </div>
                    { this.state.project.img && <img className="project-detail-pic" src={this.state.project.img} alt="bg" border="0" />}
                </div>
            </div>
        );
    }
    showModal(project) {
        this.setState({ project, ifShowModal: true })
    }
    hideModal() {
        this.setState({ ifShowModal: false })
    }
}

export default Project;
