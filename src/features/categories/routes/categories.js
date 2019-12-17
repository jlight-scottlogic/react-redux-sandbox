import React from 'react';
import { Switch, Route } from 'react-router';
import Categories from '../categories';
import CategoryLayout from '../category-layout';
import routes from './routes';

export default class CategoriesRoutesComponent extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={routes.list} component={Categories}></Route>
                <Route path={routes.categoryLayout(":id")} component={CategoryLayout}></Route>
            </Switch>
        )
    }
}