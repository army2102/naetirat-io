import React from 'react';
import './ControlPanel.css';
import { isEmpty } from '../../../util/isEmpty';
import { connect } from 'react-redux';
import { initProfile, deleteProfile } from '../../../actions/index';

import Button from '../../util/Button/Button';
import FlashMessage from '../../util/FlashMessage/FlashMessage';
import ContentCenter from '../../util/ContentCenter/ContentCenter';

class ControlPanel extends React.Component {
  onInitProfile = () => {
    this.props.initProfile();
  };

  onDeleteProfile = () => {
    this.props.deleteProfile();
  };

  render() {
    let feedbackMessage = null;
    if (!isEmpty(this.props.errorMessage)) {
      feedbackMessage = (
        <FlashMessage
          className="feedback-message"
          error
          message={this.props.errorMessage.data}
        />
      );
    } else if (this.props.profile.hasOwnProperty('message')) {
      feedbackMessage = (
        <FlashMessage
          className="feedback-message"
          message={this.props.profile.message}
        />
      );
    }

    return (
      <main className="control-panel">
        <ContentCenter>
          <h1>CONTROL PANEL</h1>
          {feedbackMessage}
          <div className="button-wraper">
            <Button onClick={this.onInitProfile} text="Initialize Profile" />
            <Button onClick={this.onDeleteProfile} text="Delete Profile" />
          </div>
        </ContentCenter>
      </main>
    );
  }
}

const mapStateToProps = ({ profile, errorMessage }) => {
  return {
    profile,
    errorMessage
  };
};

export default connect(
  mapStateToProps,
  { initProfile, deleteProfile }
)(ControlPanel);
