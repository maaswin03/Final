import React, { useState , useEffect} from 'react';

const Animal1 = () => {
    const [data , setData] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/animal')
            .then(response => response.json())
            .then(data => {
                setData();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Animal Detection</h1>
            <button>Detect Animal</button>
            {data}
        </div>
    );
};

export default Animal1
