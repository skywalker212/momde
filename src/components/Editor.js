import React from 'react';
import TextInput from './TextInput';
import Preview from './Preview';
import '../styles/editor.css';

export default class Editor extends React.Component{

    changeMarkdown = (md)=>{
        this.setState({
            markdown: md
        });
    }

    componentDidMount() {
        if(sessionStorage.getItem('markdown')!=='undefined'){
            const json = JSON.parse(localStorage.getItem('markdown'));
            this.setState({
                markdown: json
            });
        }
    }

    componentDidUpdate(){
        if(this.state.markdown){
            const json = JSON.stringify(this.state.markdown);
            sessionStorage.setItem('markdown',json);
        }
    }

    constructor(){
        super();
        this.state={
            markdown:'# My Own MarkDown Editor\n\ntype something to get started'
        }
    }
    render(){
        return (
            <div className="set-grid">
                <TextInput markdown={this.state.markdown} changeMarkdown={this.changeMarkdown}/>
                <Preview markdown={this.state.markdown}/>
            </div>
        );
    }
}