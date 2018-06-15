import React from 'react';
import '../styles/textEditor.css';

export default class TextInput extends React.Component{
    makeChange = (e)=>{
        this.props.changeMarkdown(e.target.value);
    }

    render() {
        return (
            <div className="editor-input">
                <textarea style={{minWidth:'100%'}} value={this.props.markdown?this.props.markdown:''} onChange={this.makeChange} autoFocus/>
            </div>
        );
    }
}