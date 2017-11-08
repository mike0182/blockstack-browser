import React, { PropTypes } from 'react'

const LandingPage = (props) =>
  (
  <div>
    <img
      role="presentation"
      src="/images/blockstack-logo-vertical.svg"
      className="m-b-20"
      style={{
        width: '200px',
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '10px'
      }}
    />
    {props.webAppBuild ?
      <div>
        <h3 className="modal-heading p-b-25">Welcome to the Blockstack Browser.
        </h3>

        <p className="modal-body">
          Join the new Internet and <br />
          use apps that put you in control.
        </p>
      </div>
    :
      <div>
        <h3 className="modal-heading p-b-25">Join the new internet. <br />
          Use apps that put you in control.
        </h3>
      </div>
    }
    <div className="m-t-30 m-b-20 modal-body">
      <button className="btn btn-primary btn-block m-b-10" onClick={props.showNewInternetView}>
        Get Started
      </button>
      <a href="#" className="modal-body" onClick={props.showRestoreView}>
        Restore an existing keychain
      </a>
    </div>
  </div>
 )

LandingPage.propTypes = {
  showNewInternetView: PropTypes.func.isRequired,
  showRestoreView: PropTypes.func.isRequired,
  webAppBuild: PropTypes.bool.isRequired
}

export default LandingPage
