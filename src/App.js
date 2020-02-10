import React, { Component } from 'react';
import Head from './component/head';
import Profile from './component/profile';
import Project from './component/project';
import Skill from './component/skill';
import profileData from './data/profile';
import projectData from './data/project';
import skillData from './data/skill';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        { name: 'PROFILE' },
        { name: 'PROJECT' },
        { name: 'MYSKILL' },
      ],
      activeIndex: 0,
    };
  }
  render() {
    return (
      <div className="app">
        <div className="app-body">
          <header className="app-header">
            <Head />
            <div className="app-tab">
              <div className="tab">
                {
                  this.state.tabs.map((tab, tabIndex) => {
                    return <div className="tab-item"
                      key={tabIndex}
                      onClick={this.handleTab.bind(this, tabIndex)}
                    >{tab.name}
                      <div className={`tab-default ${this.state.activeIndex === tabIndex ? 'tab-active' : ''}`}></div>
                    </div>
                  })
                }
              </div>
            </div>
          </header>
          <div className="app-content">
            {this.state.activeIndex === 0 && <Profile data={profileData} />}
            {this.state.activeIndex === 1 && <Project data={projectData} />}
            {this.state.activeIndex === 2 && <Skill data={skillData}/>}
          </div>
        </div>
      </div>
    );
  }
  handleTab(tabIndex) {
    this.setState({
      activeIndex: tabIndex
    })
  }
}

export default App;
