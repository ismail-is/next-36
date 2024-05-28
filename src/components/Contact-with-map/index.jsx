import React, { useEffect, useState } from "react";
import appData from '../../data/app.json'
import $ from 'jquery';

const ContactWithMap = () => {
  // const [formData, setFormData] = useState({
    // Add your form fields here
    // For example: name: '', email: ''
  // });
  useEffect(() => {
  $("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxC4Gm3Ga-wuwnjCbD-1DxFsVnsMw5qI5EeS9M4Zs6jidijzHwrCwZj9K1YlbE7dPjf9Q/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Form submitted successfully")

        }
    })
})
}, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe src={appData.mapIframe}  title="myFrame"></iframe>
        </div>
        <div className="col-lg-6 form">
          <form  id="submit-form"  action="">
            <div className="messages"></div>

            <div className="controls">
              <div className="form-group">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required="required"
                />
              </div>

              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required="required"
                ></textarea>
              </div>

              <button type="submit" className="btn-curve btn-color">
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
