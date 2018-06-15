import React from 'react';
import '../styles/textEditor.css';

export default class TextInput extends React.Component{
    makeChange = (e)=>{
        this.props.changeMarkdown(e.target.value);
    }

    render() {
        return (
            <div className="editor-input">
                <textarea style={{minWidth:'100%',minHeight:'90vh'}} value={this.props.markdown} onChange={this.makeChange} autoFocus/>
            </div>
        );
    }
}