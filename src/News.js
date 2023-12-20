import './App.css';
import React, { useState, useEffect, Scrollable } from 'react';
import axios from 'axios';


const News = () => {
const [loading, setLoading] = useState(true); // Добавляем состояние для отслеживания состояния загрузки
const [news, setNews] = useState([]);
const fetchNews = async () => {
        try {
            const response = await axios.get('https://6583183602f747c8367b0f01.mockapi.io/news');
            setNews(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false); // После загрузки данных устанавливаем состояние загрузки в false
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

  
    if (loading) {
        return <div>Loading...</div>; // Отображаем спиннер загрузки во время загрузки данных
    }
    return (

        <div className='skroll'>
            <div className='border'>
                {news.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        
                    </div>
                    
                ))}
            </div>

        </div>
    );
    
};

export default News;
