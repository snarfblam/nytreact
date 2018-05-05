import React from 'react';
import './Article.css';
import Col from '../Col';
// props.title
//      .summary
//      .url
const Article = props => (
    // <div className='article'>
    <Col size="12">
        <div className='card'>    
            <ul className="list-group list-group-flush">
                <li className='list-group-item article-title'>
                    <a href={props.url}>{props.title}</a>
                </li>
                <li className='list-group-item'>
                    {props.summary}
                </li>
            </ul>    
        </div>    
    </Col>
);

export default Article;