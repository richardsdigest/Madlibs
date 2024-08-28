import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';

const Madlib = () => {
  const [inputs, setInputs] = useState({
    noun: '',
    verb: '',
    adjective: '',
    place: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setInputs({
      noun: '',
      verb: '',
      adjective: '',
      place: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="madlib-container">
      {!isSubmitted ? (
        <MadlibForm inputs={inputs} handleChange={handleChange} handleSubmit={handleSubmit} />
      ) : (
        <MadlibStory inputs={inputs} handleReset={handleReset} />
      )}
    </div>
  );
};

export default Madlib;
