import React from "react";
import {Link} from "react-router-dom";
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';
import f4 from '../assets/f4.jpg';
import f5 from '../assets/f5.jpg';
import f6 from '../assets/f6.jpg';
import f7 from '../assets/f7.jpg';
import f8 from '../assets/f8.jpg';

import {IonPage,IonGrid,IonRow,IonCol,IonSegment, IonSegmentButton, IonButton,IonHeader,IonToolbar,IonTitle, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import CardSlider1 from "./CardSlider1";
import "./Style.css";

const Search = () => {
    return(
        <div>
            <IonPage>

                <IonHeader>
                    <IonToolbar color="danger">
                        <div slot="start">
                            Search<input type="text" slot="end" style={{width: "220px" , borderRadius: "12px"}} />
                        </div>
                        <Link to="/cart" slot="end"><i className="large cart black icon"></i></Link>
                    </IonToolbar>
                </IonHeader>

            
                <IonContent>

                <IonSegment color="dark" scrollable>
                    <IonSegmentButton checked layout="icon-start">
                        <IonIcon name="pizza" /> PIZZA
                    </IonSegmentButton>
                    <IonSegmentButton layout="icon-start">
                        <IonIcon name="fast-food" /> BURGER
                    </IonSegmentButton>
                    <IonSegmentButton layout="icon-start">
                        <IonIcon name="beer" /> COKE
                    </IonSegmentButton>
                    <IonSegmentButton layout="icon-start">
                        <IonIcon name="star" /> Gaming
                    </IonSegmentButton>
                    <IonSegmentButton layout="icon-start">
                        <IonIcon name="call" /> Food
                    </IonSegmentButton>
                    <IonSegmentButton layout="icon-start">
                        <IonIcon name="globe" /> Audio
                    </IonSegmentButton>
                    <IonSegmentButton layout="icon-start">
                        <IonIcon name="basket" /> Style
                    </IonSegmentButton>
                </IonSegment>


                <CardSlider1 />

                <IonGrid>
                    <IonRow size="9">
                        <IonGrid>
                            <IonRow size="12">
                                <IonCol size="12">
                                    <img src={f1} />
                                </IonCol>
                                <IonCol size="12">
                                    <img src={f2} />
                                </IonCol>
                                <IonCol size="12">
                                    <img src={f3} />
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        <IonCol size="9">
                            <img src={f1} />
                        </IonCol>
                    </IonRow>

                
                    <IonRow>
                        <IonCol>
                            <img src={f1} />
                        </IonCol>
                        <IonCol>
                            <img src={f2} />
                        </IonCol>
                        <IonCol>
                            <img src={f3} />
                        </IonCol>
                    </IonRow>


                    <IonRow>
                        <IonCol>
                            <img src={f4} />
                        </IonCol>
                        <IonCol>
                            <img src={f5} />
                        </IonCol>
                        <IonCol>
                            <img src={f6} />
                        </IonCol>
                    </IonRow>


                    <IonRow>
                        <IonCol>
                            <img src={f7} />
                        </IonCol>
                        <IonCol>
                            <img src={f8} />
                        </IonCol>
                        <IonCol>
                            <img src={f1} />
                        </IonCol>
                    </IonRow>


                   
                  
                    </IonGrid>
                </IonContent>
            </IonPage>
        </div>
    );
}

export default Search;