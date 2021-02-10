import React from 'react';

const APIs = () => {
    return(
        <div className="apis">
            <div className="section-item">
                <h3>REST APIs</h3>
                <p>This application uses Express.js on the back-end for its REST API endpoints to create and update to the database. REST APIs are used to initialize the users and create different rooms other users can join.</p>
                <div className="indent">
                    <p><strong>Game Router</strong></p>
                    <p>The Game Router focuses on the users ability to create or join a game. It consists of 4 endpoints:</p>
                    <div className="indent">
                        <p><strong>Method: GET, Path: /</strong></p>
                        <p>This is just boilerplate code that sends the text "Server is up and running..." as a response.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /create</strong></p>
                        <p>Upon creating a new room, the Client will create a unique identifier consisting of 7 random characters and a username inputted by the user. The identifier and username are sent as the request body to the Server where they are used to create a new document in the Game collection. The new document is then sent to the Client as the response in JSON.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: GET, Path: /join</strong></p>
                        <p>When searching for available rooms, the Client will do a GET request to the Server. The Server will send a list of available rooms from the Game collection as a response. It will first verify that the room is not fully occupied. If there are already 2 users in a room, the room is filtered from the list.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /join</strong></p>
                        <p>Each room is identified by the unique identifier when a room is created. When joining a room, the identifier and username of the requester is sent as the request body to the Server. It searches the database by the identifier and does a verification to see that the username is not already in use. If this returns true, the Server sends the collection to the Client. Else it sends an error.</p>
                    </div>
                </div>
            </div>
            <div className="section-item">
                <h3>Websockets</h3>
                <p>Websockets are used for real-time and interactivity of the game play. The Socket.io library is used in this application. The event emitters below are separated by functionality and application state.</p>
                <div className="indent">
                    <p><strong>Joining a Room</strong></p>
                    <p>Creating a game is handled by REST APIs. Websocket was used as a bidirectional flow of data was required for this process. Once the Joiner successfully enters a room, the server must notifiy and update the Host client.</p>
                    <div className="indent">
                        <p><strong>Event: joinRoom, Emitter: Client</strong></p>
                        <p>Upon entering a room, the connection is established. The unique identifier issued by the client is used create an arbitrary channel for the 2 specific clients in the room. This will also trigger a new event, updateHostPage to update the host client.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: updateHostPage, Emitter: Server</strong></p>
                        <p>When a player enters a room, the Host Client is notified and the state is updated.</p>
                    </div>
                </div>
                <div className="indent">
                    <p><strong>Ready</strong></p>
                    <p>The state of each player are controlled by websockets. When the state of both players are in the ready state, the server will initiate and emit a new game state to both clients.</p>
                    <div className="indent">
                        <p><strong>Event: onReady, Emitter: Client</strong></p>
                        <p>The game is on idle until both players are in the ready state. When both players are ready, the updateReady event is emitted to prompt the game to start.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: updateReady, Emitter: Server</strong></p>
                        <p>When both players are ready, the Clients are prompted to begin the game. The game starts will a match of Rock, Paper, Scissors to determine who goes first.</p>
                    </div>
                </div>
                <div className="indent">
                    <p><strong>Rock, Paper, Scissors!</strong></p>
                    <p>Once the game is initiated, a game of rock, paper, scissors will determine who goes first.</p>
                    <div className="indent">
                        <p><strong>Event: rock-paper-scissors, Emitter: Client</strong></p>
                        <p>Emits the users selection where the logic of the game will be processed by the server and emit back a result.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: results, Emitter: Server</strong></p>
                        <p>Emits the outcome of the rock, paper, scissors. The logic between the Client and the Server is looped until there is a Winner and a Loser.</p>
                    </div>
                </div>
                <div className="indent">
                    <p><strong>Chess</strong></p>
                    <p>The game of chess progresses as each player alternates turns moving pieces to capture the King.</p>
                    <div className="indent">
                        <p><strong>Event: movePiece & capturePiece, Emitter: Client</strong></p>
                        <p>A chess logic script on Client will verify that the move is a legal one. Additional logic is in place to determine whether the chesspiece will occupy an empty space or it will capture an existing piece of the opponent. After the 2 step verification by the Client, this will emit an event to the Server to rerender the chessboard setup.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: renderBoard, Emitter: Server</strong></p>
                        <p>When a player moves a chesspiece, the chessboard and chesspiece setups are rerender every turn.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: endGame, Emitter: Client</strong></p>
                        <p>Upon capture, if the chess piece is a King, then the game comes to an end.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: playAgain, Emitter: Client</strong></p>
                        <p>If no player disconnects from the room, the game will reset after a few seconds.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: changeUp, Emitter: Server</strong></p>
                        <p>Resets and rerenders the game from the beginning. Player will alternate colors every change up.</p>
                    </div>
                </div>
                <div className="indent">
                    <p><strong>Exiting</strong></p>
                    <p>When a player disconnects, the opposing player's Client must be notified and updated.</p>
                    <div className="indent">
                        <p><strong>Event: exitRoom, Emitter: Client</strong></p>
                        <p>When a player exits from the Queue status, this makes the room available to other players. If both players exit, the room no longer exists.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: exitRPS, Emitter: Client</strong></p>
                        <p>Both players must make a selection but in the instance of a player disconnecting or exiting, the Client of the opposition is notified and updated.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: exitGame, Emitter: Client</strong></p>
                        <p>The game will remain idle until the player makes a move. In the instance of a player disconnecting or exiting, the Client of the opposition is notified and updated.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Event: onExitRoomUpdate, Emitter: Server</strong></p>
                        <p>Notifies and updates the other user's Client when one of the users disconnects or exits the room.</p>
                    </div>
                </div>
            </div>
            <div className="section-item">
                <h3>Database Service</h3>
                <p>For the production version, the application uses MongoDB Atlas as its database service. Mongoose is used to verify and validate data entry.</p>
                <div className="indent">
                    <p><strong>Game Model</strong></p>
                    <p>Stores data from initialization to game start. It handles the initialization and creation of the room and user. As well as handles the results of the rock, paper, scissors game.</p>
                    <p>Collection consisting of the unique identifier generated by the Client, user host, user joiner, and the state of the game. The host and joiner are a subdocument of Player.</p>
                    <p>The Player Schema consists of a collection of a username, ready state of player, color of chesspiece, hand selection of rock-paper-scissors, and result of the rock-paper-scissors.</p>
                    <p>The instances for creating a room, joining a room, the rock, paper, scissors, and exitting a room is handled through the Game Schema.</p>
                    <p>To see the documentation of the Game schema, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/online-chess-api/blob/main/src/models/game.ts/" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
                <div className="indent">
                    <p><strong>Chessboard Model</strong></p>
                    <p>The Chessboard model stores and handles any data that has to do with the gameplay.</p>
                    <p>Collection consisting of the unique identifier generated by the Client, a list of columns and rows to create a chessboard using Cartesian coordinates, a list of occupied squares in the chessboard by which chesspieces, a subdocument of chesspieces, a subdocument of a list of players, whether the game is at a checkmate, and whether the game should reset.</p>
                    <p>The subdocument of a chesspiece includes an instance of each individual chesspiece, which includes: an id, type of chesspiece or the rank, the color, its position on the board, its Cartesian coordinate on the board, if the piece been initially moved, and if the piece is still in play.</p>
                    <p>The subdocument of a player includes a list of 2 players. Each player consists of a username, the players ready state, the color the player is playing as, if it is currently the player's turn, and whether the player is checked.</p>
                    <p>To see the documentation of the Chessboard schema, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/online-chess-api/blob/main/src/models/chessboard.ts/" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
            </div>
        </div>
    )
}

export default APIs;