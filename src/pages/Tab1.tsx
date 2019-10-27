import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox
} from '@ionic/react';
//import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';

const form = [
  { val: 'Pepperoni', isChecked: true },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false }
];

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista Super</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          { form.map(({val, isChecked}) => (
            <IonItem key={val}>
              <IonCheckbox color="success" slot="start" value={val} checked={isChecked} border-radius="5px" />
              <IonLabel>{val}</IonLabel>
            </IonItem>
          )) }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
