import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Typography } from '@mui/material';

type Article = {
  url: string;
  urlToImage: string;
  title: string;
};

const NewsCarousel: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=financeiro&apiKey=572353a32aed49179c9463f5eee0e609'
        );
        const result = await response.json();
        const filteredArticles: Article[] = result.articles
          .filter((article: Article) => article.title !== '[Removed]')
          .slice(0, 3);
        setNews(filteredArticles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Carousel>
      {news.map((article, index) => (
        <Paper 
          key={index} 
          sx={{ 
            padding: 2, 
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ width: '100%', height: 200, overflow: 'hidden', marginBottom: 2 }}>
              <img
                src={article.urlToImage}
                alt={article.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {article.title}
            </Typography>
          </a>
        </Paper>
      ))}
    </Carousel>
  );
};

export default NewsCarousel;
