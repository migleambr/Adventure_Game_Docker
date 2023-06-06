import Player from "../components/Player"

const PlayerList = ({players}) => {

    const playersComponents = players.map(player => {
        return <Player
                key={player.id} 
                player={player} 

            />
                
    });

    return (
        <>
            <h3>List of Players</h3>
            <hr />
            {playersComponents}
        </>
        
    )

}

export default PlayerList;