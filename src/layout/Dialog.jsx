import React from "react";
import PropTypes from "prop-types";

class Dialog extends React.Component {
  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const BackgroundStyle = {
      backgroundColor: "rgba(220,220,220,0.5)",
      position: "fixed",
      top: 64,
      right: 0,
      bottom: 0,
      left: 0
    };

    const DialogStyle = {
      minWidth: 500,
      minHeight: 200,
      backgroundColor: "#fff",
      margin: "auto",
      padding: 5
    };

    const CloseBtnStyle = {
      float: "right",
      cursor: "pointer",
      display: "block"
    };

    return (
      <div style={{top: '50%', left: '50%', position: 'absolute'}}>
      <div style={BackgroundStyle, {position: "relative", width: '600px', marginLeft:'-300px', height: '600px', marginTop:'-100px'}}>
        <div style={DialogStyle}>
          <span style={CloseBtnStyle} onClick={this.props.onClose}>
            x
          </span>
          {this.props.children}
        </div>
      </div>
      </div>
    );
  }
}

Dialog.propTypes = {
  onClose: PropTypes.function,
  isOpen: PropTypes.bool,
  children: PropTypes.node
};

export default Dialog;
