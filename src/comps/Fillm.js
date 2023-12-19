import './film.css';

const Fillm = (props) =>{
 return(
    <div className="cardContainer">
        <div className="info">
            <div className="content">
                <div className="title">
                    <div className="poster">
                        <img src={props.poster} alt="error" />
                    </div>
                    <div className="movietitle">
                        <h2>{props.title}</h2>
                        <p className="director">{props.year}, {props.director}</p>
                        <div className="genre">
                            <p>{props.runtime}</p>
                            <p>{props.genre}</p>
                        </div>
                    </div>
                </div>
            <p className="plot">
            {props.plot}
            </p>
            </div>
            <div className="icons">
            <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill="#6e6e6d" d="M14.5 12c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3c0-.24.03-.46.09-.69l-4.38-2.3c-.55.61-1.33.99-2.21.99c-1.66 0-3-1.34-3-3s1.34-3 3-3c.88 0 1.66.39 2.21.99l4.38-2.3c-.06-.23-.09-.45-.09-.69c0-1.66 1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3c-.88 0-1.66-.39-2.21-.99l-4.38 2.3a2.666 2.666 0 0 1 0 1.38l4.38 2.3c.55-.61 1.33-.99 2.21-.99"/>
</svg>

<svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="#6e6e6d" d="M363.844 30.03C322.35 30.595 280.21 52.186 253 99.313c-41.913-117.77-236.493-76.29-232 64.5c1.226 38.39 16.562 72.577 38.875 103.657l106.47-35.5c-19.878-1.048-40.956-9.436-68.75-32.595c32.054-18.916 57.893-20.767 90.936-23.47c26.713-14.39 66.464-26.884 84.095-17.5c30.984-18.317 69.612-41.87 108.625-56.655c5.083 19.926 5.332 44.544 3.5 67.75l-10.5-14.03c-51.46 11.565-77.358 112.79-.594 70.686l10.53-16.937c1.766 15.882 3.392 30.556.002 43.78c-34.038 24.007-68.83 43.753-103.375 59.594c-17.754 15.61-52.626 65.57-62.844 108.937c19.995 20.072 34.94 39.36 40.093 58.595c20.665-77.113 240.783-175.82 236.375-316.313c-2.648-84.358-65.862-134.66-130.594-133.78zm-104.03 147.532c-13.527.067-25.784 3.437-37.158 9.094c17.228 19.24 47.604 22.858 43.03-8.937a83.043 83.043 0 0 0-5.873-.157z"/>
</svg>

<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#6e6e6d" d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M8 12a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"/>
</svg>




            </div>
        </div>
        <div className="image" 
        style = {{background: `linear-gradient(to right, rgba(17, 17, 17, 1), rgba(0, 0, 0, 0)), 
            url(${props.poster}) center/cover`}}
        ></div>
    </div>
 );
}

export const Film = Fillm;