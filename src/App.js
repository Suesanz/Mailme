import React, {Component} from 'react';
import './App.css';
import ContactForm from './component/form'
import axios from 'axios'

class App extends Component {
     resetForm=()=>{
        document.getElementById('contact-form').reset();
    }
    postform = (e) => {
        e.preventDefault()
        const name = e.target.elements.name.value
        const email = e.target.elements.email.value
        const message = e.target.elements.message.value
        const subject = e.target.elements.subject.value
        axios.post('/send',{
            name: name,
            email: email,
            subject: subject,
            message: message
        }).then(
            (function (response) {
                if (response.data.message === 'success') {
                    alert("Message Sent.");
                    this.resetForm()
                } else if (response.data.message === 'fail') {
                    alert("Message failed to send.")
                }
            })
        )

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Contact us</h1>
                </header>
                <ContactForm postform={this.postform}/>


            </div>
        );
    }

}

export default App;
