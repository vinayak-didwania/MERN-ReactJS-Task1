import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [text, setText] = useState('');
  
  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
  };
  
  const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', color: 'black' }}>Responsive Paragraph Word Counter</h1>
      <textarea
        rows="5"
        placeholder="Enter your text here..."
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
