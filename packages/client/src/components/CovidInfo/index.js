import React, {useState, useEffect} from "react"
import { Grid, Segment, Header, Container, Statistic, Icon} from 'semantic-ui-react'
import Path from "../Path"
import './index.css'
import superagent from "superagent"

const sections = [
    { key: 'Home', content: 'Home', link: true },
    { key: 'COVID-info', content: 'COVID-info', active: true }
]

async function fetchCovidCases(){
    const res = await superagent.get('https://covid-19-greece.herokuapp.com/confirmed')
    const cases_length = res.body.cases.length-1

    const today_max_case  = res.body.cases[cases_length].confirmed
    const before_today_max_case = res.body.cases[cases_length-1].confirmed

    const daily = today_max_case - before_today_max_case  
    const date = res.body.cases[cases_length].date
    return [daily, today_max_case, date]
}

async function fetchCovidRecovered() {
    const res = await superagent.get('https://covid-19-greece.herokuapp.com/recovered')
    const cases_length = res.body.cases.length-1
  
    const today_max_case  = res.body.cases[cases_length].recovered
    const before_today_max_case = res.body.cases[cases_length-1].recovered
  
    const daily = today_max_case - before_today_max_case  
    return [daily, today_max_case]
}

async function fetchCovidDeaths() {
    const res = await superagent.get('https://covid-19-greece.herokuapp.com/deaths')
    const cases_length = res.body.cases.length-1
  
    const today_max_case  = res.body.cases[cases_length].deaths
    const before_today_max_case = res.body.cases[cases_length-1].deaths
  
    const daily = today_max_case - before_today_max_case  
    return [daily, today_max_case]
}


