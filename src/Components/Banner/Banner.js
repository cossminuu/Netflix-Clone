import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from '../../utils/axios';
import requests from '../../utils/requests';

function Banner() {
    const [movie, setMovie] = useState({
        loading: false,
        data: []
    });

    useEffect(() => {
        setMovie({
            loading: true,
            data: []
        })
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setTimeout(() => {
                setMovie({ loading: false, data: request.data.results[Math.floor(Math.random() * request.data.results.length - 1)] });
            }, 1500)

            return request;
        }
        fetchData();
    }, [])


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }



    return (
        <React.Fragment>
            {!movie.loading ? (<header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.data?.backdrop_path})`,
                backgroundPosition: "center center"
            }}>
                <div className="banner__contents">
                    {/* optional chaining "movie?.name etc" */}
                    <h1 className="banner__title">{movie.data?.title || movie.data?.name || movie.data?.original_name} </h1>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">
                        {truncate(movie.data?.overview, 200)}
                    </h1>
                </div>
                <div className="banner--fadeBottom" />
            </header>) :
                (<div style={{ height: "90vh", backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src="/images/misc/loading.gif" alt="loading" />
                </div>)}

        </React.Fragment>

    )
}

export default Banner
