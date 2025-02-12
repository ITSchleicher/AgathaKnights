import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function CreateCharacter() {
    const [name, setName] = useState('');
    const [characterClass, setCharacterClass] = useState('');
    const [classImage, setClassImage] = useState('');
    const [selectedClass, setSelectedClass] = useState(''); // Add state for selected class
    const [stats, setStats] = useState({ strength: 0, dexterity: 0, intelligence: 0, constitution: 0, wisdom: 0, charisma: 0 });
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
                <label>
                    Strength:
                    <input type="number" value={stats.strength} onChange={(e) => setStats({ ...stats, strength: e.target.value })} />
                </label>
                <br />
                <label>
                    Dexterity:
                    <input type="number" value={stats.dexterity} onChange={(e) => setStats({ ...stats, dexterity: e.target.value })} />
                </label>
                <br />
                <label>
                    Constitution:
                    <input type="number" value={stats.constitution} onChange={(e) => setStats({ ...stats, constitution: e.target.value })} />
                </label>
                <br />
                <label>
                    Intelligence:
                    <input type="number" value={stats.intelligence} onChange={(e) => setStats({ ...stats, intelligence: e.target.value })} />
                </label>
                <br />
                <label>
                    Wisdom:
                    <input type="number" value={stats.wisdom} onChange={(e) => setStats({ ...stats, wisdom: e.target.value })} />
                </label>
                <br />
                <label>
                    Charisma:
                    <input type="number" value={stats.charisma} onChange={(e) => setStats({ ...stats, charisma: e.target.value })} />
                </label>
                <br />
                <button type="submit">Save Character</button>
            </form>
        </div>
    );
}