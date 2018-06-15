import React from 'react'
import '../styles/preview.css';
import marked from 'marked';
import _ from 'lodash';

export default class Preview extends React.Component{
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: marked(_.unescape(this.props.markdown))}} />
        );
    }
}