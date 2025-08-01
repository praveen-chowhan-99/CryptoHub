import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Spin, Button } from 'antd';
import moment from 'moment';

import './News.css';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Title,Text } = Typography;

const News = ({ simplified }) => {
  const { data, isFetching } = useGetCryptoNewsQuery();
  const newsData = data?.data || [];

  // Show only 5 articles initially, then show all when "Show More" is clicked
  const [displayedNews, setDisplayedNews] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (newsData.length > 0) {
      setDisplayedNews(simplified ? newsData.slice(0, 6) : newsData);
    }
  }, [newsData, simplified]);

  const handleShowMore = () => {
    setDisplayedNews(newsData); // Show all news articles
    setShowMore(true);
  };

  return (
    <Row gutter={[24, 24]}>
      {isFetching ? (
        <Col span={24} style={{ textAlign: 'center', marginTop: '20px' }}>
          <Spin size="large" />
        </Col>
      ) : (
        displayedNews.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>{news.title}</Title>
                  <img 
                    src={news.thumbnail || 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'} 
                    alt="news" 
                    className="news-image"
                  />
                </div>
                <p>
                  {news.description 
                    ? (news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description) 
                    : 'No description available'}
                </p>
                <Text style={{ fontSize: '12px', color: '#888' }}>
                  {news.createdAt ? moment(news.createdAt).fromNow() : ''}
                </Text>
              </a>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
};

export default News;
