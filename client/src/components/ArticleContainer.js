import React from 'react';
import Container from './Container';
import Row from './Row';
import Article from './Article';
// import Col from './Col';



class ArticleContainer extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     articles: props.articles,
        // };
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.props.articles.map(article => (
                        <Article
                            // title={article.title}
                            // summary={article.summary}
                            // url={article.url}
                            key={article.url}
                            article={article}
                            saveButton={this.props.saveButton}
                            removeButton={this.props.removeButton}
                            saved={this.props.saved}
                            onSave={this.props.onSave}
                        />
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ArticleContainer;