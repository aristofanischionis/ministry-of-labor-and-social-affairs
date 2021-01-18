import React from 'react';
import {Accordion, Segment, Grid, Header} from 'semantic-ui-react';
import './index.css';

const Level1Content = <div>Ακολουθόντας τον σύνδεσμο στην σελίδα...έλεος όλα εγώ θα στα λέω;</div>;
const Level2Content = <div>Καλή σου τύχη μπροοο. Ούτε εγώ ξέρω.</div>;
const Level3Content = <div>Εεεε, Μάνο;</div>;
const Level4Content = (
  <div>
    Οι επιχειρήσεις υπεραγορών (super market) για όσο διάστημα ισχύουν τα περιοριστικά μέτρα και έως
    ότου δοθούν διαφορετικές οδηγίες , είναι υποχρεωμένες να διασφαλίζουν:
    <ol>
      <li>
        Τήρηση της αναλογίας ενός ατόμου/ανά 15 τ.μ. και με ελάχιστη απόσταση μεταξύ τους τα δύο (2)
        μέτρα σε όλους τους χώρους των super market. Η συγκεκριμένη αναλογία των 15 τ.μ. και της
        ελάχιστης απόστασης δύναται να επανακαθοριστεί αναλόγως της εξέλιξης της διασποράς.
      </li>
      <li>
        Την κατάλληλη επί του δαπέδου σήμανση απόστασης δύο (2) μέτρων μεταξύ δύο (2) πελατών στο
        χώρο αναμονής μπροστά των ταμείων των σούπερ μάρκετ
      </li>
      <li>Αποφυγή φαινομένων συνωστισμού και συμφόρησης στους χώρους στάθμευσης.</li>
      <li>
        Ύπαρξη συσκευών απολύμανσης στις εισόδους των καταστημάτων προς δωρεάν χρήση από τους
        καταναλωτές.
      </li>
      <li>
        Χρήση τεχνητών / ή και φυσικών μέσων για τον τακτικό αερισμό των χώρων καθώς και απολύμανσης
        αυτών.
      </li>
      <li>
        Τήρηση των διαδικασιών για προληπτικούς/κατασταλτικούς λόγους που σχετίζονται με τον
        κορονοϊό COVID -19.
      </li>
      <li>
        Δυνατότητα λειτουργίας και τις Κυριακές με σκοπό την κατ οίκον παράδοση αγαθών στους
        καταναλωτές για παραγγελίες που έχουν καταγραφεί μέσω του ηλεκτρονικού τους συστήματος.
      </li>
    </ol>
  </div>
);
const rootPanels = [
  {
    key: 'panel-1',
    title: 'Χρειάζομαι προσωπικό λογαριασμό για να χρησιμοποιήσω τον ιστότοπο;',
    content: {content: Level1Content},
  },
  {
    key: 'panel-2',
    title: 'Ξέχασα τον κωδικό μου. Πως τον επανακτώ;',
    content: {content: Level2Content},
  },
  {key: 'panel-3', title: 'Θα περάσουμε το μάθημα;', content: {content: Level3Content}},
  {
    key: 'panel-4',
    title:
      'Ποια είναι τα προληπτικά μέτρα που πρέπει να εφαρμόζουν οι επιχειρήσεις υπεραγορών (super market) για τον περιορισμό της διασποράς του κορονοϊού;',
    content: {content: Level4Content},
  },
];

export default function Faq() {
  return (
    <Segment style={{padding: '6em 4em'}} vertical>
      <Grid centered className="align-text">
        <Header as="h1">
          <div className="title-color">Συχνές ερωτήσεις</div>
        </Header>
        <br></br>
      </Grid>
      <Grid centered className="align-text">
        <Accordion
          className="question-move"
          fluid
          defaultActiveIndex={0}
          panels={rootPanels}
          styled
        />
      </Grid>
    </Segment>
  );
}
