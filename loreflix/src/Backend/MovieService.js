const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDY1ZjcwMWRjNTA4N2EzYWEyMDMxMDZhMTA3YjY3NiIsInN1YiI6IjY2NTRkOWQ0NzQwYTdhYmI1NGI3ZGUxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p2HevkZhTgXA7AnPgRQ-4_toyNfX75YSIbTUx67pOeg'
    }
};

const getTrendingMovies = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?page=1', options);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

export const getBestRatedMovies = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const data = await response.json()
        return data
    } catch (err) {
        console.error(err)
    }
}

export default getTrendingMovies