import styles from '../css/Disease.module.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';

const symptomAdvice = {
    fever: {
      advice: "You may have an infection. Stay hydrated and monitor your temperature. If it persists, consult a doctor.",
      precautions: ["Drink plenty of fluids", "Rest well", "Take fever-reducing medication if necessary"]
    },
    cough: {
      advice: "It could be a common cold, flu, or allergies. Drink warm fluids and get enough rest.",
      precautions: ["Use a humidifier", "Avoid cold beverages", "Try honey and ginger tea"]
    },
    headache: {
      advice: "Try staying hydrated and resting. If headaches persist or worsen, consult a doctor.",
      precautions: ["Avoid bright screens", "Drink enough water", "Practice deep breathing"]
    },
    fatigue: {
      advice: "Could be due to stress or lack of sleep. Ensure proper rest and nutrition.",
      precautions: ["Get at least 7-8 hours of sleep", "Eat a balanced diet", "Reduce stress levels"]
    },
    nausea: {
      advice: "Avoid heavy meals and drink plenty of fluids. If persistent, seek medical advice.",
      precautions: ["Eat light meals", "Avoid oily foods", "Try ginger tea"]
    },
    soreThroat: {
      advice: "Gargle with warm salt water and stay hydrated. Seek medical attention if it lasts more than a few days.",
      precautions: ["Drink warm fluids", "Avoid cold drinks", "Use throat lozenges"]
    },
    dizziness: {
      advice: "Might be caused by dehydration or low blood pressure. Sit down and drink water.",
      precautions: ["Stand up slowly", "Increase fluid intake", "Avoid sudden movements"]
    }
  };
const Disease = ()=>{
    const [input, setInput] = useState("");
    const [advice, setAdvice] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
  
    const handleChange = (e) => {
      const value = e.target.value.toLowerCase();
      setInput(value);
      
      // Generate symptom suggestions based on input
      const filteredSuggestions = Object.keys(symptomAdvice).filter(symptom =>
        symptom.includes(value)
      );
      setSuggestions(filteredSuggestions);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (symptomAdvice[input]) {
        setAdvice(symptomAdvice[input]);
      } else {
        setAdvice({
          advice: "No specific advice found. Please consult a doctor for accurate diagnosis.",
          precautions: []
        });
      }
      setSuggestions([]);
    };

  return (
    <center>
    <div className={styles.cover}>
        <h1>Symptom Checker</h1>
    </div>
    <div className={styles.symptomchecker}>
      <h2>Enter your symptom to get basic health advice:</h2><br />
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter your symptom..."
          value={input}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Check</button>
      </form>

      {advice && (
        <div className={styles.advice}>
          <h3>Health Advice:</h3>
          <p>{advice.advice}</p>

          {advice.precautions.length > 0 && (
            <div>
              <h3>Precautions:</h3>
              
                {advice.precautions.map((precaution, index) => (
                  <p key={index}>{precaution}</p>
                ))}
              
            </div>
          )}
        </div>
      )}
    </div>
    <footer>
                    <h2>Quick Links</h2>
                    <div className={styles.foot}>
                    <div className={styles.foot1}>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/About'>About</Link></li>
                            <li><Link to='/Disease'>Health Advice</Link></li>
                        </ul>
                    </div>
                    <div className={styles.foot2}>
                        <ul>
                            <li><Link to='/Drugs'>Drugs & Supplements</Link></li>
                            <li><Link to='/Doctor'>Find a Doctor</Link></li>
                            <li><Link to='/News'>News</Link></li>
                        </ul>
                    </div>
                    </div>
                    <center><p>© ABC Private Limited. All rights reserved.</p></center>
                </footer>
    </center>
  );
}
export default Disease