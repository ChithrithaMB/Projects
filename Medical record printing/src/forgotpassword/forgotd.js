import React from 'react';
import './password.css';
import { Link } from 'react-router-dom';


class Forgotd extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
    

    }

    submituserRegistrationForm(e) {
      console.log(this.validateForm());
      
      e.preventDefault();
      if (this.validateForm()) {
           console.log(this.state);
           let fields = {}; 
      
         fields["password"] = "";
           this.setState({fields:fields});
        console.log(this.state);
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/)) {
          formIsValid = false;
          errors["password"] = "*Your Password must contain more than 8 letters including symbols.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
      <div className='f5'>
    <div id="main5">
     <div id="r5">
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        
            <h4>Enter your New password</h4>
      
          
        <br></br>
        <label id='pass5'> Enter New Password:</label>
        <br></br>
        <br></br>
        <input type="text" name="New PassWORD" placeholder="Enter your NewPassWord" value={this.state.fields.password} onChange={this.handleChange}/>
        <div className="errorMsg">{this.state.errors.password}</div>
        <label id='pass5'>Confirm NewPassword:</label>
        <br></br>
        <br></br>
        <input type="password" name="password"placeholder="Confirm your NewPassword" value={this.state.fields.password} onChange={this.handleChange}/>
        <div className="errorMsg">{this.state.errors.password}</div>
        
        </form>
        <div  className='bu6'>
       <button className='bu7'><center><div className='bu5'> <Link to='/Login'><h4 className="blue">Submit</h4></Link></div></center></button>
       </div>
    </div>
</div>
</div>
      );
  }


}

export default Forgotd;