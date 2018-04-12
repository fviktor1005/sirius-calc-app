import React from 'react';
import Calculator from "./Calculator";
import HistoryForm from './HistoryForm'
import {Switch, Route, Router, BrowserRouter} from 'react-router-dom';
import FetchData from './FetchData';

const HistoryWithData = FetchData(HistoryForm, '/records');

export default function App() {
    return (

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Calculator}/>
                    <Route path="/history" component={HistoryWithData}/>
                </Switch>
            </BrowserRouter>
        )

};
