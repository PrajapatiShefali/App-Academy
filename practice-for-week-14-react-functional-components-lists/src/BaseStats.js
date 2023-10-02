import './BaseStats.css';
import './PokeMoves.js'
import PokeMoves from './PokeMoves.js';
const BaseStats = ({ clicker, stats: { hp, attack, defense, speed } }) => {
  return (
    <div className='stats'>
      <h1>BaseStats</h1>
      <div className='base-stats'>
        <table>
          <tbody>
            <tr>
              <td>Hit Points</td>
              <td>{hp}</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{attack}</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>{defense}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{speed}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={clicker} className='sp-stats'>
          Check Special Stats
      </button>
      <PokeMoves/>
    </div>
  );
};

export default BaseStats;
