import React from 'react';

const MadlibStory = ({ inputs, handleReset }) => {
  return (
    <div className="madlib-story">
      <p>
        Once upon a time, in a far away <strong>{inputs.place}</strong>, there was a very <strong>{inputs.adjective}</strong> <strong>{inputs.noun}</strong> who loved to <strong>{inputs.verb}</strong>.
      </p>
      <button onClick={handleReset}>Create Another Story</button>
    </div>
  );
};

export default MadlibStory;
