import React, {Component} from 'react';

const ContactForm =(props)=>{
    return(
        <div className="container">

            {/*Form contact*/}
            <form onSubmit={props.postform} >
                <p className="h4 text-center mb-4">Write to us</p>

                {/*input text*/}
                <div className="md-form">
                    <i className="fa fa-user prefix grey-text"></i>
                    <input type="text" id="materialFormContactNameEx" className="form-control" name="name"/>
                    <label htmlFor="materialFormContactNameEx">Your name</label>
                </div>

                {/*input email*/}
                <div className="md-form">
                    <i className="fa fa-envelope prefix grey-text"></i>
                    <input type="email" id="materialFormContactEmailEx" className="form-control" name="email"/>
                    <label htmlFor="materialFormContactEmailEx">Your email</label>
                </div>

                {/*input subject*/}
                <div className="md-form">
                    <i className="fa fa-tag prefix grey-text"></i>
                    <input type="text" id="materialFormContactSubjectEx" className="form-control" name="subject"/>
                    <label htmlFor="materialFormContactSubjectEx">Subject</label>
                </div>

                {/*textarea message*/}
                <div className="md-form">
                    <i className="fa fa-pencil prefix grey-text"/>
                    <textarea type="text" id="materialFormContactMessageEx" className="form-control md-textarea" name="message"
                              rows="3"/>
                    <label htmlFor="materialFormContactMessageEx">Your message</label>
                </div>

                <div className="text-center mt-4">
                    <button className="btn btn-outline-secondary" type="submit">Send<i
                        className="fa fa-paper-plane-o ml-2"/></button>
                </div>
            </form>
            {/*contact*/}

        </div>
    )
}

export default ContactForm;
