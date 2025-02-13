import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function CreateCharacter() {
    const [name, setName] = useState('');
    const [characterClass, setCharacterClass] = useState('');
    const [classImage, setClassImage] = useState('');
    const [selectedClass, setSelectedClass] = useState(''); // Add state for selected class
    const [stats, setStats] = useState({ strength: 8, dexterity: 8, intelligence: 8, constitution: 8, wisdom: 8, charisma: 8 });
    const [remainingPoints, setRemainingPoints] = useState(27); // Initialize remaining points to 27
    const [selectedPlusTwo, setSelectedPlusTwo] = useState(''); // Track the selected +2 stat
    const [selectedPlusOne, setSelectedPlusOne] = useState(''); // Track the selected +1 stat
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleClassSelection = (characterClass, classImage) => {
        setCharacterClass(characterClass); // Set the character class
        setClassImage(classImage); // Set the class image
        setSelectedClass(characterClass); // Set the selected class
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/characters/save`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: auth.user._id, name, class: characterClass, classImage, stats }),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                navigate('/Character'); // Redirect to Character page
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error saving character:', error);
            alert('Failed to save character.');
        }
    };

    const incrementStat = (stat, increment) => {
        setStats((prevStats) => {
            const currentStatValue = prevStats[stat];
            if (currentStatValue + increment > 15) return prevStats; // Ensure stat does not exceed 15
            const pointsUsed = (currentStatValue + increment > 13) ? 2 * increment : increment;
            if (remainingPoints - pointsUsed >= 0) {
                setRemainingPoints(remainingPoints - pointsUsed);
                return {
                    ...prevStats,
                    [stat]: currentStatValue + increment,
                };
            }
            return prevStats;
        });
    };

    const decrementStat = (stat) => {
        setStats((prevStats) => {
            const currentStatValue = prevStats[stat];
            if (currentStatValue <= 8) return prevStats; // Ensure stat does not go below 8
            const newStatValue = currentStatValue - 1;
            const pointsUsed = currentStatValue > 13 ? 2 : 1;
            setRemainingPoints(remainingPoints + pointsUsed);
            return {
                ...prevStats,
                [stat]: newStatValue,
            };
        });
    };

    const handleCheckboxChange = (stat, increment) => {
        if (increment === 2) {
            if (selectedPlusTwo === stat) {
                setSelectedPlusTwo('');
            } else {
                setSelectedPlusTwo(stat);
                if (selectedPlusOne === stat) {
                    setSelectedPlusOne('');
                }
            }
        } else if (increment === 1) {
            if (selectedPlusOne === stat) {
                setSelectedPlusOne('');
            } else {
                setSelectedPlusOne(stat);
                if (selectedPlusTwo === stat) {
                    setSelectedPlusTwo('');
                }
            }
        }
    };

    const calculateBonus = (stat) => {
        return Math.floor((stat - 10) / 2);
    };

    const resetStats = () => {
        setStats({ strength: 8, dexterity: 8, intelligence: 8, constitution: 8, wisdom: 8, charisma: 8 });
        setRemainingPoints(27);
        setSelectedPlusTwo('');
        setSelectedPlusOne('');
    };

    return (
        <div>
            <h1>Forge your Destiny</h1>
            <form onSubmit={handleSubmit}>
                <h2>Who are you?</h2>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <h2>What is your Profession?</h2>
                <ul className="classes no-bullets">
                    <li onClick={() => handleClassSelection('Paladin', 'client/public/paladin.png')} className={selectedClass === 'Paladin' ? 'selected' : ''}><img src="client/public/paladin.png" alt="Paladin" /></li>
                    <li onClick={() => handleClassSelection('Cleric', 'client/public/cleric.png')} className={selectedClass === 'Cleric' ? 'selected' : ''}><img src="client/public/cleric.png" alt="Cleric" /></li> 
                    <li onClick={() => handleClassSelection('Fighter', 'client/public/fighter.png')} className={selectedClass === 'Fighter' ? 'selected' : ''}><img src="client/public/fighter.png" alt="Fighter" /></li>
                    <li onClick={() => handleClassSelection('Barbarian', 'client/public/barbarian.png')} className={selectedClass === 'Barbarian' ? 'selected' : ''}><img src="client/public/barbarian.png" alt="Barbarian" /></li>
                    <li onClick={() => handleClassSelection('Rogue', 'client/public/rogue.png')} className={selectedClass === 'Rogue' ? 'selected' : ''}><img src="client/public/rogue.png" alt="Rogue" /></li>
                    <li onClick={() => handleClassSelection('Ranger', 'client/public/ranger.png')} className={selectedClass === 'Ranger' ? 'selected' : ''}><img src="client/public/ranger.png" alt="Ranger" /></li>
                    <li onClick={() => handleClassSelection('Druid', 'client/public/druid.png')} className={selectedClass === 'Druid' ? 'selected' : ''}><img src="client/public/druid.png" alt="Druid" /></li>
                    <li onClick={() => handleClassSelection('Bard', 'client/public/bard.png')} className={selectedClass === 'Bard' ? 'selected' : ''}><img src="client/public/bard.png" alt="Bard" /></li>
                    <li onClick={() => handleClassSelection('Monk', 'client/public/monk.png')} className={selectedClass === 'Monk' ? 'selected' : ''}><img src="client/public/monk.png" alt="Monk" /></li>
                    <li onClick={() => handleClassSelection('Wizard', 'client/public/wizard.png')} className={selectedClass === 'Wizard' ? 'selected' : ''}><img src="client/public/wizard.png" alt="Wizard" /></li>
                    <li onClick={() => handleClassSelection('Sorcerer', 'client/public/sorcerer.png')} className={selectedClass === 'Sorcerer' ? 'selected' : ''}><img src="client/public/sorcerer.png" alt="Sorcerer" /></li>
                    <li onClick={() => handleClassSelection('Warlock', 'client/public/warlock.png')} className={selectedClass === 'Warlock' ? 'selected' : ''}><img src="client/public/warlock.png" alt="Warlock" /></li>
                </ul>
                <h2>Where do your abilities align?</h2>
                <p>Remaining Points: {remainingPoints}</p>
                <div>
                    <p>Strength: {stats.strength} ({calculateBonus(stats.strength)}) 
                        <button type="button" onClick={() => incrementStat('strength', 1)}>+</button> 
                        <button type="button" onClick={() => decrementStat('strength')}>-</button>
                        <input type="checkbox" checked={selectedPlusTwo === 'strength'} onChange={() => handleCheckboxChange('strength', 2)} /> +2
                        <input type="checkbox" checked={selectedPlusOne === 'strength'} onChange={() => handleCheckboxChange('strength', 1)} /> +1
                    </p>
                    <p>Dexterity: {stats.dexterity} ({calculateBonus(stats.dexterity)}) 
                        <button type="button" onClick={() => incrementStat('dexterity', 1)}>+</button> 
                        <button type="button" onClick={() => decrementStat('dexterity')}>-</button>
                        <input type="checkbox" checked={selectedPlusTwo === 'dexterity'} onChange={() => handleCheckboxChange('dexterity', 2)} /> +2
                        <input type="checkbox" checked={selectedPlusOne === 'dexterity'} onChange={() => handleCheckboxChange('dexterity', 1)} /> +1
                    </p>
                    <p>Constitution: {stats.constitution} ({calculateBonus(stats.constitution)}) 
                        <button type="button" onClick={() => incrementStat('constitution', 1)}>+</button> 
                        <button type="button" onClick={() => decrementStat('constitution')}>-</button>
                        <input type="checkbox" checked={selectedPlusTwo === 'constitution'} onChange={() => handleCheckboxChange('constitution', 2)} /> +2
                        <input type="checkbox" checked={selectedPlusOne === 'constitution'} onChange={() => handleCheckboxChange('constitution', 1)} /> +1
                    </p>
                    <p>Intelligence: {stats.intelligence} ({calculateBonus(stats.intelligence)}) 
                        <button type="button" onClick={() => incrementStat('intelligence', 1)}>+</button> 
                        <button type="button" onClick={() => decrementStat('intelligence')}>-</button>
                        <input type="checkbox" checked={selectedPlusTwo === 'intelligence'} onChange={() => handleCheckboxChange('intelligence', 2)} /> +2
                        <input type="checkbox" checked={selectedPlusOne === 'intelligence'} onChange={() => handleCheckboxChange('intelligence', 1)} /> +1
                    </p>
                    <p>Wisdom: {stats.wisdom} ({calculateBonus(stats.wisdom)}) 
                        <button type="button" onClick={() => incrementStat('wisdom', 1)}>+</button> 
                        <button type="button" onClick={() => decrementStat('wisdom')}>-</button>
                        <input type="checkbox" checked={selectedPlusTwo === 'wisdom'} onChange={() => handleCheckboxChange('wisdom', 2)} /> +2
                        <input type="checkbox" checked={selectedPlusOne === 'wisdom'} onChange={() => handleCheckboxChange('wisdom', 1)} /> +1
                    </p>
                    <p>Charisma: {stats.charisma} ({calculateBonus(stats.charisma)}) 
                        <button type="button" onClick={() => incrementStat('charisma', 1)}>+</button> 
                        <button type="button" onClick={() => decrementStat('charisma')}>-</button>
                        <input type="checkbox" checked={selectedPlusTwo === 'charisma'} onChange={() => handleCheckboxChange('charisma', 2)} /> +2
                        <input type="checkbox" checked={selectedPlusOne === 'charisma'} onChange={() => handleCheckboxChange('charisma', 1)} /> +1
                    </p>
                </div>
                <br />
                <button type="button" onClick={resetStats}>Clear</button>
                <br />
                <button type="submit">Save Character</button>
            </form>
        </div>
    );
}