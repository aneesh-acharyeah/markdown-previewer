import React, { useState } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Markdown Previewer</h1>
      </header>

      <div className="content">
        <div className="editor-container">
          <textarea
            className="editor"
            placeholder="Enter Markdown here"
            value={markdown}
            onChange={handleChange}
          />
        </div>

        <div className="preview-container" dangerouslySetInnerHTML={createMarkup()} />
      </div>

      <footer className="footer">
        <p>Built with ❤️ by Aneesh G</p>
      </footer>
    </div>
  );
}

export default App;
