import React from "react";
import PropTypes from "prop-types";
import './Modal.css';

export default class Modal extends React.Component {
    onConfirm = e => {
        this.props.onConfirm && this.props.onConfirm(e);
    };
    onCancel = e => {
        this.props.onCancel && this.props.onCancel(e);
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div id="modal">
                <div>

                    <h2>Please confirm your order</h2>
                    <div>{this.props.children}</div>
                    <div>
                        <button onClick={this.onConfirm}>
                            Confirm
          </button>
                        <button onClick={this.onCancel}>
                            Cancel
          </button>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onCancel: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};