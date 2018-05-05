import React from 'react';
import './Article.css';
import Col from '../Col';
import { Card, CardHead, CardBody } from '../Card';

// props.title
//      .summary
//      .url
const Article = props => (
    // <div className='article'>
    // <Col size="12">
    //     <div className='card'>    
    //         <ul className="list-group list-group-flush">
    //             <li className='list-group-item article-title'>
    //                 <a href={props.url}>{props.title}</a>
    //             </li>
    //             <li className='list-group-item'>
    //                 {props.summary}
    //             </li>
    //         </ul>    
    //     </div>    
    // </Col>
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