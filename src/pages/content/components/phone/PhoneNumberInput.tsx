import React, { useState } from 'react';
import { styles } from "./styles"; // Create a CSS file for styling

const countries = [
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  // Add more countries as needed
];

const PhoneNumberInput: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = countries.find(country => country.code === e.target.value);
    if (selected) {
      setSelectedCountry(selected);
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
<form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.group}>
        <select onChange={handleCountryChange} value={selectedCountry.code} style={styles.select}>
          {countries.map(country => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.name} ({country.code})
            </option>
          ))}
        </select>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Phone Number"
          required
          style={styles.input}
        />
      </div>
    </form>
  );
};

export default PhoneNumberInput;
