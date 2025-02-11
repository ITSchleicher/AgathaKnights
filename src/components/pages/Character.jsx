import { Link } from 'react-router-dom';

export default function Character() {
    return (
        <div>
            <h1>Character</h1>
         <p>List of Characters</p>
         <Link
            to="/CreateCharacter"
            >
            Create Character
          </Link>
        </div>
    );
}