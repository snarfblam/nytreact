import React from 'react';
import SectionLabel from '../components/SectionLabel';
import ArticleContainer from '../components/ArticleContainer';

// props.onRemove
//      .articles
export default props => (
    <div>
        { props.articles.length ? <SectionLabel>Saved Articles</SectionLabel> : null }
        < ArticleContainer articles={props.articles} removeButton saved onRemove={props.onRemove} />
    </div>    
)