import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import ArticleContainer from './components/ArticleContainer';
import { Card, CardBody, CardHead } from './components/Card';
import { Form, Input } from './components/Form';
import SearchPanel from './components/SearchPanel';
import * as nytApi from './api/nytApi';
import * as nytReactApi from './api/nytReact';


class App extends Component {
    constructor() {
        super();

        this.state = {
            searchArticles: [],
            savedArticles: [],
        }

        this.handleSearch = (searchParams) => {
            nytApi.searchArticles(searchParams.searchTerm, searchParams.numRecords, searchParams.startYear, searchParams.endYear)
                .then(results => {
                    var searchArticles = results.map(result => ({
                        title: result.headline.main,
                        summary: result.snippet,
                        url: result.web_url,
                    }));

                    this.setState({ searchArticles });
                });
        };
    }

    componentDidMount() {
        nytReactApi.getSavedArticles().then(articles => {
            console.log(articles);
            this.setState({ savedArticles: articles });
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <SearchPanel onSearch={this.handleSearch} />

                <ArticleContainer articles={this.state.searchArticles} />
                <ArticleContainer articles={this.state.savedArticles} />
            </div>
        );
    }
}

export default App;
