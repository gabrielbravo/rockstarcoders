import React from 'react';
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './../../components/NavBar/index';

import Home from './../discover/main/loadable';
import Movie from './../movie-detail/loadable';

const Routes = () => {
    const { Header, Content } = Layout;

    return (
        <Layout>
            <Router>
                <Header style={{ zIndex: 1 }}>
                    <NavBar />
                </Header>
                <Content>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/movie/:id" exact={true}>
                            <Movie />
                        </Route>
                    </Switch>
                </Content>
            </Router>
        </Layout>
    )
}

export default Routes;