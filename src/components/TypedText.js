import React, { useEffect } from 'react';
import Typed from 'typed.js';

function TypedText() {
  useEffect(() => {
    
    const options = {
      strings: [
        "Hello! My name is Mayank Yadav. I am a computer engineering student at Boston University. I love understanding both software and hardware. My goal is to own my own tech startup. I aspire to learn as much as I can about software programming!"
      ],
      typeSpeed: 60, // Typing speed in milliseconds
      backSpeed: 25, // Backspacing speed in milliseconds
      backDelay: 1500, // Delay before starting to backspace
      startDelay: 500, // Delay before typing starts
      loop: true, // Loop the animation infinitely
    };

    const typed = new Typed('.typed-text', options);

    return () => {
      // Clean up the Typed instance when the component unmounts
      typed.destroy();
    };
  }, []);

  return <span className="typed-text"></span>;
}

export default TypedText;
