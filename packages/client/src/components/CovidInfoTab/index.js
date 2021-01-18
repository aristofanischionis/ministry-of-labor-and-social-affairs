import React, {useState, useEffect} from 'react';
import {Button, Icon, Tab, Header, Grid, Image, Segment} from 'semantic-ui-react';
import './index.css';
import superagent from 'superagent';
import covidinfo from '../../images/covidinfo.jpg';
import deathcovidicon from '../../images/deathcovidicon.png';
import exitcovidicon from '../../images/exitcovidicon.png';
import newcaseicon from '../../images/newcaseicon.png';
import './index.css';

// This open proxy is used in order to add 'Access-Control-Allow-Origin' header = *
// to our request and get covidInfo when Using Firefox
// https://github.com/Rob--W/cors-anywhere/#documentation
const openProxy = '';

async function fetchCovidCases() {
  const res = await superagent.get(openProxy + 'https://covid-19-greece.herokuapp.com/confirmed');
  const cases_length = res.body.cases.length - 1;

  const today_max_case = res.body.cases[cases_length].confirmed;
  const before_today_max_case = res.body.cases[cases_length - 1].confirmed;

  const daily = today_max_case - before_today_max_case;
  const date = res.body.cases[cases_length].date;
  return [daily, today_max_case, date];
}

async function fetchCovidRecovered() {
  const res = await superagent.get(openProxy + 'https://covid-19-greece.herokuapp.com/recovered');
  const cases_length = res.body.cases.length - 1;

  const today_max_case = res.body.cases[cases_length].recovered;
  const before_today_max_case = res.body.cases[cases_length - 1].recovered;

  const daily = today_max_case - before_today_max_case;
  return [daily, today_max_case];
}

async function fetchCovidDeaths() {
  const res = await superagent.get(openProxy + 'https://covid-19-greece.herokuapp.com/deaths');
  const cases_length = res.body.cases.length - 1;

  const today_max_case = res.body.cases[cases_length].deaths;
  const before_today_max_case = res.body.cases[cases_length - 1].deaths;

  const daily = today_max_case - before_today_max_case;
  return [daily, today_max_case];
}

