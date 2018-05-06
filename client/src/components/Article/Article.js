import React from 'react';
import './Article.css';
import Col from '../Col';
import { Card, CardHead, CardBody } from '../Card';

// props.title
//      .summary
//      .url
const Article = props => (
    <Col size="12">
        <Card>    
            <CardHead>
                <a href={props.url}>{props.title}</a>
            </CardHead>
            <CardBody>
                {props.summary}
            </CardBody>
        </Card>    
    </Col>
);

export default Article;