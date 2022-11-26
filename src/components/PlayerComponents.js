import React,{useState,useEffect} from 'react'
import PlayerService from '../services/PlayerService';
import { Link } from 'react-router-dom';
import ReadOnlyRowPlayer from '../components/ReadOnlyRowPlayer';
 

import AddPlayer from '../pages/AddPlayer';
import AddMatchData from '../pages/AddMatchData';
import pic from "../components/player.JPG";

const PlayerComponents=({players,showAdd,handleAdd,handleMatchData,setShowAdd,setEditedPlayer})=>{ 

    
    
  
        return(
            <div>
            
           
                {!showAdd? <h1 className = "text-center"><img src = {pic}/>Players List</h1>:''}
                {!showAdd ?<button type="button" className = "btn btn-primary mb-2 player-right player-left" onClick={handleAdd}> Add Players </button>:''}
                {!showAdd? <button type="button" className = "btn btn-primary mb-2 player-right" onClick={handleMatchData}>Add Match Data</button> :''}
                {!showAdd ? <button type="button" className = "btn btn-primary mb-2" >Print Page</button> :''}
                {!showAdd ?
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            
                            <th> Player ID </th>
                            <th> Name</th>
                            <th> Gender</th>
                            <th> School</th>
                            <th> Ranking</th>
                            <th> Wins</th>
                            <th> Losses</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            players.map(
                                player =>
                               <ReadOnlyRowPlayer player={player} setEditedPlayer={setEditedPlayer}/>
                            )
                        }
                    </tbody>
                </table>:''}

                { showAdd?                
                <AddPlayer  setShowAdd={setShowAdd}    showAdd={showAdd}/>:''}
               
  


            </div>
        )
    


}

export default PlayerComponents