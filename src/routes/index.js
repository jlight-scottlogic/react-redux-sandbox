import React from 'react';
import { Switch, Route } from 'react-router';
import Categories from '../features/categories/categories'
import CategoriesRoutes from '../features/categories/routes/categories'

class RoutesComponent extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Categories}></Route>
                <Route path="/categories" component={CategoriesRoutes}></Route>
            </Switch>
        )
    }
}

export default RoutesComponent;