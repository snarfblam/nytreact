import React from 'react';
import './Article.css';
import Col from '../Col';
import { Card, CardHead, CardBody } from '../Card';
import Fas from '../Fas';
// props.title
//      .summary
//      .url
const Article = props => (
    <Col size="12">
        <div className='card article'>    
            <CardHead>
                {props.saveButton ? 
                    <a href='#' className='article-title-button'><Fas icon='bookmark' /> Bookmark</a>
                    : null
                }
                {props.removeButton ? 
                    <a href='#' className='article-title-button'><Fas icon='minus-circle' /> Remove</a>
                    : null
                }
                {props.saved ? <Fas icon='bookmark' /> : null}
                <a href={props.url}> {props.title}</a>
            </CardHead>
            <CardBody>
                {props.summary}
            </CardBody>
        </div>    
    </Col>
);

export default Article;