import React from "react";
import {IonPage,IonGrid,IonRow,IonCol, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import Menu from "./Menu";

const Profile = () => {
    return(
        <div>
            <IonPage>
                <IonContent>

                <Menu />
                
                <br/><br/>
                <div className="ui container">
                    <div className="doubling ui two column grid">
                        <div className="column">
                            <img src="f1.jpg" />
                        </div>
                        <div className="column">
                            <img src="f1.jpg" />
                        </div>
                    </div>
                </div>


                </IonContent>
            </IonPage>
        </div>
    );
}

export default Profile;