const panes = [
  {
    menuItem: 'Γενικές πληροφορίες',
    render: () => (
      <Tab.Pane attached={true}>
        <br />
        <p className="style-covid-info">
          <Header as="h4"> Γενικά </Header>
          Η τρέχουσα επιδημία COVID-19 προκαλείται από τον κορωνοϊό SARS-CoV-2, που ανήκει στην
          οικογένεια των κορωνοϊών, μία μεγάλη οικογένεια RNA ιών. Σύμφωνα με τον ΠΟΥ, ο όρος
          SARS-CoV-2 υποδεικνύει τον ιό, ενώ ο όρος COVID-19 (Cοrona Virus Disease-2019) υποδεικνύει
          τη νόσο που εκδηλώνεται από τον ιό SARS-CoV-2.
          <br />
          <Header as="h4"> Ποιος είναι ο τρόπος μετάδοσης του ιού; </Header>
          Παρόλο που ο ιός προέρχεται από τα ζώα, μεταδίδεται από άνθρωπο σε άνθρωπο. Η μετάδοση
          θεωρείται ότι γίνεται κυρίως μέσω του αναπνευστικού με σταγονίδια από το φτέρνισμα, τον
          βήχα ή την εκπνοή.
          <br />
          <Header as="h4">Ποια είναι τα συμπτώματα της COVID-19 λοίμωξης;</Header>
          Τα κύρια συμπτώματα της νόσου περιλαμβάνουν: πυρετό, βήχα, πονόλαιμο, αρθραλγίες,
          μυαλγίες, καταβολή και δυσκολία στην αναπνοή. Πότε ένα περιστατικό της νόσου θεωρείται
          περισσότερο μεταδοτικό; Ένα περιστατικό θεωρείται περισσότερο μεταδοτικό όταν εμφανίζει
          συμπτώματα, αλλά θα μπορούσε να είναι μεταδοτικό και στην ασυμπτωματική φάση. Δεν
          γνωρίζουμε το ποσοστό των ασυμπτωματικών περιστατικών, ούτε τον ακριβή ρόλο που παίζουν
          στη μετάδοση του SARS-CoV-2, πιθανολογείται όμως πως είναι μικρότερο από αυτό των
          συμπτωματικών περιπτώσεων της νόσου.
          <br />
          <Header as="h4">Πότε πρέπει κάποιος να ελεγχθεί για COVID-19;</Header>
          Ένα άτομο πρέπει να ελεγχθεί για COVID-19, εάν παρουσιάζει: οξεία λοίμωξη του
          αναπνευστικού (αιφνίδια έναρξη νόσου, με τουλάχιστον ένα από τα παρακάτω συμπτώματα:
          πυρετό, βήχα, δύσπνοια), με ή χωρίς ανάγκη νοσηλείας, και αν έχει τουλάχιστον ένα από τα
          παρακάτω επιδημιολογικά κριτήρια, εντός των τελευταίων 14 ημερών πριν από την έναρξη των
          συμπτωμάτων:
          <ol>
            <li>
              {' '}
              Στενή επαφή με πιθανό ή επιβεβαιωμένο κρούσμα λοίμωξης από τον νέο κορωνοϊό SARS-CoV-2
            </li>
            <li>
              {' '}
              Ιστορικό ταξιδιού σε πληττόμενες από τον SARS-CoV-2 περιοχές με βάση τα τρέχοντα
              επιδημιολογικά δεδομένα.
            </li>
          </ol>
          Κάθε τέτοιο περιστατικό - ύποπτο κρούσμα θα πρέπει να υποβάλλεται ΑΜΕΣΑ σε εργαστηριακό
          έλεγχο για τον ιό SARS-CoV-2. Σε αυτή την περίπτωση συστήνεται η άμεση επικοινωνία με τον
          ΕΟΔΥ τηλ: <u> 210.52.12.054</u> ή <u>1135 </u> και όχι επίσκεψη σε χώρο παροχής υπηρεσιών
          υγείας χωρίς προηγούμενη ενημέρωση του ΕΟΔΥ.
        </p>
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Πληροφορίες εργοδοτών',
    render: () => (
      <Tab.Pane attached={true}>
        <p className="style-covid-info">
          <Header as="h4"> Ποιές είναι οι βασικές υποχρεώσεις εργοδοτών;</Header>
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
              Λήψη μέτρων περιβαλλοντικής και ατομικής υγιεινής, όπως τακτικός αερισμός των χώρων
              εργασίας, συντήρηση των συστημάτων εξαερισμού - κλιματισμού και καθαρισμός επιφανειών,
              συσκευών κ.λπ., σύμφωνα και με τις οδηγίες του ΕΟΔΥ.
            </li>
            <li>
              {' '}
              Χορήγηση κατάλληλων μέσων ατομικής προστασίας (Μ.Α.Π.) και επίβλεψη της ορθής χρήσης
              τους.
            </li>
          </ol>
          <Header as="h3"> Δήλωση εργοδοτών για την αντιμετώπιση του Covid-19</Header>
          <p className="style-covid-info">
            Αν έχετε επιχείρηση ή είστε εργοδότης και έχει ανασταλεί η κύρια επιχειρηματική σας
            δραστηριότητα θα πρέπει να δηλώσετε:
            <ul>
              <li>την αναστολή της δραστηριότητάς σας λόγω εντολής από δημόσια αρχή</li>
              <li>τα στοιχεία του εκμισθωτή και του μισθίου σας</li>
              <li>
                τα στοιχεία των εργαζόμενων σας που οι συμβάσεις εργασίας τους τελούν σε αναστολή ή
                έχουν λυθεί από 1/3/2020 έως 20/3/2020
              </li>
            </ul>
            Αν η δραστηριότητα της επιχείρησή σας ανήκει στους κλάδους που πλήττονται από την
            εξάπλωση του κορωνοϊού και κάνετε χρήση της δυνατότητας αναστολής των συμβάσεων εργασίας
            μέρους ή του συνόλου του προσωπικού σας, θα πρέπει να δηλώσετε:
            <ol>
              <li>την αναστολή της δραστηριότητάς σας</li>
              <li>
                τα στοιχεία των εργαζόμενων σας που οι συμβάσεις εργασίας τους τελούν σε αναστολή ή
                έχουν λυθεί από 1/3/2020 έως 20/3/2020
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
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Πληροφορίες εργαζομένων',
    render: () => (
      <Tab.Pane attached={true}>
        <Header as="h3" textAlign="center">
          <u>Εργαζόμενος και COVID-19</u>
        </Header>
        <p className="style-covid-info">
          <Header as="h4"> Ποιές είναι οι βασικές πληροφορίες για εργαζομενους;</Header>
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
          Στην περίπτωση αναστολής με εντολή δημόσιας αρχής, δικαιούστε επιπλέον μείωση ενοικίου
          κύριας κατοικίας. Θα χρειαστείτε:
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
      </Tab.Pane>
    ),
  },
];

export default function CovidInfoTab() {
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
    <Grid>
      <Grid.Row centered className="image-coloring-covinfo">
        <Image src={covidinfo} size="medium" />
      </Grid.Row>
      <Grid.Row centered className="image-coloring-covinfo2">
        <Header as="h3">Κορωνοϊός: Κατευθυντήριες οδηγίες.</Header>
      </Grid.Row>
      <Grid.Row>
        <Grid centered columns={3}>
          <Grid.Column width={3}>
            <Segment raised>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Image src={newcaseicon} size="small" />
                  </Grid.Column>
                  <Grid.Column textAlign="center" width={10}>
                    <p>
                      <Header as="h3">+{numberOfNewCases} </Header>
                    </p>
                    <p>
                      <b>ΣΥΝΟΛΟ: &nbsp; {numberOfTotalCases}</b>
                    </p>
                    <p>ΚΡΟΥΣΜΑΤΑ</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}>
            <Segment raised>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Image src={deathcovidicon} size="small" />
                  </Grid.Column>
                  <Grid.Column textAlign="center" width={10}>
                    <p>
                      <Header as="h3">+{numberOfNewDeaths} </Header>
                    </p>
                    <p>
                      <b>ΣΥΝΟΛΟ: &nbsp; {numberOfTotalDeaths}</b>
                    </p>
                    <p>ΑΠΩΛΕΙΕΣ</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}>
            <Segment raised>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Image src={exitcovidicon} size="small" />
                  </Grid.Column>
                  <Grid.Column textAlign="center" width={11}>
                    <p>
                      <Header as="h3">+{numberOfNewRecovered} </Header>
                    </p>
                    <p>
                      <b>ΣΥΝΟΛΟ: &nbsp; {numberOfTotalRecovered}</b>
                    </p>
                    <p>ΕΞΗΛΘΑΝ ΑΠΟ ΜΕΘ</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
      </Grid.Row>
      <Grid.Row centered>
        <Header as="h6">
          <Icon name="calendar alternate outline" />
          {date}
        </Header>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={10}>
          <Tab panes={panes} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
