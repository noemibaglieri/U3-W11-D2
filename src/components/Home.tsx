import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

// interface HomeProps {
//   title: string;
//   author: string;
//   date: string;
//   image: string;
// }

interface Article {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  published_at: string;
  news_site: string;
}

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    const articles = "https://api.spaceflightnewsapi.net/v4/articles";

    try {
      const response = await fetch(articles);

      if (response.ok) {
        const articles = await response.json();

        setArticles(articles.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
      <Row className="gy-4">
        <h1>Latest Spaceflight News</h1>
        {articles.map((article) => (
          <Col md={6} key={article.id}>
            <Card>
              <Card.Img className="article-card" variant="top" src={article.image_url} alt={article.title} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text> {new Date(article.published_at).toLocaleDateString()}</Card.Text>
                <Card.Text>{article.summary}</Card.Text>
                <Card.Text> Source: {article.news_site}</Card.Text>
                <Button variant="primary">Read</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
