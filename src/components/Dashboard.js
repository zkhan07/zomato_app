import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import Home from "./Home";
import Search from "./Search";
import Map from "./Map";
import Cart from "./Cart";
import Profile from "./Profile";


import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
  IonIcon,
} from '@ionic/react';



const Dashboard = () => {
  return (
    <IonApp>
      <IonReactRouter>
    
        <IonContent>
          <IonTabs>
            <IonRouterOutlet>

              <Route path="/home" component={Home} exact={true} />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route path="/search" component={Search} exact={true} />
              <Route path="/map" component={Map} exact={true} />
              <Route path="/cart" component={Cart} exact={true} />
              <Route path="/profile" component={Profile} exact={true} />
           
           
             
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home" active>
                <IonIcon name="home" />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="search" href="/search">
                <IonIcon name="search" />
                <IonLabel>Search</IonLabel>
              </IonTabButton>
              <IonTabButton tab="map" href="/map">
                <IonIcon name="map" />
                <IonLabel>Map</IonLabel>
              </IonTabButton>
              <IonTabButton tab="cart" href="/cart">
                <IonIcon name="cart" />
                <IonLabel>Cart</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profile" href="/profile">
                <IonIcon name="people" />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>

          </IonTabs>

        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
}

export default Dashboard;
