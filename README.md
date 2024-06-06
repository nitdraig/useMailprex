<p align="center">
  <a href="https://agustin.top/">
    <img src="https://res.cloudinary.com/draig/image/upload/v1717633081/mailprex/iwzlpdbt3uclxt5mwll3.png" alt="Mailprex Logo" width="200" height="200">
  </a>
</p>

<h3 align="center">useMailprex | React Hook to MAILPREX</h3>

<p align="center">
 Send Emails from your Website with Ease
  <br>
  <a href="https://agustin.top/"><strong>Explore Mailprex docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/nitdraig/usemailprex/issues">Report bug</a>
  ·
  <a href="https://github.com/nitdraig/usemailprex/issues">Request feature</a>
  ·
  <a href="https://en.blog.agustin.top/">Creator Blog</a>
</p>

# useMailprex

`useMailprex` is a React hook for handling contact forms and sending data to a server using fetch. This hook simplifies managing the form state and server response.

## What is Mailprex?

Mailprex is a service designed to facilitate sending emails from web forms. It handles the backend processes, allowing you to focus on creating and managing your forms without worrying about the complexities of email delivery.

## Installation

First, install the package using npm:

```bash
npm install usemailprex 

```
## Usage
Here is an example of how to use useMailprex in a contact form component in a react.js application.


```bash
"use client";
import React from "react";
import useMailprex from "usemailprex";

const ContactForm = () => {
  const webName = "Mailprex Test";
  const emailDestiny = "example@example.com";
  const url = "https://send.mailprex.top/email/send";
  const formToken = "your-form-token";

  const { formData, handleChange, handleSubmit, response } = useMailprex({
    url,
    webName,
    emailDestiny,
    formToken,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label
          htmlFor="fullname"
          className="block text-gray-700 font-semibold mb-2"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Full name"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-gray-700 font-semibold mb-2"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Phone"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="service"
          className="block text-gray-700 font-semibold mb-2"
        >
          Service
        </label>
        <input
          type="text"
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Service"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 font-semibold mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          rows={4}
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300"
        >
          Send Message
        </button>
      </div>
      {response.loading && (
        <p className="mt-4 text-blue-500">Sending email...</p>
      )}
      {response.error && (
        <p className="mt-4 text-red-500">
          Error sending email: {response.error.message}
        </p>
      )}
      {response.data && (
        <p className="mt-4 text-green-500">{response.data.message}</p>
      )}
    </form>
  );
};

export default ContactForm;
```


## Example Email
### Here is an example of how the emails sent through Mailprex will appear when they arrive at the specified email address:
<div align="center">
  <a href="https://agustin.top/">
    <img src="https://res.cloudinary.com/draig/image/upload/v1717624258/mailprex/uvc7mvn49rlrpzpeq3vj.png" alt="Example Email" width="700" height="300"/>
  </a>
</div>

# API
## useMailprex

### Parameters
- **url:** The server URL to send the form data to.
- **webName:** The name of the website from which the form is being submitted.
- **emailDestiny:** The destination email address.
- **formToken:** The form token for authentication.
### Returns
- **formData:** An object containing the form data.
- **handleChange:** A function to handle changes in the form fields.
- **handleSubmit:** A function to handle form submission.
- **response:** An object containing data, loading, and error regarding the API response.

## Contributing
***Contributions are welcome. Please open an issue or a pull request for any improvements or fixes.***
