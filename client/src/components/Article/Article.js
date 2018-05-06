import React from 'react';
import './Article.css';
import Col from '../Col';
import { Card, CardHead, CardBody } from '../Card';
import Fas from '../Fas';
// props.article: {title, summary, url}
//      .saveButton
//      .onSave
//      .removeButton
//      .onRemove
const Article = props => (
    <Col size="12">
        <div className='card article'>    
            <CardHead>
                {props.saveButton ? 
                    <a href='#' className='article-title-button' onClick={(e) => doHandler(e, props.onSave, props.article)}><Fas icon='bookmark' /> Bookmark</a>
                    : null
                }
                {props.removeButton ? 
                    <a href='#' className='article-title-button' onClick={(e) => doHandler(e, props.onRemove, props.article)}><Fas icon='minus-circle' /> Remove</a>
                    : null
                }
                {props.saved ? <Fas icon='bookmark' /> : null}
                <a href={props.article.url}> {props.article.title}</a>
            </CardHead>
            <CardBody>
                {props.article.summary}
            </CardBody>
        </div>    
    </Col>
);

function doHandler(e, handler, article) {
    e.preventDefault();
    if(handler) handler(article)
}

export default Article;