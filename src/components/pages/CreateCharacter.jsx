export default function CreateCharacter() {
    return (
        <div>
            <h1>Forge your Destiny</h1>
            <h2>Who are you?</h2>
            <input type="text" placeholder="Enter your name"  />
            <h2>What is your Profession?</h2>
            <ul className = "classes no-bullets">
                <li><img src="public/paladin.png" alt="Paladin" /></li>
                <li><img src="public/claric.png" alt="Claric" /></li>
                <li><img src="public/fighter.png" alt="Fighter" /></li>
                <li><img src="public/barbarian.png" alt="Barbarian" /></li>
                <li><img src="public/rogue.png" alt="Rouge" /></li>
                <li><img src="public/ranger.png" alt="Ranger" /></li>
                <li><img src="public/druid.png" alt="Druid" /></li>
                <li><img src="public/bard.png" alt="Bard" /></li>
                <li><img src="public/monk.png" alt="Monk" /></li>
                <li><img src="public/wizard.png" alt="Wizard" /></li>
                <li><img src="public/sorcerer.png" alt="Sorcerer" /></li>
                <li><img src="public/warlock.png" alt="Warlock" /></li>
            </ul>
            <h2>Where do your abilitys align?</h2>
            <ul>
                <li>Strength</li>
                <li>Intelligence</li>
                <li>Wisdom</li>
                <li>Dexterity</li>
                <li>Constitution</li>
                <li>Charisma</li>
            </ul>
        </div>
    );
}