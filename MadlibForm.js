import React from 'react';
import InputField from './InputField';

const MadlibForm = ({ inputs, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="madlib-form">
      <InputField name="noun" label="Noun" value={inputs.noun} onChange={handleChange} />
      <InputField name="verb" label="Verb" value={inputs.verb} onChange={handleChange} />
      <InputField name="adjective" label="Adjective" value={inputs.adjective} onChange={handleChange} />
      <InputField name="place" label="Place" value={inputs.place} onChange={handleChange} />
      <button type="submit">Create Story</button>
    </form>
  );
};

export default MadlibForm;
