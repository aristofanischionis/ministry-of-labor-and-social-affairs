import React, {useState, useEffect} from 'react';
import {Tab, Button, Grid, Segment, Header, Container, Statistic, Icon} from 'semantic-ui-react';
import Path from '../Path';
import './index.css';
import superagent from 'superagent';

const sections = [
  {key: 'Home', content: 'Home', link: true},
  {key: 'COVID-info', content: 'COVID-info', active: true},
];

async function fetchCovidCases() {
  const res = await superagent.get('https://covid-19-greece.herokuapp.com/confirmed');
  const cases_length = res.body.cases.length - 1;

  const today_max_case = res.body.cases[cases_length].confirmed;
  const before_today_max_case = res.body.cases[cases_length - 1].confirmed;

  const daily = today_max_case - before_today_max_case;
  const date = res.body.cases[cases_length].date;
  return [daily, today_max_case, date];
}

async function fetchCovidRecovered() {
  const res = await superagent.get('https://covid-19-greece.herokuapp.com/recovered');
  const cases_length = res.body.cases.length - 1;

  const today_max_case = res.body.cases[cases_length].recovered;
  const before_today_max_case = res.body.cases[cases_length - 1].recovered;

  const daily = today_max_case - before_today_max_case;
  return [daily, today_max_case];
}

async function fetchCovidDeaths() {
  const res = await superagent.get('https://covid-19-greece.herokuapp.com/deaths');
  const cases_length = res.body.cases.length - 1;

  const today_max_case = res.body.cases[cases_length].deaths;
  const before_today_max_case = res.body.cases[cases_length - 1].deaths;

  const daily = today_max_case - before_today_max_case;
  return [daily, today_max_case];
}

