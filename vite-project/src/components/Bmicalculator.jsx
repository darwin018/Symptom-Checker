import React from "react";
import { useState, useEffect } from "react";
import styles from '../css/Bmicalculator.module.css'
import {Link} from 'react-router-dom'

const Bmicalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      alert('Please enter both weight and height!');
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let bmiStatus = '';
    if (bmiValue < 18.5) {
      bmiStatus = 'Underweight';
    } else if (bmiValue < 24.9) {
      bmiStatus = 'Normal weight';
    } else if (bmiValue < 29.9) {
      bmiStatus = 'Overweight';
    } else {
      bmiStatus = 'Obesity';
    }
    setStatus(bmiStatus);
  };
  return (
    <>
      <div className={styles.cover}>
        <h1>BMI Calculator</h1>
      </div>
      <center>
        <div className={styles.container}>
          <h1>BMI Calculator</h1><br />
          <div className={styles.inputgroup}>
            <label>
              Weight (kg):
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder='Enter your weight'
              />
            </label>
          </div>
          <br />
          <div className={styles.inputgroup}>
            <label>
              Height (cm):
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder='Enter your height'
              />
            </label>
          </div>
          <button onClick={calculateBMI}>Calculate</button>
          {bmi && (
            <div className={styles.result}>
              <h3>Your BMI: {bmi}</h3>
              <h3>Status: {status}</h3>
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
    </>
  )
}
export default Bmicalculator