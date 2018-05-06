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
import SectionLabel from './components/SectionLabel'
import Modal, { ModalState } from './components/Modal';
import Fas from './components/Fas';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';

class App extends Component {
    constructor() {
        super();

        this.state = {
            searchArticles: [],
            savedArticles: [],
            modal: new ModalState(),
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

        this.saveArticle = (article) => {
            nytReactApi
                .saveArticle(article)
                .then(result => {
                    if (result.error && result.error.includes('duplicate')) {

                        // Already saved
                        this.setState({
                            modal: this.state.modal.show('The article is already in your bookmarks.', 'Article Saved')
                        })
                    } else if (result.error) {

                        // Unknown Error
                        this.setState({
                            modal: this.state.modal.show('There was an error bookmarking the article.', 'Error')
                        })
                    } else {

                        // Success
                        var newSavedArticles = [...this.state.savedArticles, result.value];
                        this.setState({
                            savedArticles: newSavedArticles,
                            modal: this.state.modal.show('The article was added to your bookmarks', 'Article Saved')
                        });
                    }
                }).catch(err => {
                    console.log(err);
                });
        }

        this.modalRequestClose = () => {
            this.setState({ modal: this.state.modal.hide() });
        }

        this.showModal = (text, title) => {
            var newModal = this.state.modal.show(text, title);
            this.setState({ modal: newModal });
        }

        this.removeArticle = (article) => {
            nytReactApi
                .removeArticle(article._id)
                .then(result => {
                    if (result.result == 'deleted') {
                        var newArticles = this.state.savedArticles.filter(art => art._id != article._id);
                        this.setState({ savedArticles: newArticles });
                    } else {
                        this.setState({ modal: this.state.modal.show("The article couldn't be removed.", "Error") });
                    }
                }).catch(err => {
                    console.log(err);
                    this.setState({ modal: this.state.modal.show("The article couldn't be removed.", "Error") });
                });
        }
    }

    componentDidMount() {
        nytReactApi.getSavedArticles().then(articles => {
            this.setState({ savedArticles: articles });
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title"><Fas icon='newspaper' /> News Locker</h1>
                        <Link to='/'>Home</Link>
                        <Link to='/saved'>Saved</Link>
                    </header>
                    {/* <SearchPanel onSearch={this.handleSearch} />

                    {this.state.searchArticles.length ? <SectionLabel>Search Results</SectionLabel> : null}
                    <ArticleContainer articles={this.state.searchArticles} saveButton onSave={this.saveArticle} /> */}
                    <Route
                        exact path='/'    
                        render={(props) => 
                            <SearchPage {...props} onSearch={this.handleSearch} onSave={this.saveArticle} articles={this.state.searchArticles} />
                    } />
                    <Route
                        exact path='/saved'    
                        render={(props) => 
                        <SavedPage {...props} onRemove={this.removeArticle} articles={this.state.savedArticles} />
                    } />
                    {/* {this.state.savedArticles.length ? <SectionLabel>Saved Articles</SectionLabel> : null}
                    <ArticleContainer articles={this.state.savedArticles} removeButton saved onRemove={this.removeArticle} /> */}
                    {/* <SavedPage onRemove={this.removeArticle} articles={this.state.savedArticles} /> */}
                    <Modal state={this.state.modal} onRequestClose={this.modalRequestClose} />
                </div>
            </BrowserRouter>    
        );
    }
}

export default App;
