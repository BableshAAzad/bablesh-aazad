import React, { useState } from 'react';

const WordBreak = () => {
  const passages = [
    "First passage goes herLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.e...",
    "Second passage goLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.es here...",
    "Third passagLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.e goes here...",
    // Add more passages as needed
  ];
  const maxVisibleWords = 50;

  const [hiddenPassages, setHiddenPassages] = useState(
    passages.map(() => true)
  );

  const toggleHiddenPassage = (index) => {
    setHiddenPassages((prevState) => {
      const updatedHiddenPassages = [...prevState];
      updatedHiddenPassages[index] = !updatedHiddenPassages[index];
      return updatedHiddenPassages;
    });
  };

  return (
    <div>
      {passages.map((passage, index) => (
        <div key={index}>
          <div>{hiddenPassages[index] ? passage.slice(0, maxVisibleWords) : passage}</div>
          {passage.length > maxVisibleWords && (
            <button onClick={() => toggleHiddenPassage(index)}>
              {hiddenPassages[index] ? 'Read More' : 'Read Less'}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default WordBreak;
