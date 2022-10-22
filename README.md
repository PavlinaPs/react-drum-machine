## freeCodeCamp - Front End Development Libraries Project

# Build a Drum Machine

This is a solution to the [Build a Drum Machine](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine), third of 5 projects to earn the Front End Development Libraries certification. FreeCodeCamp's mission is to help people learn to code for free.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Fulfill the user stories and get all of the tests to pass. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project.

### Screenshot

![](./public/screenshot.jpg)

### Links

- Solution URL: https://github.com/PavlinaPs/react-drum-machine
- Live Site URL: https://pavlinaps.github.io/react-drum-machine/

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- mobile first approach

### What I learned

The biggest challenge was to connect the locally stored audio file to the App. There isn't much help on the internet. When I included a link to an online file, it worked fine. In the end I figured it out this way, although I am not sure it is correct.

```js
const bankOneData = [
  {
    key: "Q",
    code: "KeyQ",
    id: "cowbell",
    audio: require("../assets/audio/bankOne/mixkit-cowbell-sharp-hit-1743.wav"),
  },
```

I created a shared css file with custom variables and imported it to components where needed. Every component has its own css file as well. First I wanted to use Sass, but with these modular css files and in such a small project I decided against it. Of course I could have used mixins with Sass, but again, such a small project is fine without it.

```js
import React from "react";
import "../shared.css";
import "./BankSwitch.css";
```

I learned to style a button when not disabled:

```css
.switch-toggle-button:not(:disabled):hover {
  filter: drop-shadow(0.2rem 0.2rem 0.3rem var(--color-dark));
}
```

And when it is disabled:

```css
.switch-toggle-button:disabled {
  background-color: rgba(239, 239, 239, 0.3);
  color: rgba(16, 16, 16, 0.3);
}
```

### Continued development

I need to improve in React.js alone and in combination with Bootstrap & Sass customizations or Tailwind and code more complicated projects.

I would also like to code this project with Redux.

### Useful resources

- [create-react-app and Sass](https://create-react-app.dev/docs/adding-a-sass-stylesheet) - set up documentation
- [OhSnap! Sass Folder Structure For React](https://dev.to/gedalyakrycer/ohsnap-sass-folder-structure-for-react-483e)
- [React Folder Structure in 5 Steps [2022]](https://www.robinwieruch.de/react-folder-structure/)
- [how to use map in react to create multiple component?](https://stackoverflow.com/questions/69318193/how-to-use-map-in-react-to-create-multiple-component) on Stack Overflow
- [Require file with a variable in React JS](https://stackoverflow.com/questions/38374344/require-file-with-a-variable-in-react-js) on Stack Overflow
- [onKeyPress Vs. onKeyUp and onKeyDown](https://stackoverflow.com/questions/3396754/onkeypress-vs-onkeyup-and-onkeydown) on Stack Overflow
- [Creating A Custom Range Input That Looks Consistent Across All Browsers](https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/)

## Author

- Website - [My portfolio](https://pavlinaps.github.io/my-portfolio/)
- freeCodeCamp - [@pavlina1](https://www.freecodecamp.org/pavlina1)
- Frontend Mentor - [@PavlinaPs](https://www.frontendmentor.io/profile/PavlinaPs)
- Codewars - [PavlinaPs](https://www.codewars.com/users/PavlinaPs)
- Twitter - [@PPsarsky](https://www.twitter.com/PPsarsky)

## Acknowledgments

It is great that I can learn to code with freeCodeCamp. I really appreciate what they are doing for the coding community. The projects are all very useful for me. All of them. Thank you!
