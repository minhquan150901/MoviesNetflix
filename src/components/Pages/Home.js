import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Contents from "../Contents/Contents";
import Footer from "../Footer/Footer";
import Intro from "../intro/intro";
import Menu from "../Menu/Menu";
import MoviesDetail from "../MoviesDetail/MoviesDetail";

function Home( props) {
    const { MovieDetail} = useSelector(state => state.infoMovies)
    const [ isShowMovieDetail, setIsShowMovieDetail ] = useState(false)

    useEffect(() => {
        setIsShowMovieDetail(MovieDetail ? true : false)
    },[MovieDetail])
    return (  
        <div>
            <Intro />
            <Contents />
            <Menu />
            <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail}/>
            <Footer />
        </div>
    );
}

export default Home;