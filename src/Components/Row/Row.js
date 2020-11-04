import React, { useState, useEffect, useRef } from 'react';
import axios from '../../utils/axios';
import "./Row.css"
import ReactModal from "react-modal";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const MODAL_STYLE = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 0,
        backgroundColor: "rgba(20, 20, 20, 0.7)",
        zIndex: "100"
    },
    content: {
        height: "auto",
        width: "60%",
        margin: "10px auto",
        backgroundColor: "#181818",
        border: "none",
        borderRadius: "15px",
        padding: "0",
        color: "white",
    }
};



function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState({
        loading: true,
        data: []
    });

    const [movieId, setMovieId] = useState("");
    const [open, setOpen] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState("");

    const baseurl = "https://image.tmdb.org/t/p/original/"



    //Scroll to trailer when click "Watch trailer"
    const scrollTo = useRef(null);
    const scrollToTrailer = () => {
        setTimeout(() => {
            scrollTo.current.scrollIntoView({
                behavior: "smooth"
            });
        }, 1000);


    };


    //A snippet of code which runs based on a specific condition/variable
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl /*coming from props*/);
            console.log(request.data)
            setMovies({ loading: false, data: request.data.results })
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    //Youtube video trailer style(settings)
    const opts = {
        height: "500",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    };


    function handleOpen(movieId) {
        setOpen(true);
        setMovieId(movieId);
    }
    function handleClose() {
        setOpen(false);
        setMovieId("")
        setTrailerUrl("")
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || movie?.original_name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .then(() => {
                    scrollToTrailer();
                })
                .catch(error => console.log(error));

        }
    }



    return (
        <React.Fragment>
            <div className="row">
                <h2>{title}</h2>
                <div className="row__posters">
                    {!movies.loading ? (movies.data.map(movie => (

                        <img onClick={() => handleOpen(movie.id)} key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />

                    ))) : (<div className="empty__rows">
                        <div className="empty__row"></div>
                        <div className="empty__row"></div>
                        <div className="empty__row"></div>
                        <div className="empty__row"></div>
                        <div className="empty__row"></div>
                        <div className="empty__row"></div>
                    </div>)}

                </div>
            </div >

            <ReactModal
                isOpen={open}
                shouldCloseOnOverlayClick={true}
                onRequestClose={handleClose}
                style={MODAL_STYLE}
                ariaHideApp={false}
                closeTimeoutMS={300}
            >
                <div className="modal-body">
                    {movies.data.map((movie) => {
                        if (movie.id === movieId) {
                            return (<div key={movie.id}>
                                <div className="movie-img">
                                    <img key={movie.id} src={baseurl + movie.backdrop_path} alt={movie.name} />
                                    <div className="fadeBottom" />
                                    <div className="trailer-button">
                                        <button onClick={() => handleClick(movie)}>{trailerUrl ? (<>Hide Trailer</>) : (<>Watch Trailer </>)}</button>
                                    </div>

                                </div>

                                <div className="grid-details">
                                    <div className="details-left">
                                        <h2>{movie?.title || movie?.original_name}</h2>
                                        <p>{movie?.overview}</p>
                                    </div>
                                    <div className="details-right" >
                                        <h4><span>Release Date:</span> {movie?.release_date || movie?.first_air_date}</h4>
                                        <h4><span>Vote:</span> {movie?.vote_average}</h4>
                                        <h4><span>Original Language:</span> {movie?.original_language}</h4>
                                    </div>
                                </div>

                                <span className="youtube-video" ref={scrollTo}>{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}</span>
                            </div>)
                        } else {
                            return null
                        }
                    })
                    }
                    <div onClick={handleClose} className="close__icon">
                        <svg viewBox="0 0 24 24" >
                            <path d="M12 10.586l7.293-7.293 1.414 1.414L13.414 12l7.293 7.293-1.414 1.414L12 13.414l-7.293 7.293-1.414-1.414L10.586 12 3.293 4.707l1.414-1.414L12 10.586z" fill="currentColor">
                            </path>
                        </svg>
                    </div>

                </div>
            </ReactModal>
        </React.Fragment>
    )
}

export default Row
