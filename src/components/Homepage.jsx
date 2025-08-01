import React from 'react';
import millify from 'millify';
import {Typography,Row,Col,Statistic} from 'antd';
import {Link} from 'react-router-dom';
const{Title}=Typography;
import { useGetCryptosQuery } from '../services/cryptoApi';

import {Cryptocurrencies,News } from '../components';
const Homepage = ()=>{
    const { data, isFetching } = useGetCryptosQuery(10);//endpoint 
    const globalStats = data?.data?.stats;
    console.log(data);
    if(isFetching) { return 'Loading...'; };
    return(
       <>
       <Title level={5} className="heading">Global Cryto Stats</Title>
        <Row>
            <Col span={12} > <Statistic title="Total Crypotocurrencies" value={globalStats.totalCoins} /></Col>
            <Col span={12}>  <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
            <Col span={12}>  <Statistic title="Total Market cap" value={millify(globalStats.totalMarketCap)}/></Col>
            <Col span={12}> <Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)}/></Col>
            <Col span={12}>  <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
        </Row>
        <div>
        <Title level={2} className="home-heading-container">Top 10 Cryptocurrencies</Title>
        <Title level={4} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
        </div>
        <Cryptocurrencies simplified/>
        <div>
        <Title level={2} className="home-heading-container">Latest Crypto News</Title>
        <Title level={4} className="show-more"><Link to="/news">Show More</Link></Title>
        </div>
        <News simplified/>
       </>

    )
}
export default Homepage;