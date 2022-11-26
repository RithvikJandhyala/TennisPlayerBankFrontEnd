import React,{useState,useEffect} from 'react'
import PlayerService from '../services/PlayerService';
import { Link } from 'react-router-dom';
import ReadOnlyRowPlayer from '../components/ReadOnlyRowPlayer';
 

import AddPlayer from '../pages/AddPlayer';
import AddMatchData from '../pages/AddMatchData';
import pic from "../components/player.JPG";
import PlayerComponents from '../components/PlayerComponents';

const Players=()=>{ 

    const [players,setPlayers]=useState([]);
    const [editedPlayer, setEditedPlayer] = useState([]);
    
    const [showAdd,setShowAdd] =useState(false);
    const [showMatchData,setShowMatchData] = useState(false);
    
    
    
 


const handleAdd=()=>{
 
    
    setShowAdd(true);
    

   }
const handleMatchData=()=>{

    setShowMatchData(true);
}
    useEffect(()=>{
        PlayerService.getPlayers().then((response) => {
           
            setPlayers(response.data);
        });

    },[showAdd,showMatchData]);
    
  
        return(
            <div> 
               {showMatchData?<AddMatchData/>:
                <PlayerComponents showAdd={showAdd}
                players={players}
                handleAdd={handleAdd}
                handleMatchData={handleMatchData}
                setShowAdd={setShowAdd}
                setEditedPlayer={setEditedPlayer}/>
        }


            </div>
        )
    


}

export default Players