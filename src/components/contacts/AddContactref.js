import React, { Component } from 'react';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
        onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            name: this.emailInput.current.value,
            name: this.phoneInput.current.value
        }
        console.log(contact);
    };
   
    static defaultPops = {
        name: 'Fred Smith',
        email: 'fred@yahoo.com',
        phone: '777-777-7777'

    };

    render() {
       const { name, email, phone } = this.props;
        return (
         <div classname="card mb-3">
         <div className="card-header">Add Contact</div>
         <div className="card-body">
         <form onSubmit={this.onSubmit}>

          <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
          type="text"
          name="name" 
          classname="form-control form-control-lg"
          placeholder="Enter Name..."
          defaultValue={name}
          ref={this.nameInput}
          
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input 
          type="email"
          name="email" 
          classname="form-control form-control-lg"
          placeholder="EnterEmail..."
          defaultValue={email}
          ref={this.emailInput}
          
          />
          </div>

          <div className="form-group">
          <label htmlFor="name">Phone</label>
          <input 
          type="text"
          name="phone" 
          classname="form-control form-control-lg"
          placeholder="EnterPhone..."
          defaultValue={phone}
          ref={this.phoneInput}

          />
          </div>
           <input type="submit" value="Add Contact" 
           className="btn btn-light btn-block" 
           />
         </form>
         </div>
        </div>
        );
    }
}

export default AddContact;