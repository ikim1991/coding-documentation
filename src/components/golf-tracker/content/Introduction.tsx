import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex } from '../../../store/actions/ChangeViewActions';
import { AppState } from '../../../store/store';
import data from './images.json';

const Introduction = () => {

    const { index } = useSelector((state: AppState) => state.changeView);
    const dispatch = useDispatch()

    const nextImage = () => {
        let length = data.images.length
        let next = index + 1

        if(next > length - 1){
            dispatch(changeIndex(0))
        } else{
            dispatch(changeIndex(next))
        }
    }
    return(
        <div className="introduction">
            <div className="section-item">
                <h3>Project Summary</h3>
                <p>As an avid golfer struggling to improve his game, I developed this application to help visualize and keep track of my progress. The Golf Tracker application lets the user log all their rounds by the season. This data is used to keep track of the user's progress and visualizes the data. It displays a summary of the user's info on the side while the main content of the page uses pagination to navigate through 3 figures created using Chart.js.</p>
                <p>The application is deployed through GitHub Pages and Heroku. The application can be found in the link below: </p>
                <p><a href="https://ikim1991.github.io/my-golf-tracker/" target="_blank" rel="noreferrer">Deployment</a></p>
                <p>The source code is on GitHub which can be found in the links below: </p>
                <div className="repo">
                    <p><a className="repo" href="https://github.com/ikim1991/my-golf-tracker/" target="_blank" rel="noreferrer">Client Side</a></p>
                    <p><a className="repo" href="https://github.com/ikim1991/my-golf-tracker-api/" target="_blank" rel="noreferrer">Server Side</a></p>
                </div>
                <p>The client-side application is built on React using the create-react-app command. For all dependencies, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-golf-tracker/blob/master/package.json/" target="_blank" rel="noreferrer">package.json</a></span> file.</p>
                <p>The server-side application is built on Nodejs using Express. It uses MongoDB as a database service. The server uses REST APIs to communicate with the clients. For all dependencies, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-golf-tracker-api/blob/master/package.json/" target="_blank" rel="noreferrer">package.json</a></span> file.</p>
                <p>The back-end application is hosted on Heroku using its free-tier plan. This may cause the first request to the server to take a few seconds to load as the app is put to sleep after 30 minutes of inactivity.</p>
            </div>
            <div className="section-item">
                <h3>Images</h3>
                <div className="app-images">
                    <p>{`[${index + 1}/${data.images.length}] ${data.images[index].title}`}</p>
                    <p>CLICK IMAGE TO SEE NEXT</p>
                    <img className="image" src={data.images[index].url} alt="app-image" onClick={nextImage}/>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
