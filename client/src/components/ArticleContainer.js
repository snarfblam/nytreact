import React from 'react';
import Container from './Container';
import Row from './Row';
import Article from './Article';
// import Col from './Col';



class ArticleContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            articles: [
                {
                    title: "TItle",
                    summary: "summery",
                    url: "#"
                }
            ],
        };
    }

    render(props) {
        return (
            <Container>
                <Row>
                    {this.state.articles.map(article => (
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