export default function CovidInfo() {
  const [numberOfNewCases, setNumberOfNewCases] = useState(0);
  const [numberOfTotalCases, setNumberOfTotalCases] = useState(0);
  const [numberOfNewDeaths, setNumberOfNewDeaths] = useState(0);
  const [numberOfTotalDeaths, setNumberOfTotalDeaths] = useState(0);
  const [numberOfNewRecovered, setNumberOfNewRecovered] = useState(0);
  const [numberOfTotalRecovered, setNumberOfTotalRecovered] = useState(0);
  const [date, setDate] = useState('2020-01-01');

  useEffect(() => {
    async function fetchCovid() {
      let response = await fetchCovidCases();
      setNumberOfNewCases(response[0]);
      setNumberOfTotalCases(response[1]);
      setDate(response[2]);
      response = await fetchCovidDeaths();
      setNumberOfNewDeaths(response[0]);
      setNumberOfTotalDeaths(response[1]);
      response = await fetchCovidRecovered();
      setNumberOfNewRecovered(response[0]);
      setNumberOfTotalRecovered(response[1]);
    }
    fetchCovid();
  }, []);

  return (
    <div>
      <Path sections={sections} />
      <Grid stackable rows={4} textAlign="center">
        <Grid.Row>
          <Segment>
            <Container>
              {/* add date */}
              <Header as="h5" textAlign="left">
                <i>
                  Updated on: <Icon name="calendar alternate outline" /> {date}
                </i>
              </Header>
              <Header as="h3" color="blue" textAlign="center" attached="top">
                Δεδομένα για τον κορωνοϊό στην Ελλάδα
              </Header>
              <Statistic.Group widths="three">
                <Statistic color="orange">
                  <Statistic.Value>
                    <h2 className="style-text-initial">+{numberOfNewCases}</h2>
                  </Statistic.Value>
                  <Statistic.Value>
                    <h3 className="style-text-initial">Σύνολο: {numberOfTotalCases}</h3>
                  </Statistic.Value>
                  <Statistic.Label className="style-text-initial">
                    Επιβεβαιωμενα κρουσματα
                  </Statistic.Label>
                </Statistic>
                <Statistic color="red">
                  <Statistic.Value>
                    <h2 className="style-text-initial">+{numberOfNewDeaths}</h2>
                  </Statistic.Value>
                  <Statistic.Value>
                    <h3 className="style-text-initial">Σύνολο: {numberOfTotalDeaths}</h3>
                  </Statistic.Value>
                  <Statistic.Label className="style-text-initial">
                    Επιβεβαιωμενοι θανατοι
                  </Statistic.Label>
                </Statistic>
                <Statistic color="green" floated>
                  <Statistic.Value>
                    <h2 className="style-text-initial">+{numberOfNewRecovered}</h2>
                  </Statistic.Value>
                  <Statistic.Value>
                    <h3 className="style-text-initial">Σύνολο: {numberOfTotalRecovered}</h3>
                  </Statistic.Value>
                  <Statistic.Label className="style-text-initial">Εξηλθαν απο ΜΕΘ</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Container>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Container>
            <Header as="h2" textAlign="center">
              Πληροφορίες για τον COVID-19
            </Header>{' '}
            <br />
          </Container>

          <Segment>
            <Container>
              <Header as="h3" textAlign="center">
                <u>Γενικές πληροφορίες</u>
              </Header>
              <br />
              <p className="style-covid-info">
                Η τρέχουσα επιδημία COVID-19 προκαλείται από τον κορωνοϊό SARS-CoV-2, που ανήκει
                στην οικογένεια των κορωνοϊών (coronoviridae), μία μεγάλη οικογένεια RNA ιών.
                Σύμφωνα με τον ΠΟΥ, ο όρος SARS-CoV-2 (Severe Acute Respiratory Syndrome Corona
                Virus 2) υποδεικνύει τον ιό, ενώ ο όρος COVID-19 (COrona Virus Disease-2019)
                υποδεικνύει τη νόσο που εκδηλώνεται από τον ιό SARS-CoV-2.
                <br />
                <Header as="h5"> Ποιος είναι ο τρόπος μετάδοσης του ιού; </Header>
                Παρόλο που ο ιός προέρχεται από τα ζώα, μεταδίδεται από άνθρωπο σε άνθρωπο. Η
                μετάδοση θεωρείται ότι γίνεται κυρίως μέσω του αναπνευστικού με σταγονίδια από το
                φτέρνισμα, τον βήχα ή την εκπνοή.
                <br />
                <Header as="h5">Ποια είναι τα συμπτώματα της COVID-19 λοίμωξης;</Header>
                Τα κύρια συμπτώματα της νόσου περιλαμβάνουν: πυρετό, βήχα, πονόλαιμο, αρθραλγίες,
                μυαλγίες, καταβολή και δυσκολία στην αναπνοή. Πότε ένα περιστατικό της νόσου
                θεωρείται περισσότερο μεταδοτικό; Ένα περιστατικό θεωρείται περισσότερο μεταδοτικό
                όταν εμφανίζει συμπτώματα, αλλά θα μπορούσε να είναι μεταδοτικό και στην
                ασυμπτωματική φάση. Δεν γνωρίζουμε το ποσοστό των ασυμπτωματικών περιστατικών, ούτε
                τον ακριβή ρόλο που παίζουν στη μετάδοση του SARS-CoV-2, πιθανολογείται όμως πως
                είναι μικρότερο από αυτό των συμπτωματικών περιπτώσεων της νόσου.
                <br />
                <Header as="h5">Πόσοι ασθενείς εμφανίζουν σοβαρή νόσο;</Header>
                Οι περισσότεροι ασθενείς εμφανίζουν ήπια νόσο. Σε περίπτωση βαρύτερης νόσου, ο
                ασθενής μπορεί να εμφανίσει σοβαρή πνευμονία και να χρειαστεί νοσηλεία σε
                νοσοκομείο. Ποια άτομα κινδυνεύουν περισσότερο; Τα άτομα που ανήκουν σε ομάδα υψηλού
                κινδύνου (π.χ. ηλικιωμένοι, καρδιοπαθείς, άτομα με σακχαρώδη διαβήτη, ηπατοπάθειες ή
                πνευμονοπάθειες) είναι πιθανότερο να εμφανίσουν σοβαρή νόσο.
                <Header as="h5">Πότε πρέπει κάποιος να ελεγχθεί για COVID-19;</Header>
                Ένα άτομο πρέπει να ελεγχθεί για COVID-19, εάν παρουσιάζει: οξεία λοίμωξη του
                αναπνευστικού (αιφνίδια έναρξη νόσου, με τουλάχιστον ένα από τα παρακάτω συμπτώματα:
                πυρετό, βήχα, δύσπνοια), με ή χωρίς ανάγκη νοσηλείας, και αν έχει τουλάχιστον ένα
                από τα παρακάτω επιδημιολογικά κριτήρια, εντός των τελευταίων 14 ημερών πριν από την
                έναρξη των συμπτωμάτων:
                <ol>
                  <li>
                    {' '}
                    Στενή επαφή με πιθανό ή επιβεβαιωμένο κρούσμα λοίμωξης από τον νέο κορωνοϊό
                    SARS-CoV-2
                  </li>
                  <li>
                    {' '}
                    Ιστορικό ταξιδιού σε πληττόμενες από τον SARS-CoV-2 περιοχές με βάση τα τρέχοντα
                    επιδημιολογικά δεδομένα.
                  </li>
                </ol>
                Κάθε τέτοιο περιστατικό - ύποπτο κρούσμα θα πρέπει να υποβάλλεται ΑΜΕΣΑ σε
                εργαστηριακό έλεγχο για τον ιό SARS-CoV-2. Σε αυτή την περίπτωση συστήνεται η άμεση
                επικοινωνία με τον ΕΟΔΥ τηλ: <u> 210.52.12.054</u> ή <u>1135 </u> και όχι επίσκεψη
                σε χώρο παροχής υπηρεσιών υγείας χωρίς προηγούμενη ενημέρωση του ΕΟΔΥ.
              </p>
            </Container>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Segment>
            <Container>
              <Header as="h3" textAlign="center">
                <u>Εργοδότης και COVID-19</u>
              </Header>
              <p className="style-covid-info">
                <Header as="h5"> Ποιές είναι οι βασικές υποχρεώσεις εργοδοτών;</Header>
                <ol>
                  <li>
                    {' '}
                    Επικαιροποίηση της Εκτίμησης Επαγγελματικού Κινδύνου ως προς την αξιολόγηση του
                    κινδύνου και τα μέτρα πρόληψης και προστασίας έναντι του κορωνοϊού.
                  </li>
                  <li>
                    {' '}
                    Ενημέρωση των εργαζομένων για την κίνδυνο λοίμωξης από τον κορωνοϊό και τα μέτρα
                    πρόληψης και προστασίας, βάσει και των οδηγιών του ΕΟΔΥ.
                  </li>
                  <li>
                    {' '}
                    Διαβούλευση με τους εργαζόμενους και ενθάρρυνση για υποβολή σχετικών προτάσεων.
                  </li>
                  <li>
                    {' '}
                    Λήψη μέτρων περιβαλλοντικής και ατομικής υγιεινής, όπως τακτικός αερισμός των
                    χώρων εργασίας, συντήρηση των συστημάτων εξαερισμού - κλιματισμού και καθαρισμός
                    επιφανειών, συσκευών κ.λπ., σύμφωνα και με τις οδηγίες του ΕΟΔΥ.
                  </li>
                  <li>
                    {' '}
                    Χορήγηση κατάλληλων μέσων ατομικής προστασίας (Μ.Α.Π.) και επίβλεψη της ορθής
                    χρήσης τους.
                  </li>
                </ol>
                <Header as="h3"> Δήλωση εργοδοτών για την αντιμετώπιση του Covid-19</Header>
                <p className="style-covid-info">
                  Αν έχετε επιχείρηση ή είστε εργοδότης και έχει ανασταλεί η κύρια επιχειρηματική
                  σας δραστηριότητα θα πρέπει να δηλώσετε:
                  <ul>
                    <li>την αναστολή της δραστηριότητάς σας λόγω εντολής από δημόσια αρχή</li>
                    <li>τα στοιχεία του εκμισθωτή και του μισθίου σας</li>
                    <li>
                      τα στοιχεία των εργαζόμενων σας που οι συμβάσεις εργασίας τους τελούν σε
                      αναστολή ή έχουν λυθεί από 1/3/2020 έως 20/3/2020
                    </li>
                  </ul>
                  Αν η δραστηριότητα της επιχείρησή σας ανήκει στους κλάδους που πλήττονται από την
                  εξάπλωση του κορωνοϊού και κάνετε χρήση της δυνατότητας αναστολής των συμβάσεων
                  εργασίας μέρους ή του συνόλου του προσωπικού σας, θα πρέπει να δηλώσετε:
                  <ol>
                    <li>την αναστολή της δραστηριότητάς σας</li>
                    <li>
                      τα στοιχεία των εργαζόμενων σας που οι συμβάσεις εργασίας τους τελούν σε
                      αναστολή ή έχουν λυθεί από 1/3/2020 έως 20/3/2020
                    </li>
                  </ol>
                  Για την καλύτερη εξυπηρέτησή σας, μπορείτε να υποβάλετε την υπεύθυνη δήλωση:
                  <br />
                  <br />
                  <div>
                    <Button animated color="blue">
                      <Button.Content visible>Είσοδος στην υπηρεσία</Button.Content>
                      <Button.Content hidden>
                        <Icon name="arrow right" />
                      </Button.Content>
                    </Button>
                  </div>
                </p>
              </p>
            </Container>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Segment>
            <Container>
              <Header as="h3" textAlign="center">
                <u>Εργαζόμενος και COVID-19</u>
              </Header>
              <p className="style-covid-info">
                <Header as="h5"> Ποιές είναι οι βασικές πληροφορίες για εργαζομενους;</Header>
                Πληροφορίες για εργαζομενους
              </p>
              <Header as="h3"> Δήλωση εργαζομένων για την αντιμετώπιση του Covid-19</Header>
              <p className="style-covid-info">
                Υποβάλετε την υπεύθυνη δήλωση για να λάβετε την έκτακτη οικονομική ενίσχυση για την
                αντιμετώπιση των επιπτώσεων του Covid-19. Την ενίσχυση δικαιούστε οι εργαζόμενοι σε
                επιχειρήσεις ή εργοδότες που η επιχειρηματική τους δραστηριότητα:
                <ul>
                  <li>είτε έχει ανασταλεί με εντολή δημόσιας αρχής</li>
                  <li>είτε έχει πληγεί σημαντικά </li>
                </ul>
                Στην περίπτωση αναστολής με εντολή δημόσιας αρχής, δικαιούστε επιπλέον μείωση
                ενοικίου κύριας κατοικίας. Θα χρειαστείτε:
                <ol>
                  <li>τους προσωπικούς σας κωδικούς πρόσβασης στο Taxisnet</li>
                  <li>
                    τα στοιχεία του εκμισθωτή και του μισθίου ακινήτου, αν δικαιούστε και τη μείωση
                    ενοικίου
                  </li>
                </ol>
                Για την καλύτερη εξυπηρέτησή σας, μπορείτε να υποβάλετε την υπεύθυνη δήλωση:
                <br />
                <ul>
                  την 1η Απριλίου 2020 οι εργαζόμενοι με ΑΦΜ που λήγει σε 1 <br />
                  στις 2 Απριλίου οι εργαζόμενοι με ΑΦΜ που λήγει σε 2 <br />
                  στις 3 Απριλίου οι εργαζόμενοι με ΑΦΜ που λήγει σε 3 <br />
                  στις 4 Απριλίου οι εργαζόμενοι με ΑΦΜ που λήγει σε 4 <br />
                  στις 5 Απριλίου οι εργαζόμενοι με ΑΦΜ που λήγει σε 5 <br />
                  στις 6 Απριλίου οι εργαζόμενοι με ΑΦΜ που λήγει σε 6 <br />
                  στις 7 Απριλίου οι εργαζόμενοι με ΑΦΜ που λήγει σε 7 <br />
                  στις 8 Απριλίου οι εργαζόμενοι με ΑΦΜ που λήγει σε 8 <br />
                  στις 9 Απριλίου οι εργαζόμενοι με ΑΦΜ που λήγει σε 9 <br />
                  στις 10 Απριλίου οι εργαζόμενοι με ΑΦΜ που λήγει σε 0 <br />
                </ul>
                Η χρονική περίοδος υποβολής μπορεί να παραταθεί, αν χρειαστεί.
                <br />
                <br />
                <div>
                  <Button animated color="blue">
                    <Button.Content visible>Είσοδος στην υπηρεσία</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </div>
              </p>
            </Container>
          </Segment>
        </Grid.Row>
      </Grid>
    </div>
  );
}