export default function CovidInfo() {
    const [numberOfNewCases, setNumberOfNewCases] = useState(0)
    const [numberOfTotalCases, setNumberOfTotalCases] = useState(0)
    const [numberOfNewDeaths, setNumberOfNewDeaths] = useState(0)
    const [numberOfTotalDeaths, setNumberOfTotalDeaths] = useState(0)
    const [numberOfNewRecovered, setNumberOfNewRecovered] = useState(0)
    const [numberOfTotalRecovered, setNumberOfTotalRecovered] = useState(0)
    const [date, setDate] = useState("2020-01-01")

    useEffect(() => {
        async function fetchCovid() {
            let response = await fetchCovidCases()
            setNumberOfNewCases(response[0])
            setNumberOfTotalCases(response[1])
            setDate(response[2])
            response = await fetchCovidDeaths()
            setNumberOfNewDeaths(response[0])
            setNumberOfTotalDeaths(response[1])
            response = await fetchCovidRecovered()
            setNumberOfNewRecovered(response[0])
            setNumberOfTotalRecovered(response[1])
        }
        fetchCovid();
    }, []);

    return (
        <div>
            <Path sections={sections} />
            <Header as='h2' textAlign="center">Πληροφορίες για τον COVID-19</Header> 
            <Grid stackable rows={4} textAlign="center">
                <Grid.Row>
                    <Segment>
                        <Container>
                            {/* add date */}
                            <Header color="blue" textAlign="center">Δεδομένα για τον κορωνοϊό στην Ελλάδα</Header>
                            <p><i>Updated on: <Icon name="calendar alternate outline" /> {date}</i></p>
                            <Statistic.Group widths='three'>
                                <Statistic color="orange">
                                    <Statistic.Value>{numberOfTotalCases}| +{numberOfNewCases}</Statistic.Value>
                                    <Statistic.Label>Επιβεβαιωμενα κρουσματα</Statistic.Label>
                                </Statistic>
                                <Statistic color="red">
                                    <Statistic.Value>{numberOfTotalDeaths}| +{numberOfNewDeaths}</Statistic.Value>
                                    <Statistic.Label>Επιβεβαιωμενοι θανατοι</Statistic.Label>
                                </Statistic>
                                <Statistic color="green" floated>
                                    <Statistic.Value>{numberOfTotalRecovered}| +{numberOfNewRecovered}</Statistic.Value>
                                    <Statistic.Label>Εξηλθαν απο τις ΜΕΘ</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </Container>
                    </Segment>
                </Grid.Row>
                <Grid.Row>
                    <Segment>
                        <Container>   
                        <Header as='h3'>Γενικές</Header>
                            <p className="style-covid-info">
                            Βασικές υποχρεώσεις εργοδοτών
                        1. Επικαιροποίηση της Εκτίμησης
                        Επαγγελματικού Κινδύνου ως προς την
                        αξιολόγηση του κινδύνου και τα μέτρα
                        πρόληψης και προστασίας έναντι του
                        κορωνοϊού.
                        2. Ενημέρωση των εργαζομένων για την
                        κίνδυνο λοίμωξης από τον κορωνοϊό και
                        τα μέτρα πρόληψης και προστασίας, βάσει
                        και των οδηγιών του ΕΟΔΥ.
                        3. Διαβούλευση με τους εργαζόμενους
                        και ενθάρρυνση για υποβολή σχετικών
                        προτάσεων.
                        4. Λήψη μέτρων περιβαλλοντικής και
                        ατομικής υγιεινής, όπως τακτικός
                        αερισμός των χώρων εργασίας,
                        συντήρηση των συστημάτων εξαερισμού -
                        κλιματισμού και καθαρισμός επιφανειών,
                        συσκευών κ.λπ., σύμφωνα και με τις
                        οδηγίες του ΕΟΔΥ.
                        5. Χορήγηση κατάλληλων μέσων ατομικής
                        προστασίας (Μ.Α.Π.) και επίβλεψη της
                        ορθής χρήσης τους.
                            </p>
                        </Container>
                    </Segment>
                </Grid.Row>
                <Grid.Row>
                    <Segment>
                        <Container>
                            <Header as='h3'>Για τον Εργοδότη</Header>
                            <p className="style-covid-info">
                            Βασικές υποχρεώσεις εργοδοτών
                        1. Επικαιροποίηση της Εκτίμησης
                        Επαγγελματικού Κινδύνου ως προς την
                        αξιολόγηση του κινδύνου και τα μέτρα
                        πρόληψης και προστασίας έναντι του
                        κορωνοϊού.
                        2. Ενημέρωση των εργαζομένων για την
                        κίνδυνο λοίμωξης από τον κορωνοϊό και
                        τα μέτρα πρόληψης και προστασίας, βάσει
                        και των οδηγιών του ΕΟΔΥ.
                        3. Διαβούλευση με τους εργαζόμενους
                        και ενθάρρυνση για υποβολή σχετικών
                        προτάσεων.
                        4. Λήψη μέτρων περιβαλλοντικής και
                        ατομικής υγιεινής, όπως τακτικός
                        αερισμός των χώρων εργασίας,
                        συντήρηση των συστημάτων εξαερισμού -
                        κλιματισμού και καθαρισμός επιφανειών,
                        συσκευών κ.λπ., σύμφωνα και με τις
                        οδηγίες του ΕΟΔΥ.
                        5. Χορήγηση κατάλληλων μέσων ατομικής
                        προστασίας (Μ.Α.Π.) και επίβλεψη της
                        ορθής χρήσης τους.
                        Βασικές υποχρεώσεις εργοδοτών
                        1. Επικαιροποίηση της Εκτίμησης
                        Επαγγελματικού Κινδύνου ως προς την
                        αξιολόγηση του κινδύνου και τα μέτρα
                        πρόληψης και προστασίας έναντι του
                        κορωνοϊού.
                        2. Ενημέρωση των εργαζομένων για την
                        κίνδυνο λοίμωξης από τον κορωνοϊό και
                        τα μέτρα πρόληψης και προστασίας, βάσει
                        και των οδηγιών του ΕΟΔΥ.
                        3. Διαβούλευση με τους εργαζόμενους
                        και ενθάρρυνση για υποβολή σχετικών
                        προτάσεων.
                        4. Λήψη μέτρων περιβαλλοντικής και
                        ατομικής υγιεινής, όπως τακτικός
                        αερισμός των χώρων εργασίας,
                        συντήρηση των συστημάτων εξαερισμού -
                        κλιματισμού και καθαρισμός επιφανειών,
                        συσκευών κ.λπ., σύμφωνα και με τις
                        οδηγίες του ΕΟΔΥ.
                        5. Χορήγηση κατάλληλων μέσων ατομικής
                        προστασίας (Μ.Α.Π.) και επίβλεψη της
                        ορθής χρήσης τους.
                        </p>
                        </Container>
                    </Segment>
                </Grid.Row>
                <Grid.Row>
                    <Segment>
                        <Container>
                            <Header as='h3'>Για τον Εργαζόμενο</Header>
                            <p className="style-covid-info">
                            Βασικές υποχρεώσεις εργοδοτών
                        1. Επικαιροποίηση της Εκτίμησης
                        Επαγγελματικού Κινδύνου ως προς την
                        αξιολόγηση του κινδύνου και τα μέτρα
                        πρόληψης και προστασίας έναντι του
                        κορωνοϊού.
                        2. Ενημέρωση των εργαζομένων για την
                        κίνδυνο λοίμωξης από τον κορωνοϊό και
                        τα μέτρα πρόληψης και προστασίας, βάσει
                        και των οδηγιών του ΕΟΔΥ.
                        3. Διαβούλευση με τους εργαζόμενους
                        και ενθάρρυνση για υποβολή σχετικών
                        προτάσεων.
                        4. Λήψη μέτρων περιβαλλοντικής και
                        ατομικής υγιεινής, όπως τακτικός
                        αερισμός των χώρων εργασίας,
                        συντήρηση των συστημάτων εξαερισμού -
                        κλιματισμού και καθαρισμός επιφανειών,
                        συσκευών κ.λπ., σύμφωνα και με τις
                        οδηγίες του ΕΟΔΥ.
                        5. Χορήγηση κατάλληλων μέσων ατομικής
                        προστασίας (Μ.Α.Π.) και επίβλεψη της
                        ορθής χρήσης τους.
                            </p>
                        </Container>
                    </Segment>
                </Grid.Row>
            </Grid>
        </div>
    )
}
