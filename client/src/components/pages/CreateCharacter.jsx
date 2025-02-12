export default function CreateCharacter() {
    return (
        <div>
            <h1>Forge your Destiny</h1>
            <h2>Who are you?</h2>
            <input type="text" placeholder="Enter your name"  />
            <h2>What is your Profession?</h2>
            <ul className = "classes no-bullets">
                <li><img src="client/public/paladin.png" alt="Paladin" /></li>
                <li><img src="client/public/claric.png" alt="Claric" /></li>
                <li><img src="client/public/fighter.png" alt="Fighter" /></li>
                <li><img src="client/public/barbarian.png" alt="Barbarian" /></li>
                <li><img src="client/public/rogue.png" alt="Rouge" /></li>
                <li><img src="client/public/ranger.png" alt="Ranger" /></li>
                <li><img src="client/public/druid.png" alt="Druid" /></li>
                <li><img src="client/public/bard.png" alt="Bard" /></li>
                <li><img src="client/public/monk.png" alt="Monk" /></li>
                <li><img src="client/public/wizard.png" alt="Wizard" /></li>
                <li><img src="client/public/sorcerer.png" alt="Sorcerer" /></li>
                <li><img src="client/public/warlock.png" alt="Warlock" /></li>
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