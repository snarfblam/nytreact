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
        console.log(this.props.articles)
        return (
            <Container>
                <Row>
                    {this.props.articles.map(article => (
                        <Article
                            title={article.title}
                            summary={article.summary}
                            url={article.url}
                        />
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ArticleContainer;