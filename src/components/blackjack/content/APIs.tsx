import React from 'react';

const APIs = () => {
    return(
        <div className="apis">
            <div className="section-item">
                <h3>REST APIs</h3>
                <p>This application uses Express.js on the back-end for its REST API endpoints.</p>
                <div className="indent">
                    <p><strong>Router</strong></p>
                    <p>Handles the sign in and sign up features of the application. It consists of 4 endpoints:</p>
                    <div className="indent">
                        <p><strong>Method: GET, Path: /</strong></p>
                        <p>This is just boilerplate code that sends the text "Server is up and running" as a response.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /signin</strong></p>
                        <p>Handles the user authentication process. Takes in a username and password in the request body and verifies if they are a match. Plain text strings are used to store and handle the password. This is bad practice and is not recommended in any means but this application is not meant to be in production.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /signup</strong></p>
                        <p>Handles the user registration. If the username is already not in use, a new user is registered into the database.</p>
                    </div>
                </div>
            </div>
            <div className="section-item">
                <h3>Websockets</h3>
                <p>Websockets are used for real-time and interactivity of the game play. The Socket.io library is used in this application. The event emitters below are separated by functionality and application state.</p>
                <div className="indent">
                    <p><strong>Logging In</strong></p>
                    <p>Based on the input selection of server, the user joins the specified channel and the user's information is updated into the database.</p>
                    <div className="indent">
                        <p><strong>Event: login, Emitter: Client</strong></p>
                        <p>After a user is authenticated through a REST API call, the user joins the specified server in login. There are total of 4 servers a user can join from. They are Server 1, Server 2, Server 3, and Server 4. The server can be identified in the URL path.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: updateUsers, Emitter: Server</strong></p>
                        <p>When a user has successfully joined a server, the Server will notify and update all the Clients within that channel that a new user has joined.</p>
                    </div>
                </div>
                <div className="indent">
                    <p><strong>Messenger</strong></p>
                    <p>Websockets are widely used for any messenger platform as it requires a bidirectional flow of data and an interactive experience.</p>
                    <div className="indent">
                        <p><strong>Event: sendMessage, Emitter: Client</strong></p>
                        <p>Sends a message to everyone in the server.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: message, Emitter: Server</strong></p>
                        <p>Distributes a user's message to everyone within a specified channel.</p>
                    </div>
                </div>
                <div className="indent">
                    <p><strong>Game Play</strong></p>
                    <p>For an interactive, real-time experience of the game, websockets are utilized to control the state and flow of the game.</p>
                    <div className="indent">
                        <p><strong>Event: seatPlayer, Emitter: Client</strong></p>
                        <p>Allows a user to occupy one of five slots available to play BlackJack, making it unavailable to others.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: unseat, Emitter: Client</strong></p>
                        <p>The user will no longer occupy the slot he was in, leaving it open for others.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: placeBet, Emitter: Client</strong></p>
                        <p>Via Drag and Drop, a player places a bet. The bets can either be classified as a normal bet, or a lucky-lucky bet. There are no limits to a bet size but the player cannot bet more than the amount in his float.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: hit, Emitter: Client</strong></p>
                        <p>Upon the player's turn, there are 3 actions available: hit, stay, and double down. On hit, the player will be dealt 1 additional card. The player can choose to keep hitting until the player busts or opts to stay.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: double, Emitter: Client</strong></p>
                        <p>Upon the player's turn, there are 3 actions available: hit, stay, and double down. On double, the player is dealt 1 additional card and the player can only receive 1 card on a double down and the turn is forfeited to the player on the left.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: stay, Emitter: Client</strong></p>
                        <p>Upon the player's turn, there are 3 actions available: hit, stay, and double down. On stay, the turn is forfeited to the player on the left until the dealer is reached.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: updateGame, Emitter: Server</strong></p>
                        <p>Any action or changes to the game state are broadcasted to all users within the server.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: logout, Emitter: Client</strong></p>
                        <p>The player is logged out and unauthenticated. Upon logging out the player is removed from the channel.</p>
                    </div>
                </div>
            </div>
            <div className="section-item">
                <h3>Database Service</h3>
                <p>No database service was used in the making of this application. All data is stored in the applications memory. Although this is not a recommended approach nor a scaleable one, the application is not meant for educational purposes and not for production.</p>
                <div className="indent">
                    <p><strong>Rooms</strong></p>
                    <p>The rooms data structure is stored in application's heap memory space. This is not good practice but is used as a demonstration.</p>
                    <p>The data consists of a list of objects. Each representing a different server. The servers are defined by a value, list of current users, and the game object and state.</p>
                    <p>Object Orientated Model is used to define the Game and Deck of Cards.</p>
                    <p>To see the data stored, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/interactive-blackjack-api/blob/master/src/utils/rooms.js/" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
                <div className="indent">
                    <p><strong>Users</strong></p>
                    <p>The users data structure is stored in application's heap memory space. This is not good practice but is used as a demonstration.</p>
                    <p>The data consists of a list of every user that are currently registered. The user is defined by a username, password, number of chips, authentication status, player number, whether the player is currently playing, whether it is currently the player's turn, and a session ID.</p>
                    <p>To see the data stored, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/interactive-blackjack-api/blob/master/src/utils/users.js/" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
            </div>
        </div>
    )
}

export default APIs;