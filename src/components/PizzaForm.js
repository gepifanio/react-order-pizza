import React from 'react';
import Modal from './Modal';
import './PizzaForm.css';
class PizzaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            pizzaFlavor: '',
            comments: '',
            show: false,
            submitted: false,
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValidation() {
        const { firstName, lastName, email, pizzaFlavor } = this.state;
        let errors = {};
        let formIsValid = true;

        if (!firstName) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if (!lastName) {
            formIsValid = false;
            errors["lastName"] = "Cannot be empty";
        }

        if (!pizzaFlavor) {
            formIsValid = false;
            errors["pizzaFlavor"] = "Cannot be empty";
        }

        if (!email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof email !== "undefined") {
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    showModal = (e) => {
        if (this.handleValidation()) {
            this.setState({
                show: !this.state.show,
            });
        } else {
            alert("Form has errors.")
        }
    };

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submitted: true,
        });
    }

    render() {
        const isSubmitted = this.state.submitted;
        return (
            <div>
                {isSubmitted ? <p>
                    Your order is confirmed
                </p> : <div>
                        <form className="pizza-form">
                            <label className="pizza-form__label">
                                <div className="pizza-form__text">First Name: *</div>
                                <input
                                    className="input"
                                    type='text'
                                    name='firstName'
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    required
                                />
                                <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                            </label>
                            <label className="pizza-form__label">
                                <div className="pizza-form__text">Last Name: *</div>
                                <input
                                    className="input"
                                    type='text'
                                    name='lastName'
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    required
                                />
                                <span style={{ color: "red" }}>{this.state.errors["lastName"]}</span>

                            </label>
                            <label className="pizza-form__label">
                                <div className="pizza-form__text">Email: *</div>
                                <input
                                    className="input"
                                    type='email'
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />
                                <span style={{ color: "red" }}>{this.state.errors["email"]}</span>

                            </label>
                            <label className="pizza-form__label">
                                <div className="pizza-form__text">
                                    Pick your flavor: *
            </div>
                                <select
                                    className="select"
                                    name='pizzaFlavor'
                                    value={this.state.pizzaFlavor}
                                    onChange={this.handleChange}
                                    required
                                >
                                    <option value="">-- Select an option --</option>
                                    <option value='pepperoni'>Pepperoni</option>
                                    <option value='margherita'>Margherita</option>
                                    <option value='cheese'>Cheese</option>
                                    <option value='supreme'>Supreme</option>
                                </select>
                                <span style={{ color: "red" }}>{this.state.errors["pizzaFlavor"]}</span>
                            </label>
                            <label className="pizza-form__label">
                                <div className="pizza-form__text">Comments:</div>
                                <input
                                    className="input"
                                    type='text'
                                    name='comments'
                                    value={this.state.comments}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </form>
                        <button className="btn" onClick={(e) => {
                            this.showModal();
                        }}>Submit order</button>
                        <Modal onCancel={this.showModal} onConfirm={this.handleSubmit} show={this.state.show}>
                            <div>
                                <p>
                                    Name:
                            <span>
                                        {this.state.firstName}
                                    </span>
                                </p>
                                <p>
                                    Last name:
                            <span>
                                        {this.state.lastName}
                                    </span>
                                </p>
                                <p>
                                    Email:
                            <span>
                                        {this.state.email}
                                    </span>
                                </p>
                                <p>
                                    Pizza flavor:
                            <span>
                                        {this.state.pizzaFlavor}
                                    </span>
                                </p>
                                <p>
                                    Comments:
                            <span>
                                        {this.state.comments}
                                    </span>
                                </p>
                            </div>
                        </Modal>
                    </div>}

            </div>
        );
    }
}

export default PizzaForm;
