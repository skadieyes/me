import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                {
                    this.props.data.map((profile, index) => {
                        return <div className="profile-item" key={index}>
                            <div className="profile-title">{profile.title}</div>
                            <div className="profile-label">{profile.label}</div>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default Profile;
