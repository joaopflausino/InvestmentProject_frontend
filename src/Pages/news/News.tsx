import React, { useEffect, useState, ReactNode } from "react";
import { Container, Typography, Link, Box, Card, CardMedia, CardContent } from "@mui/material";

interface Article {
  url: string;
  urlToImage: string;
  title: string;
  description: string;
}

function News() {
  const [value, setValue] = useState<ReactNode>("");

  async function APIGET() {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=financeiro&apiKey=572353a32aed49179c9463f5eee0e609"
      );
      const result = await response.json();
      const filteredArticles: Article[] = result.articles
          .filter((article: Article) => article.title !== '[Removed]');
      console.log(filteredArticles);
      const news = filteredArticles.map((noticia: Article) => (
        <Link href={noticia.url} underline="none" target="_blank" color="inherit" key={noticia.url} sx={{ mb: 2, width: '65%', textDecoration: 'none' }}>
          <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(234, 234, 234, 0.531)', border: '1px solid rgb(216, 214, 214)', transition: 'transform .2s', '&:hover': { backgroundColor: '#00000021', fontWeight: 600, transform: 'scale(1.1)' } }}>
            <CardMedia component="img" image={noticia.urlToImage} alt={noticia.title} sx={{ width: '20vw', height: '25vh' }} />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
              <Typography variant="h5" component="div" fontWeight="700">{noticia.title}</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>{noticia.description}</Typography>
            </CardContent>
          </Card>
        </Link>
      ));

      setValue(news);
    } catch (error) {
      console.error("Error fetching news articles:", error);
    }
  }

  useEffect(() => {
    APIGET();
  }, []);

  return (
    <>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" component="h3" sx={{ mt: '6vh', mb: '3vh', textAlign: 'center', fontWeight: 800 }}>News</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          {value}
        </Box>
      </Container>
    </>
  );
}

export default News;
