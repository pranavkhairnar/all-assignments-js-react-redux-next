import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Home from './Home';
import SignIn from './SignIn';
import Protected from './Protected';




import { useNavigate } from 'react-router-dom';


const AppWithRouterAccess = () => {

    const navigate = useNavigate();
    navigate('/home');
    const oktaAuth = new OktaAuth({
        issuer: 'https://${yourOktaDomain}/oauth2/default',
        clientId: '${clientId}',
        redirectUri: window.location.origin + '/login/callback',
        //onAuthRequired: onAuthRequired,
        pkce: true
    });

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };

    return (
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <Route path='/' exact={true} component={Home} />
            <SecureRoute path='/protected' component={Protected} />
            <Route path='/login' render={() => <SignIn />} />
            <Route path='/login/callback' component={LoginCallback} />
        </Security>
    );
};
export default AppWithRouterAccess;
