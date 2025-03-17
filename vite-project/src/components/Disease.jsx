import styles from "../css/Disease.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const symptomAdvice = {
  fever: {
    advice:
      "You may have an infection. Stay hydrated and monitor your temperature. If it persists, consult a doctor.",
    precautions: [
      "Drink plenty of fluids",
      "Rest well",
      "Take fever-reducing medication if necessary",
    ],
  },
  cough: {
    advice:
      "It could be a common cold, flu, or allergies. Drink warm fluids and get enough rest.",
    precautions: [
      "Use a humidifier",
      "Avoid cold beverages",
      "Try honey and ginger tea",
    ],
  },
  cold: {
    advice: "Caused by viral infections. Get rest and drink warm fluids.",
    precautions: [
      "Stay warm",
      "Drink plenty of fluids",
      "Use nasal sprays for congestion",
    ],
  },
  headache: {
    advice:
      "Try staying hydrated and resting. If headaches persist or worsen, consult a doctor.",
    precautions: [
      "Avoid bright screens",
      "Drink enough water",
      "Practice deep breathing",
    ],
  },
  fatigue: {
    advice:
      "Could be due to stress, lack of sleep, or vitamin deficiency. Ensure proper rest and nutrition.",
    precautions: [
      "Get at least 7-8 hours of sleep",
      "Eat a balanced diet",
      "Reduce stress levels",
    ],
  },
  nausea: {
    advice:
      "Avoid heavy meals and drink plenty of fluids. If persistent, seek medical advice.",
    precautions: ["Eat light meals", "Avoid oily foods", "Try ginger tea"],
  },
  vomiting: {
    advice:
      "Caused by infections, food poisoning, or motion sickness. Stay hydrated.",
    precautions: [
      "Sip clear fluids",
      "Avoid strong smells",
      "Rest after eating",
    ],
  },
  sorethroat: {
    advice:
      "Gargle with warm salt water and stay hydrated. Seek medical attention if it lasts more than a few days.",
    precautions: [
      "Drink warm fluids",
      "Avoid cold drinks",
      "Use throat lozenges",
    ],
  },
  dizziness: {
    advice:
      "Might be caused by dehydration or low blood pressure. Sit down and drink water.",
    precautions: [
      "Stand up slowly",
      "Increase fluid intake",
      "Avoid sudden movements",
    ],
  },
  stomachpain: {
    advice:
      "Could be indigestion, food poisoning, or an infection. Monitor symptoms and seek help if pain is severe.",
    precautions: [
      "Eat easily digestible food",
      "Avoid spicy foods",
      "Drink plenty of water",
    ],
  },
  chestpain: {
    advice:
      "May indicate heart problems, acid reflux, or anxiety. Seek medical attention if severe or persistent.",
    precautions: [
      "Sit in a comfortable position",
      "Drink cold water if related to acid reflux",
      "Seek emergency care if pain is severe",
    ],
  },
  shortnessOfBreath: {
    advice:
      "Could be due to allergies, asthma, or a respiratory infection. Seek medical help if it worsens.",
    precautions: [
      "Practice deep breathing",
      "Avoid smoke and pollutants",
      "Use prescribed inhalers if needed",
    ],
  },
  jointpain: {
    advice:
      "Common in arthritis, viral infections, or overuse. Rest and use pain relief measures if necessary.",
    precautions: [
      "Apply ice or heat to the affected area",
      "Do light stretching",
      "Take pain relief medication if needed",
    ],
  },
  musclepain: {
    advice:
      "Could be due to overuse, dehydration, or a viral infection. Rest and hydrate.",
    precautions: ["Stretch properly", "Stay hydrated", "Use hot/cold therapy"],
  },
  skinrash: {
    advice:
      "Might be an allergic reaction, eczema, or infection. Avoid scratching and monitor symptoms.",
    precautions: [
      "Use hypoallergenic skincare",
      "Apply anti-itch creams",
      "Consult a dermatologist if rash spreads",
    ],
  },
  diarrhea: {
    advice:
      "Stay hydrated and eat light meals. If severe or prolonged, seek medical attention.",
    precautions: [
      "Drink ORS solutions",
      "Avoid dairy and spicy foods",
      "Wash hands frequently",
    ],
  },
  constipation: {
    advice: "Increase fiber intake and stay hydrated. Avoid processed foods.",
    precautions: [
      "Eat fruits and vegetables",
      "Drink warm water in the morning",
      "Exercise regularly",
    ],
  },
  highbloodpressure: {
    advice:
      "Could be due to stress, poor diet, or underlying health conditions. Monitor and maintain a healthy lifestyle.",
    precautions: ["Reduce salt intake", "Exercise regularly", "Manage stress"],
  },
  lowbloodpressure: {
    advice:
      "May cause dizziness or fainting. Stay hydrated and avoid sudden movements.",
    precautions: [
      "Increase salt intake slightly",
      "Drink more fluids",
      "Avoid prolonged standing",
    ],
  },
  anxiety: {
    advice:
      "Stress and worry can trigger symptoms. Try relaxation techniques and seek professional help if needed.",
    precautions: [
      "Practice deep breathing",
      "Get enough sleep",
      "Engage in calming activities",
    ],
  },
  insomnia: {
    advice:
      "Could be due to stress, poor sleep habits, or an underlying issue. Maintain a sleep routine.",
    precautions: [
      "Avoid screens before bed",
      "Limit caffeine intake",
      "Try relaxation techniques",
    ],
  },
  eyestrain: {
    advice:
      "Caused by prolonged screen time or poor lighting. Take breaks and ensure proper lighting.",
    precautions: [
      "Follow the 20-20-20 rule",
      "Adjust screen brightness",
      "Use blue light filters",
    ],
  },
  earpain: {
    advice:
      "Might be due to an ear infection, wax buildup, or sinus issues. If severe, see a doctor.",
    precautions: [
      "Avoid inserting objects into the ear",
      "Use warm compresses",
      "Keep ears dry",
    ],
  },
  allergies: {
    advice:
      "Avoid triggers and take antihistamines if needed. Seek medical help if reactions are severe.",
    precautions: [
      "Keep windows closed during pollen season",
      "Wash hands after pet contact",
      "Use air purifiers",
    ],
  },
  backpain: {
    advice:
      "Can be caused by poor posture, strain, or underlying conditions. Try stretches and posture correction.",
    precautions: [
      "Maintain a good posture",
      "Use ergonomic furniture",
      "Exercise regularly",
    ],
  },
  palpitations: {
    advice:
      "Could be caused by stress, caffeine, or an underlying heart issue. Monitor frequency and seek help if persistent.",
    precautions: [
      "Reduce caffeine intake",
      "Practice relaxation techniques",
      "Stay hydrated",
    ],
  },
  bloating: {
    advice:
      "May result from indigestion, gas, or dietary choices. Identify triggers and eat mindfully.",
    precautions: [
      "Avoid carbonated drinks",
      "Eat slowly",
      "Exercise to improve digestion",
    ],
  },
};
const Disease = () => {
  const [input, setInput] = useState("");
  const [advice, setAdvice] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);

    const filteredSuggestions = Object.keys(symptomAdvice).filter((symptom) =>
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
        advice:
          "No specific advice found. Please consult a doctor for accurate diagnosis.",
        precautions: [],
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
        <h2>Enter your symptom to get basic health advice:</h2>
        <br />
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
      <div className={styles.tips}>
        <h1>🌿 Healthy Lifestyle Tips</h1>
        <br />
        <h2>Eat Balanced Diet</h2>
        <h3>
          Include a variety of fruits, vegetables, whole grains, and lean
          proteins to maintain optimal health.
        </h3>
        <br />
        <h2>Stay Hydrated</h2>
        <h3>
          Drink plenty of water throughout the day to keep your body energized
          and functioning properly.
        </h3>
        <br />
        <h2>Exercise Regularly</h2>
        <h3>
          Aim for at least 30 minutes of physical activity daily to improve
          heart health and overall fitness.
        </h3>
        <br />
        <h2> Get Enough Sleep</h2>
        <h3>
          Ensure 7-9 hours of quality sleep to support mental and physical
          recovery.
        </h3>
        <br />
        <h2>Manage Stress</h2>
        <h3>
          Practice mindfulness, meditation, or deep breathing exercises to
          reduce stress and anxiety.
        </h3>{" "}
        <br />
        <h2>Get Sunlight & Fresh Air</h2>
        <h3>
          Spending time outdoors helps boost vitamin D levels and enhances mood.
        </h3>
      </div>
      <footer>
        <h2>Quick Links</h2>
        <div className={styles.foot}>
          <div className={styles.foot1}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Disease">Health Advice</Link>
              </li>
            </ul>
          </div>
          <div className={styles.foot2}>
            <ul>
              <li>
                <Link to="/Drugs">Drugs & Supplements</Link>
              </li>
              <li>
                <Link to="/Doctor">Find a Doctor</Link>
              </li>
              <li>
                <Link to="/News">News</Link>
              </li>
            </ul>
          </div>
        </div>
        <center>
          <p>© ABC Private Limited. All rights reserved.</p>
        </center>
      </footer>
    </center>
  );
};
export default Disease;
