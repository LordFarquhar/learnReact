import React from 'react';
import ReactDOM from 'react-dom';
import FavouriteColorChange from "./favouriteColorChange.js";
import Vehicle from "./vehicle.js";
import forms from "./forms.js";
import './sass.scss';



ReactDOM.render(
    [
        <Vehicle type="bus" />,
        <FavouriteColorChange favcol="purple" />,
        <forms.MyForm />,
        <forms.SelectForm />,
        <forms.TextareaForm />
    ], document.getElementById('root'));
