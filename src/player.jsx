import React from 'react';
function Player(props) {
    const {onInputChange, addPlayer} = props;
    let {username,firstName,lastName,number,position} = props.player;
  return (
    <React.Fragment>
        <div className="container"  style={{marginTop:"10px"}}>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input onChange={(event) => onInputChange(event)} value={firstName || ''} type="text" className="form-control" name="firstName" id="first-name" placeholder="First Name"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <input onChange={(event) => onInputChange(event)} value={lastName || ''} type="text" className="form-control" name="lastName" id="last-name" placeholder="Last Name" required></input>
                    </div>
                    <div className="form-group col-md-4">
                        <input onChange={(event) => onInputChange(event)} value={username || ''} type="text" className="form-control" name="username" id="username" placeholder="Username" required></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input onChange={(event) => onInputChange(event)} value={number || ''} type="number" className="form-control" name="number" id="number" placeholder="Number" required></input>
                    </div>
                    <div className="form-group col-md-6">
                        <select onChange={(event) => onInputChange(event)} value={position} id="position" name="position" className="form-control" required>
                            <option>Goalkeeper</option>
                            <option>Defender</option>
                            <option>Midfielder</option>
                            <option>Forward</option>
                        </select>
                    </div>
                </div>
                <button onClick={()=>addPlayer()} className="btn btn-primary float-right">Add Player</button>
            
        </div>
    </React.Fragment>
  );
}

export default Player;
