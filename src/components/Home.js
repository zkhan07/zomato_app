import React from "react";
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';
import f4 from '../assets/f4.jpg';
import f5 from '../assets/f5.jpg';
import f6 from '../assets/f6.jpg';
import f7 from '../assets/f7.jpg';
import f8 from '../assets/f8.jpg';

import {Link} from "react-router-dom";
import CardSlider from "./CardSlider";
import {IonPage,IonHeader,IonToolbar,IonTitle,IonAvatar,IonGrid,IonRow,IonCol, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import "./Style.css"; 

const Home = () => {
    return(
        <div>
            <IonPage>

                <IonHeader>
                    <IonToolbar color="danger">
                        <h5 slot="start"> zaid</h5>
                        <IonTitle class="ion-text-center">FOOD</IonTitle>
                        <Link to="/cart" slot="end"><i className="large cart black icon"></i></Link>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                
                
                <br/>
                <CardSlider />


                    <br/><br/> 
                    <div className="ui container">
                        <h2>Most Popular</h2>
                        <div className="doubling ui four column grid">
                            <div className="column">
                                <div className="ui image">
                                    <img src={f1} />
                                </div>
                                <h4>India Food</h4>
                            </div>
                            <div className="column">
                                <div className="ui image">
                                    <img src={f2} />
                                </div>
                                <h4>Thailand Food</h4>
                            </div>
                            <div className="column">
                                <div className="ui image">
                                    <img src={f3} />
                                </div>
                                <h4>Itallian Food</h4>
                            </div>
                            <div className="column">
                                <div className="ui image">
                                    <img src={f4} />
                                </div>
                                <h4>American Food</h4>
                            </div>
                        </div>
                    </div>

                    <br/><br/><br/><br/>
                    <div className="ui container">
                        <div className="stackable ui two column grid">
                            <div className="column">
                                <div class="ui unstackable items">
                                        <div class="item">
                                            <div class="image">
                                            <img src={f1} />
                                            </div>
                                            <div class="content">
                                            <a class="header">Chicken Pettis</a>
                                            <div class="meta">
                                                <span>  30% OFF </span>
                                            </div>
                                            <div class="description">
                                                <p>&#8377;300</p>
                                            </div>
                                            <div class="extra">
                                      
                                            </div>
                                            </div>
                                            <div>
                                                <i className="star yellow icon"></i>
                                                <i className="star yellow icon"></i>
                                                <i className="star yellow icon"></i>
                                                <i className="star yellow icon"></i>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="column">
                                <div class="ui unstackable items">
                                        <div class="item">
                                            <div class="image">
                                            <img src={f2} />
                                            </div>
                                            <div class="content">
                                            <a class="header">Chicken Crispy</a>
                                            <div class="meta">
                                                <span>  50% OFF </span>
                                            </div>
                                            <div class="description">
                                                <p>&#8377;400</p>
                                            </div>
                                            <div class="extra">
                                             
                                            </div>
                                            </div>
                                            <div>
                                                <i className="star yellow icon"></i>
                                                <i className="star yellow icon"></i>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div className="column">
                                <div class="ui unstackable items">
                                        <div class="item">
                                            <div class="image">
                                            <img src={f3} />
                                            </div>
                                            <div class="content">
                                            <a class="header">Chicken Pettis</a>
                                            <div class="meta">
                                                <span>  20% OFF </span>
                                            </div>
                                            <div class="description">
                                                <p>&#8377;700</p>
                                            </div>
                                            <div class="extra">
                                               
                                            </div>
                                            </div>
                                            <div>
                                                <i className="star yellow icon"></i>
                                                <i className="star yellow icon"></i>
                                                <i className="star yellow icon"></i>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="column">
                                <div class="ui unstackable items">
                                        <div class="item">
                                            <div class="image">
                                            <img src={f4} />
                                            </div>
                                            <div class="content">
                                            <a class="header">Chicken Crispy</a>
                                            <div class="meta">
                                                <span>  40% OFF </span>
                                            </div>
                                            <div class="description">
                                                <p>&#8377;200</p>
                                            </div>
                                            <div class="extra">
                        
                                            </div>
                                            </div>
                                            <div>
                                                <i className="star yellow icon"></i>
                                                <i className="star yellow icon"></i>
                                            </div>
                                        </div>
                                </div>
                            </div>

                        </div>
                    </div>
                
                </IonContent>
            </IonPage>
        </div>
    );
}

export default Home;