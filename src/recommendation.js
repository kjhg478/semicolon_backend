import axios from 'axios';
const recommendKey = process.env.RECOMMEND_KEY;

export const getRecommendation = async () => { 
        try {
            const { data } = await axios.get(`http://211.41.119.208:5000/recommendation/key=${recommendKey}`);
            return data;
        } catch (e) { 
            console.log("데이터가 존재 하지 않습니다.");
            return [];
        }
}