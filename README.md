Etch A Sketch Grid Drawing Application

Welcome to the Etch A Sketch Grid Drawing Application! This project allows users to create a customizable grid where colors can be applied to cells either by clicking or hovering. The application also features modes to darken colors or apply random colors. Below, you'll find the features and how to set up and use the application.

Demo

A demo of the application can be found at GitHub Pages Demo.

Features

Adjustable Grid Size: Choose grid size from 1 to 100 cells.

Hover or Click Modes: Switch between hover or click to apply colors.

Darkening Mode: Gradually darken the cells when clicked.

Random Colors Mode: Each click applies a randomly generated color to a cell.

Reset Function: Clear the grid and reset settings.

Technologies Used

HTML: The structure of the web page.

CSS: Styling of elements for a visually appealing interface.

JavaScript: Logic for interactive behavior like applying colors, modes, and resetting.

Installation

To get started with the project locally, follow these steps:

Clone the repository:

git clone https://github.com/zumer45/etch-a-sketch.git

Navigate into the project directory:

cd etch-a-sketch

Open index.html in your browser to see the application in action.

Usage

Grid Size Selection: Enter the desired grid size in the input field. The valid range is from 1 to 100. The default is 16.

Mode Selection: Choose either Hover or Click for how you would like to apply color.

Darkening Mode: Click the Darkening button to activate darkening mode. Each click will gradually darken the selected cell color.

Random Colors Mode: Click the Random Colors button to apply random colors to cells upon clicking.

Reset: Click the Reset button to clear the current grid and return to the default settings.

File Structure

index.html: Main HTML page containing the structure and linked resources.

styles.css: Contains all the styling for the page, including responsive adjustments.

script.js: JavaScript code to implement grid drawing and event handling logic.

Code Overview

HTML

The main structure is defined in index.html, which includes a grid container and several buttons for user interaction:

Grid size input.

Mode selection (Hover or Click).

Buttons for reset, darkening mode, and random colors mode.

Change color input.

CSS

The styles.css file uses Flexbox for the layout and includes some responsiveness for mobile devices. The background gradient and box shadows add a visually appealing aspect to the application.

JavaScript

The JavaScript (script.js) handles user input and manages event listeners for each button and the grid itself:

Functions like drawCanvas(), handleColors(), and performReset() manage grid creation, coloring, and resetting respectively.

Modes for color application, such as darkening or random colors, are controlled based on user selection.

Responsive Design

The project includes a media query for screens with a maximum width of 768px to make sure the application remains usable on mobile devices.

How to Contribute

Feel free to contribute by forking the repository and submitting pull requests. Here are some ways you can contribute:

Fixing bugs.

Adding new features, such as a new color mode.

Improving the UI/UX.

Author

This project was created by Zaine Umer. You can connect with me on LinkedIn or check out more of my projects on GitHub.



Thank you for checking out the Etch A Sketch Grid Drawing Application! Your feedback and suggestions are greatly appreciated.

