import React from 'react';
import SectionLabel from '../components/SectionLabel';
import ArticleContainer from '../components/ArticleContainer';
import SearchPanel from '../components/SearchPanel';

// props.onSearch
//      .onSave
//      .articles
export default props => (
    <div>
        <SearchPanel onSearch={props.onSearch} />

        {props.articles.length ? <SectionLabel>Search Results</SectionLabel> : null}
            <ArticleContainer articles={props.articles} saveButton onSave={props.onSave} />
    </div>    
);