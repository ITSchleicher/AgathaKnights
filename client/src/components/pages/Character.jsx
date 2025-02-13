import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Character() {
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(false);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const fetchCharacter = async () => {
            if (!auth.isAuthenticated) {
                setError(true);
                return;
            }

            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/characters/${auth.user._id}`);
                const data = await response.json();
                if (response.ok) {
                    setCharacter(data.character);
                } else {
                    setError(true);
                    console.error('Error fetching character:', data.message);
                }
            } catch (error) {
                setError(true);
                console.error('Error fetching character:', error);
            }
        };

        fetchCharacter();
    }, [auth.isAuthenticated, auth.user]);

    if (error || !character) {
        return (
            <div>
                <h1>Character</h1>
                <p>No character found. Create a new character:</p>
                <Link to="/CreateCharacter">Create Character</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <div className="character">
                <img className="character-image" src={character.classImage} alt={character.class} />
                <p>TO DO: Level, race, exp, HP, armor, maybe other stuff? </p>
                <p>Strength: {character.stats.strength}</p>
                <p>Dexterity: {character.stats.dexterity}</p>
                <p>Constitution: {character.stats.constitution}</p>
                <p>Intelligence: {character.stats.intelligence}</p>
                <p>Wisdom: {character.stats.wisdom}</p>
                <p>Charisma: {character.stats.charisma}</p>
            </div>
            <Link to="/CreateCharacter">Create Character</Link>
        </div>
    );
}