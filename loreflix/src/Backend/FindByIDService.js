const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDY1ZjcwMWRjNTA4N2EzYWEyMDMxMDZhMTA3YjY3NiIsInN1YiI6IjY2NTRkOWQ0NzQwYTdhYmI1NGI3ZGUxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p2HevkZhTgXA7AnPgRQ-4_toyNfX75YSIbTUx67pOeg'
    }
}

const getResultByID = async (id) => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/find/external_id?external_source=' + id, options);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

export default getResultByID