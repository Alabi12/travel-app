import { useNavigate } from 'react-router-dom';
import styles from './AddCity.module.css';
function AddCity() {
    const navigate = useNavigate();

    function onBack(e){
        e.preventDefault();
        navigate(-1);
    }
  return (
    <div className={styles.addCityContainer}>
        <form action="">
            <div>
                <label htmlFor="">City</label>
                <div>
                    <input type="text" aria-label='input-city'/>
                </div>
            </div>
            <div>
                <label htmlFor="">Notes</label>
                <div>
                    <textarea name="text" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className={`d-flex ${styles.buttons}`}>
                <button>Add City</button>
                <button onClick={onBack}>Back</button>
            </div>
        </form>
    </div>
  )
}

export default AddCity