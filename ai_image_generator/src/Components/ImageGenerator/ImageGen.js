import React, { useRef, useState } from 'react';
import './ImageGen.css';
import default_img from '../Assets/AI2.jpg';

export default function ImageGen() {
    const [imgUrl, setImgUrl] = useState("/");
    // const API_KEY = "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";
    const API_KEY = "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";
    let inputRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const imgGen = async () => {
        if (inputRef.current.value === "") {
            return 0
        }
        setLoading(true)
        const res = await fetch("https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: "Bearer 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",
                    Authorization: "Bearer " + API_KEY,
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n: 1,
                    size: "512x512"
                }),
            }
        );
        let data = await res.json();
        console.log(data);
        let data_array = data.data;
        setImgUrl(data_array[0].url);
        setLoading(false)
    }
    return (
        <div className='ai_image_generator'>
            <div className='header'>AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="img">
                    <img src={imgUrl === "/" ? default_img : imgUrl} alt="" />
                    <div className="loading">
                        <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
                        <div className={loading ? "loading-txt" : "display-none"}>Loading....</div>
                    </div>
                </div>
            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className='search-input' placeholder='Describe what you want to see' />
                <div className="generate-btn" onClick={() => { imgGen() }}>
                    Generate
                </div>
            </div>
        </div>
    )
}
