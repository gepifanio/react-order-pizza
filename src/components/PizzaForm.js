import React from 'react';
import Modal from './Modal';

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
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showModal = (e) => {
        this.setState({
            show: !this.state.show,
        });
    };

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value,
        });
    }

    handleSubmit() {
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
                        <form>
                            <label>
                                <div>First Name</div>
                                <input
                                    type='text'
                                    name='firstName'
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label>
                                <div>Last Name</div>
                                <input
                                    type='text'
                                    name='lastName'
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label>
                                <div>Email</div>
                                <input
                                    type='email'
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label>
                                <div>
                                    Pick your favorite flavor:
            </div>
                                <select
                                    name='pizzaFlavor'
                                    value={this.state.pizzaFlavor}
                                    onChange={this.handleChange}
                                >
                                    <option value='pepperoni'>pepperoni</option>
                                    <option value='margherita'>margherita</option>
                                    <option value='cheese'>cheese</option>
                                    <option value='supreme'>supreme</option>
                                </select>
                            </label>
                            <label>
                                <div>Comments</div>
                                <input
                                    type='text'
                                    name='comments'
                                    value={this.state.comments}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </form>
                        <button onClick={(e) => {
                            this.showModal();
                        }}>Submit order</button>
                        <Modal onCancel={this.showModal} onConfirm={this.handleSubmit} show={this.state.show}>

                            <p>
                                Name:
            {this.state.firstName}
                            </p>
                            <p>
                                Last name:
            {this.state.lastName}
                            </p>
                            <p>
                                Email:
            {this.state.email}
                            </p>
                            <p>
                                Pizza flavor:
            {this.state.pizzaFlavor}
                            </p>
                            <p>
                                Comments:
            {this.state.comments}
                            </p>
                        </Modal>
                    </div>}

            </div>
        );
    }
}

export default PizzaForm;
