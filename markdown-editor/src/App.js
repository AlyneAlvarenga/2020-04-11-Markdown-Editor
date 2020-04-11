import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import marked from 'marked';

class App extends Component {
  constructor() {
    super();

    this.state = {
      code: "## Code goes here",
    }
  }

  updateCode = (newCode) => {
    this.setState({
      code: newCode,
    });
  }

  rawMarkup = () => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
    })

    const rawMarkup = marked(this.state.code, {sanitize: true});

    return {
      __html: rawMarkup
    }
  }


  render() {
    const options = {
      lineNumbers: true,
      mode: 'markdown',
      viewportMargin: Infinity,
    }

    return (
      <main>
        <div className="wrapper">
          <h1 className="alignCenter">Welcome to the Markdown Editor</h1>
          <p className="alignCenter">Start typing your markdown text on the editor. See the output in HTML on the right.</p>
  
          <section>
            <div className="editorContainer">
              <h2 className="sectionTitles">Editor</h2>
              <CodeMirror value={this.state.code} onChange={this.updateCode} options={options}/>
            </div>
            <div className="outputContainer">
              <h2 className="sectionTitles">Output</h2>
              <div id="outputText" dangerouslySetInnerHTML={this.rawMarkup()}></div>
            </div>
          </section>
        </div>
      </main>
    )
  }
}

export default App;
