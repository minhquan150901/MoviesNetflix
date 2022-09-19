import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowUpSquare } from "react-icons/bs";
import styled from "styled-components";
import { animateScroll as scroll } from 'react-scroll';

import MovieRow from "./MovieRow";
import useScrollY from "../hooks/useScrollY";
import { getNetfLixOriginals,
         getTrendingMovies,
         getTopRatedMovies,
         getActionMovies,
         getComedyMovies,
         getHorrorMovies,
         getRomanceMovies,
         getDocumentariesMovies
} from '../store/actions';

const ScrollToTop = () => {
    scroll.scrollToTop();
}

function Contents( props) {
    const dispatch = useDispatch();
    const [scrollY] = useScrollY();
    const { NetfLixOriginals,
            TrendingMovies,
            TopRatedMovies,
            ActionMovies,
            ComedyMovies,
            HorrorMovies,
            RomanceMovies,
            Documentaries } = useSelector(state => state.infoMovies);

    useEffect(() => {
        dispatch(getNetfLixOriginals());
        dispatch(getTrendingMovies());
        dispatch(getTopRatedMovies());
        dispatch(getActionMovies());
        dispatch(getComedyMovies());
        dispatch(getHorrorMovies());
        dispatch(getRomanceMovies());
        dispatch(getDocumentariesMovies());
    },[dispatch])

    console.log(NetfLixOriginals);
    return ( 
        <div>
            <MovieRow movies={NetfLixOriginals} title='Netflix Originals' isNetflix={true} idSection='netflix'/>
            <MovieRow movies={TrendingMovies} title='Trending Movies' idSection='trending'/>
            <MovieRow movies={TopRatedMovies} title='Top Rated Movies' idSection='topRated'/>
            <MovieRow movies={ActionMovies} title='Action Movies' idSection='actionMovies'/>
            <MovieRow movies={ComedyMovies} title='Comedy Movies' idSection='comedyMovies'/>
            <MovieRow movies={HorrorMovies} title='Horror Movies' idSection='horrorMovies'/>
            <MovieRow movies={RomanceMovies} title='Romance Movies' idSection='romanceMovies'/>
            <MovieRow movies={Documentaries} title='Documentaries Movies' idSection='documentaries'/>
            <GoToTop 
                onClick={() => ScrollToTop()}
                style={{
                    visibility:`${scrollY > 600 ? 'visible' : 'hidden'}`
                }}
            >
                <BsArrowUpSquare />
            </GoToTop>
        </div>
    );
}

export default Contents;

const GoToTop = styled.div`
    position: fixed;
    z-index: 10;
    right: 70px;
    bottom: 50px;
    font-size: 50px;
    color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s linear;

    &:hover {
        color: rgba(255, 255, 255, 0.8);
    }

    @media screen and (max-width: 600px) {
        right: 40px;
    }
`