
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const HomePage = () => {
    const [inputUrl, setInputUrl] = useState('');
    const navigate = useNavigate();
      const getDifference = () =>{
        let refinedUrl = inputUrl.replace('https://github.com/', '');
        navigate(`/repositories/${refinedUrl}`)
      }
    return (
        <>
            <h4> Enter github commit url</h4>
            <input type='text' onChange={(e) => setInputUrl(e.target.value)} value={inputUrl} style={{width:"98%", height:'50px', marginBottom:30}}></input>
             <button onClick={getDifference}  style={{ minHeight:40}}> Submit</button>

        </>
    );
}

export default HomePage;
