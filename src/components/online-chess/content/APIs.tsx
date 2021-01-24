import React from 'react';

const APIs = () => {
    return(
        <div className="apis">
            <div className="section-item">
                <h3>REST APIs</h3>
                <p>This application uses Express.js on the back-end for its REST API endpoints to create and update to the database. REST APIs are used to initialize the users and create different rooms other users can join.</p>
                <div className="indent">
                    <p><strong>Method: POST, Endpoint: /create</strong></p>
                    <p>Upon creating a new room, the Client will create a unique identifier consisting of 7 random characters and a username inputted by the user. The identifier and username are sent as the request body to the Server where they are used to create a new collection on the Game Model. The new collection is then sent to the Client as the response in JSON.</p>
                </div>
                <div className="indent">
                    <p><strong>Method: POST, Endpoint: /join</strong></p>
                    <p>Each room is identified by the unique identifier when a room is created. When joining a room the identifier and username of the joining user is sent as the request body to the Server. It searches the database by the identifier and does a verification to see that the username of the host is not the same as the username of the joiner. If this returns true, the Server sends the collection to the Client. Else it sends an error.</p>
                </div>        
                <div className="indent">
                    <p><strong>Method: GET, Endpoint: /join</strong></p>
                    <p>When searching for available rooms, the Client will do a GET request to the Server. The Server will send a list of available rooms for a user to join as a response. It will first verify that the room has is available. If there are already 2 users in a room, the room is filtered from the list.</p>
                </div>
            </div>
            <div className="section-item">
                <h3>Websockets</h3>
                <p>Websockets are used for real-time and interactivity of the game play. The Socket.io library is used in this application. The event emitters listed below flows in order of what happens during a game.</p>
                <div className="indent">
                    <p><strong>Event: joinRoom, Emitter: The Client</strong></p>
                    <p>Upon entering a room, the connection is established. The Client sends the unique identifier and uses it to creates a channel using the socket.join() method. This allows the two players to have their own separate channel. This will also trigger a new event, <i>updateHostPage</i> to let the host know that a player has joined their room.</p>
                </div>
                <div className="indent">
                    <p><strong>Event: updateHostPage, Emitter: The Server</strong></p>
                    <p>When a joiner enters a room, the Client of the host must be made aware of the changes made. The updated Game document is emitted to the host Client.</p>
                </div>
                <div className="indent">
                    <p><strong>Event: exitRoom / exitRPS / exitGame, Emitter: The Client</strong></p>
                    <p>When a player exits the room, the Client of the other is made aware. The updated Game document is emitted to the other Client. If both players exit, the Game document is deleted from the database.</p>
                </div>
                <div className="indent">
                    <p><strong>Event: onExitRoomUpdate, Emitter: The Server</strong></p>
                    <p>Notifies the other user when one of the users disconnects or exits the room.</p>
                </div>
                <div className="indent">
                    <p><strong>Event: onReady, Emitter: The Client</strong></p>
                    <p>The game is on idle until both players are in the ready status. The onReady event emits that the user is ready. When both players are ready, the updateReady event is emitted to prompt the game to start.</p>
                </div>
                <div className="indent">
                    <p><strong>Event: updateReady, Emitter: The Server</strong></p>
                    <p>When both players are ready, the Clients are prompted to begin the game. The game starts will a match of Rock, Paper, Scissors to determine who goes first.</p>
                </div>
                <div className="indent">
                    <p><strong>Event: rock-paper-scissors, Emitter: The Client</strong></p>
                    <p>Emits the users selection where the logic of the game will be processed by the server and emit back a result.</p>
                </div>
                <div className="indent">
                    <p><strong>Event: results, Emitter: The Server</strong></p>
                    <p>Emits the outcome of the rock, paper, scissors. The logic between the Client and the Server is looped until there is a Winner and a Loser.</p>
                </div>
                <div className="indent">
                    <p><strong>Event: movePiece / capturePiece, Emitter: The Client</strong></p>
                    <p>The game of chess progresses as each player alternates turns moving and capturing chess pieces. When a player moves a chess piece, the Client has the logic to determine whether the move is valid and if the move involves capturing an opponents piece. Using unique identifiers and a cartesian coordinate system the move is calculated.</p>
                </div>
                <div className="indent">
                    <p><strong>Event: renderBoard, Emitter: The Server</strong></p>
                    <p>Everytime a piece is moved, the chessboard needs to be updated and is rerendered by the Client.</p>
                </div>
                <div className="indent">
                    <p><strong>Event: endGame, Emitter: The Client</strong></p>
                    <p>Upon capture, if the chess piece is a King, then the game comes to an end.</p>
                </div>
                <div className="indent">
                    <p><strong>Event: playAgain, Emitter: The Client</strong></p>
                    <p>Triggered when the game ends and resets the game and swaps player colors.</p>
                </div>
                <div className="indent">
                    <p><strong>Event: changeUp, Emitter: The Server</strong></p>
                    <p>Resets and rerenders the game from the beginning.</p>
                </div>
            </div>
            <div className="section-item">
                <h3>Database Service</h3>
                <p>For the production version, the application uses MongoDB Atlas as its database service. Mongoose is used to verify and validate data entry.</p>
                <div className="indent">
                    <p><strong>Model: Game</strong></p>
                    <p>The Game model stores data from initialization to game start. It handles the initialization and creation of the room and user. As well as handles the results of the rock, paper, scissors game. Within the Game Schema, the Player Schema exists as a subdocument.</p>
                </div>
                <div className="indent">
                    <p><strong>Model: Chessboard</strong></p>
                    <p>The Chessboard model stores and handles any data that has to do with the gameplay. The Chesspiece Schema and Player Schema exists as subdocuments within the Chessboard Schema.</p>
                </div>
            </div>
        </div>
    )
}

export default APIs;