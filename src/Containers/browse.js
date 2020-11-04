import React, { useContext, useState, useEffect } from 'react';
import Row from '../Components/Row/Row';
import Banner from '../Components/Banner/Banner';
import requests from '../utils/requests';
import { SelectProfileContainer } from './profiles'
import { FirebaseContext } from '../context/firebase'
import { Loading, Header } from '../Components';
import { FooterContainer } from '../Containers/footer'


export function BrowseContainer() {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    return profile.displayName ? (
        <>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : (
                    <Loading.ReleaseBody />
                )}
            <><Header bg={false}>
                <Header.Frame>
                    <Header.Logo src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
                    <Header.Group>
                        <Header.Search />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign Out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                    {/* <img style={{ maxWidth: "50px" }} src={`/images/users/${user.photoURL}.png`} alt="user" /> */}
                </Header.Frame>
            </Header>
                <Banner />
                <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchRomanceMovies} />
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Romance Movies" fetchUrl={requests.fetchNetflixOriginals} />
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
                <FooterContainer background="transparent" />

                {/* {requests.map(request =>
        <Row title={request.category} fetchUrl={request.fetch} />
      )} */}

            </>
        </>
    ) : (
            <SelectProfileContainer user={user} setProfile={setProfile} />
        );
}