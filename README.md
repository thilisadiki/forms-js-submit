Here is a README.md file that could be used to document the HTML and JavaScript form submission code:

# Form Submission with HTML & JavaScript

## Overview

This project contains HTML and JavaScript code to handle form submissions client-side without needing a backend server. 

The form allows users to enter their name, email, and a message. When they click submit, a JavaScript function is called which processes the form input and then displays a confirmation message on the page without reloading.

## Files

- `index.html` - Contains the HTML form code
- `script.js` - Contains the JavaScript code to handle form submission
- `styles.css` - Contains CSS styling for the page

## Features

- Form with name, email, and message inputs
- Client-side form validation for required fields
- Submit button calls JavaScript function instead of posting to server
- Form values are accessed via DOM
- Confirmation message shown on page after submit

## Setup

To view the form, simply open the `index.html` file in a browser. No web server is required since all code is client-side JavaScript.

## Form Validation

The `validateForm()` function checks that the name, email, and message fields are not empty before submitting.

## Form Submission

The `submitForm()` function is called when the submit button is clicked. It collects the form values, validates them, then shows a confirmation message by updating the DOM. No page refresh is required.

## Licensing

This code is available under the MIT license. Feel free to reuse it or modify it however you like.