import React from 'react';
import BudgetTracker from '../components/BdgtTrckr/BudgetTracker';
import Header from '../components/Header';
import '../styles/Finance.css'
const Finance = () =>{

    return(
        <>
        <Header/>
            <h1>Financial Literacy</h1>
            <BudgetTracker/>
        </>
        
    )
}

export default Finance;