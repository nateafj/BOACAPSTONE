import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import React, { useState } from 'react';
import ProviderList from '../src/components/DoctorAppointment/ProviderList';
import Filters from '../src/components/DoctorAppointment/Filter';
import providersData from '../src/components/DoctorAppointment/providers.json';
import HealthCare from '../src/screens/Healthcare';

function App() {

  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    gender: '',
    availability: '',
  });

  // Assuming providersData contains the JSON data you provided
  const filteredProviders = providersData.filter(provider => {
    // const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedFilters.category === '' || provider.specialty === selectedFilters.category;
    const matchesGender = selectedFilters.gender === '' || provider.gender === selectedFilters.gender;
    const matchesAvailability = selectedFilters.availability === '' || provider.availability.includes(selectedFilters.availability);
    
    return  matchesCategory && matchesGender && matchesAvailability;
  });
  return (
    <Routes>
      <Header/>
        <Route path="/" element={<Home/>}/> 
        <Route path="/health" element={<HealthCare />}>
    </Route>
    </Routes>
 

  );
}

export default App;
