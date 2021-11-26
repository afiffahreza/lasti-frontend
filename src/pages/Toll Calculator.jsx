import React from "react";
import Header from "../layout/Header";
import Dialog from "../layout/Dialog";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

class TollCalculator extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			roads : [],
			entrances : [],
			exits : [],
      rates : [],
      isDialogOpen: false
		};
		this.changeRoad = this.changeRoad.bind(this);
		this.changeEntrance = this.changeEntrance.bind(this);
    this.changeExit = this.changeExit.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);
	}

	componentDidMount() {
		this.setState({
      roads: [
        { name: 'Balikpapan - Samarinda', entrances:[
          { name: 'Karang Joang', exits:[
            { name: 'Manggar', rates:['Golongan I: 14.000','Golongan II: 21.000','Golongan III: 21.000','Golongan IV: 27.500','Golongan V: 27.500','Golongan VI: N/A']},
            { name: 'Samboja', rates:['Golongan I: 28.000','Golongan II: 42.000','Golongan III: 42.000','Golongan IV: 56.000','Golongan V: 56.000','Golongan VI: N/A']},
            { name: 'Simpang Jembatan Mahkota 2', rates:['Golongan I: 111.500','Golongan II: 167.500','Golongan III: 167.500','Golongan IV: 223.000','Golongan V: 223.000','Golongan VI: N/A']},
            { name: 'Simpang Pasir', rates:['Golongan I: 103.500','Golongan II: 155.000','Golongan III: 155.000','Golongan IV: 206.500','Golongan V: 206.500','Golongan VI: N/A']}
          ]},
          { name: 'Manggar', exits:[
            { name: 'Karang Joang', rates:['Golongan I: 14.000','Golongan II: 21.000','Golongan III: 21.000','Golongan IV: 27.500','Golongan V: 27.500','Golongan VI: N/A']},
            { name: 'Samboja', rates:['Golongan I: 42.000','Golongan II: 62.500','Golongan III: 62.500','Golongan IV: 83.500','Golongan V: 83.500','Golongan VI: N/A']},
            { name: 'Simpang Jembatan Mahkota 2', rates:['Golongan I: 125.500','Golongan II: 188.000','Golongan III: 188.000','Golongan IV: 251.000','Golongan V: 251.000','Golongan VI: N/A']},
            { name: 'Simpang Pasir', rates:['Golongan I: 117.000','Golongan II: 176.000','Golongan III: 176.000','Golongan IV: 234.500','Golongan V: 234.500','Golongan VI: N/A']}
          ]},
          { name: 'Samboja', exits:[
            { name: 'Karang Joang', rates:['Golongan I: 28.000','Golongan II: 42.000','Golongan III: 42.000','Golongan IV: 56.000','Golongan V: 56.000','Golongan VI: N/A']},
            { name: 'Manggar', rates:['Golongan I: 42.000','Golongan II: 62.500','Golongan III: 62.500','Golongan IV: 83.500','Golongan V: 83.500','Golongan VI: N/A']},
            { name: 'Simpang Jembatan Mahkota 2', rates:['Golongan I: 83.500','Golongan II: 125.500','Golongan III: 125.500','Golongan IV: 167.500','Golongan V: 167.500','Golongan VI: N/A']},
            { name: 'Simpang Pasir', rates:['Golongan I: 75.500','Golongan II: 113.000','Golongan III: 113.000','Golongan IV: 151.000','Golongan V: 151.000','Golongan VI: N/A']}
          ]},
          { name: 'Simpang Jembatan Mahkota 2', exits:[
            { name: 'Karang Joang', rates:['Golongan I: 111.500','Golongan II: 167.500','Golongan III: 167.500','Golongan IV: 223.000','Golongan V: 223.000','Golongan VI: N/A']},
            { name: 'Manggar', rates:['Golongan I: 125.500','Golongan II: 188.000','Golongan III: 188.000','Golongan IV: 251.000','Golongan V: 251.000','Golongan VI: N/A']},
            { name: 'Samboja', rates:['Golongan I: 83.500','Golongan II: 125.500','Golongan III: 125.500','Golongan IV: 167.500','Golongan V: 167.500','Golongan VI: N/A']}
          ]},
          { name: 'Simpang Pasir', exits:[
            { name: 'Karang Joang', rates:['Golongan I: 103.500','Golongan II: 155.000','Golongan III: 155.000','Golongan IV: 206.500','Golongan V: 206.500','Golongan VI: N/A']},
            { name: 'Manggar', rates:['Golongan I: 117.000','Golongan II: 176.000','Golongan III: 176.000','Golongan IV: 234.500','Golongan V: 234.500','Golongan VI: N/A']},
            { name: 'Samboja', rates:['Golongan I: 75.500','Golongan II: 113.000','Golongan III: 113.000','Golongan IV: 151.000','Golongan V: 151.000','Golongan VI: N/A']}
          ]}
        ]},
        { name: 'Belawan - Medan - Tanjung Morawa', entrances:[
          { name: 'Amplas', exits:[
            { name: 'Bandar Selamat', rates:['Golongan I: 3.000','Golongan II: 5.000','Golongan III: 5.000','Golongan IV: 7.000','Golongan V: 7.000','Golongan VI: N/A']},
            { name: 'Belawan', rates:['Golongan I: 7.000','Golongan II: 12.500','Golongan III: 12.500','Golongan IV: 18.000','Golongan V: 18.000','Golongan VI: N/A']},
            { name: 'H. Anif/Cemara', rates:['Golongan I: 3.500','Golongan II: 6.000','Golongan III: 6.000','Golongan IV: 9.000','Golongan V: 9.000','Golongan VI: N/A']},
            { name: 'Mabar', rates:['Golongan I: 4.000','Golongan II: 7.500','Golongan III: 7.500','Golongan IV: 11.000','Golongan V: 11.000','Golongan VI: N/A']},
            { name: 'Tanjung Morawa', rates:['Golongan I: 3.000','Golongan II: 5.000','Golongan III: 5.000','Golongan IV: 7.000','Golongan V: 7.000','Golongan VI: N/A']},
            { name: 'Tanjung Mulia', rates:['Golongan I: 4.000','Golongan II: 7.500','Golongan III: 7.500','Golongan IV: 11.000','Golongan V: 11.000','Golongan VI: N/A']}
          ]},
          { name: 'Bandar Selamat', exits:[
            { name: 'Amplas', rates:['Golongan I: 3.000','Golongan II: 5.000','Golongan III: 5.000','Golongan IV: 7.000','Golongan V: 7.000','Golongan VI: N/A']},
            { name: 'Belawan', rates:['Golongan I: 5.500','Golongan II: 10.000','Golongan III: 10.000','Golongan IV: 14.500','Golongan V: 14.500','Golongan VI: N/A']},
            { name: 'H. Anif/Cemara', rates:['Golongan I: 1.500','Golongan II: 3.000','Golongan III: 3.000','Golongan IV: 4.000','Golongan V: 4.000','Golongan VI: N/A']},
            { name: 'Mabar', rates:['Golongan I: 4.000','Golongan II: 7.500','Golongan III: 7.500','Golongan IV: 11.000','Golongan V: 11.000','Golongan VI: N/A']},
            { name: 'Tanjung Morawa', rates:['Golongan I: 4.000','Golongan II: 7.500','Golongan III: 7.500','Golongan IV: 11.000','Golongan V: 11.000','Golongan VI: N/A']},
            { name: 'Tanjung Mulia', rates:['Golongan I: 3.000','Golongan II: 5.000','Golongan III: 5.000','Golongan IV: 7.000','Golongan V: 7.000','Golongan VI: N/A']}
          ]},
          { name: 'Belawan', exits:[
            { name: 'Amplas', rates:['Golongan I: 7.000','Golongan II: 12.500','Golongan III: 12.500','Golongan IV: 18.000','Golongan V: 18.000','Golongan VI: N/A']},
            { name: 'Bandar Selamat', rates:['Golongan I: 5.500','Golongan II: 10.000','Golongan III: 10.000','Golongan IV: 14.500','Golongan V: 14.500','Golongan VI: N/A']},
            { name: 'H. Anif/Cemara', rates:['Golongan I: 5.000','Golongan II: 9.500','Golongan III: 9.500','Golongan IV: 13.500','Golongan V: 13.500','Golongan VI: N/A']},
            { name: 'Mabar', rates:['Golongan I: 4.000','Golongan II: 7.500','Golongan III: 7.500','Golongan IV: 11.000','Golongan V: 11.000','Golongan VI: N/A']},
            { name: 'Tanjung Morawa', rates:['Golongan I: 8.500','Golongan II: 15.000','Golongan III: 15.000','Golongan IV: 21.500','Golongan V: 21.500','Golongan VI: N/A']},
            { name: 'Tanjung Mulia', rates:['Golongan I: 4.000','Golongan II: 7.500','Golongan III: 7.500','Golongan IV: 11.000','Golongan V: 11.000','Golongan VI: N/A']}
          ]},
          { name: 'H. Anif/Cemara', exits:[
            { name: 'Amplas', rates:['Golongan I: 3.500','Golongan II: 6.000','Golongan III: 6.000','Golongan IV: 9.000','Golongan V: 9.000','Golongan VI: N/A']},
            { name: 'Bandar Selamat', rates:['Golongan I: 1.500','Golongan II: 3.000','Golongan III: 3.000','Golongan IV: 4.000','Golongan V: 4.000','Golongan VI: N/A']},
            { name: 'Belawan', rates:['Golongan I: 5.000','Golongan II: 9.500','Golongan III: 9.500','Golongan IV: 13.500','Golongan V: 13.500','Golongan VI: N/A']},
            { name: 'Mabar', rates:['Golongan I: 3.000','Golongan II: 5.500','Golongan III: 5.500','Golongan IV: 7.500','Golongan V: 7.500','Golongan VI: N/A']},
            { name: 'Tanjung Morawa', rates:['Golongan I: 5.500','Golongan II: 10.000','Golongan III: 10.000','Golongan IV: 14.000','Golongan V: 14.000','Golongan VI: N/A']},
            { name: 'Tanjung Mulia', rates:['Golongan I: 1.000','Golongan II: 2.000','Golongan III: 2.000','Golongan IV: 2.500','Golongan V: 2.500','Golongan VI: N/A']}
          ]},
          { name: 'Mabar', exits:[
            { name: 'Amplas', rates:['Golongan I: 4.000','Golongan II: 7.500','Golongan III: 7.500','Golongan IV: 11.000','Golongan V: 11.000','Golongan VI: N/A']},
            { name: 'Bandar Selamat', rates:['Golongan I: 4.000','Golongan II: 7.500','Golongan III: 7.500','Golongan IV: 11.000','Golongan V: 11.000','Golongan VI: N/A']},
            { name: 'Belawan', rates:['Golongan I: 4.000','Golongan II: 7.500','Golongan III: 7.500','Golongan IV: 11.000','Golongan V: 11.000','Golongan VI: N/A']},
            { name: 'H. Anif/Cemara', rates:['Golongan I: 3.000','Golongan II: 5.500','Golongan III: 5.500','Golongan IV: 7.500','Golongan V: 7.500','Golongan VI: N/A']},
            { name: 'Tanjung Morawa', rates:['Golongan I: 5.500','Golongan II: 10.000','Golongan III: 10.000','Golongan IV: 14.500','Golongan V: 14.500','Golongan VI: N/A']},
            { name: 'Tanjung Mulia', rates:['Golongan I: 3.000','Golongan II: 5.000','Golongan III: 5.000','Golongan IV: 7.000','Golongan V: 7.000','Golongan VI: N/A']}
          ]},
          { name: 'Tanjung Morawa', exits:[
            { name: 'Amplas', rates:['Golongan I: 3.000','Golongan II: 5.000','Golongan III: 5.000','Golongan IV: 7.000','Golongan V: 7.000','Golongan VI: N/A']},
            { name: 'Bandar Selamat', rates:['Golongan I: 4.000','Golongan II: 7.500','Golongan III: 7.500','Golongan IV: 11.000','Golongan V: 11.000','Golongan VI: N/A']},
            { name: 'Belawan', rates:['Golongan I: 8.500','Golongan II: 15.000','Golongan III: 15.000','Golongan IV: 21.500','Golongan V: 21.500','Golongan VI: N/A']},
            { name: 'H. Anif/Cemara', rates:['Golongan I: 5.500','Golongan II: 10.000','Golongan III: 10.000','Golongan IV: 14.000','Golongan V: 14.000','Golongan VI: N/A']},
            { name: 'Mabar', rates:['Golongan I: 5.500','Golongan II: 10.000','Golongan III: 10.000','Golongan IV: 14.500','Golongan V: 14.500','Golongan VI: N/A']},
            { name: 'Tanjung Mulia', rates:['Golongan I: 5.500','Golongan II: 10.000','Golongan III: 10.000','Golongan IV: 14.500','Golongan V: 14.500','Golongan VI: N/A']}
          ]},
          { name: 'Tanjung Mulia', exits:[
            { name: 'Amplas', rates:['Golongan I: 4.000','Golongan II: 7.500','Golongan III: 7.500','Golongan IV: 11.000','Golongan V: 11.000','Golongan VI: N/A']},
            { name: 'Bandar Selamat', rates:['Golongan I: 3.000','Golongan II: 5.000','Golongan III: 5.000','Golongan IV: 7.000','Golongan V: 7.000','Golongan VI: N/A']},
            { name: 'Belawan', rates:['Golongan I: 4.000','Golongan II: 7.500','Golongan III: 7.500','Golongan IV: 11.000','Golongan V: 11.000','Golongan VI: N/A']},
            { name: 'H. Anif/Cemara', rates:['Golongan I: 1.000','Golongan II: 2.000','Golongan III: 2.000','Golongan IV: 2.500','Golongan V: 2.500','Golongan VI: N/A']},
            { name: 'Mabar', rates:['Golongan I: 3.000','Golongan II: 5.000','Golongan III: 5.000','Golongan IV: 7.000','Golongan V: 7.000','Golongan VI: N/A']},
            { name: 'Tanjung Morawa', rates:['Golongan I: 5.500','Golongan II: 10.000','Golongan III: 10.000','Golongan IV: 14.500','Golongan V: 14.500','Golongan VI: N/A']}
          ]}
        ]}
      ]
		});
	}

	changeRoad(event) {
		this.setState({selectedRoad: event.target.value});
		this.setState({entrances : this.state.roads.find(rd => rd.name === event.target.value).entrances});
	}

	changeEntrance(event) {
		this.setState({selectedEntrance: event.target.value});
		const entrncs = this.state.roads.find(rd => rd.name === this.state.selectedRoad).entrances;
		this.setState({exits : entrncs.find(entrnc => entrnc.name === event.target.value).exits});
	}

	changeExit(event) {
		this.setState({selectedExit: event.target.value});
		const exts = this.state.entrances.find(entrnc => entrnc.name === this.state.selectedEntrance).exits;
		this.setState({rates : exts.find(ext => ext.name === event.target.value).rates});
	}

  toggleDialog() {
    const { isDialogOpen } = this.state;
    this.setState({ isDialogOpen: !isDialogOpen });
  }

  render() {
    var entranceMessage = 'Gerbang Masuk: ' + this.state.selectedEntrance;
    var exitMessage = 'Gerbang Keluar: ' + this.state.selectedExit;
    return (
      <div className="body3">
        <Header/>
        <center>
          <div>
            <Container maxWidth='md' style={{marginTop: '20px', background: "#B4DFA6"}} sx={{width: 500, height: 500}}>
              <br/>
              <Box
                  component="form"
                  sx={{
                      '& .MuiTextField-root': { m: 1, width: '50ch'},
                  }}
                  noValidate
                  autoComplete="off"
                  m={3}
              >
                <div>
                  <FormControl sx={{ m: 1, width: 400, mt: 10 }}>
                    <InputLabel htmlFor="road-select">Road</InputLabel>
                    <Select native defaultValue="" id="road-select" label="Road" value={this.state.selectedRoad} onChange={this.changeRoad}>
                      <option aria-label="None" value="" />
                      {this.state.roads.map((e, key) => {
          							return <option key={key}>{e.name}</option>;
          						})}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl sx={{ m: 1, width: 400 }}>
                    <InputLabel htmlFor="entrance-select">Entrance</InputLabel>
                    <Select native defaultValue="" id="entrance-select" label="Entrance" value={this.state.selectedEntrance} onChange={this.changeEntrance}>
                      <option aria-label="None" value="" />
                      {this.state.entrances.map((e, key) => {
          							return <option key={key}>{e.name}</option>;
          						})}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl sx={{ m: 1, width: 400 }}>
                    <InputLabel htmlFor="exit-select">Exit</InputLabel>
                    <Select native defaultValue="" id="exit-select" label="Exit" value={this.state.selectedExit} onChange={this.changeExit}>
                      <option aria-label="None" value="" />
                      {this.state.exits.map((e, key) => {
          							return <option key={key}>{e.name}</option>;
          						})}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <Stack spacing={2} m={1} width={400}>
                    <Button variant="outlined" onClick={this.toggleDialog}>Tampilkan Tarif Tol</Button>
                  </Stack>
                  <Dialog isOpen={this.state.isDialogOpen} onClose={this.toggleDialog} styles={{position: "absolute", top: 250}}>
                    <div>
                      <p>{entranceMessage}</p>
                      <p>{exitMessage}</p>
                      {this.state.rates.map((e, key) => {
                        return <p key={key}>{e}</p>;
                      })}
                      <p>Jumlah kendaraan di tol {this.state.selectedRoad} saat ini: 1100</p>
                      <p>Estimasi waktu tempuh saat ini: 68 menit</p>
                      <p>Estimasi waktu tempuh 2 jam lagi: 80 menit</p>
                      <p>Estimasi waktu tempuh 4 jam lagi: 64 menit</p>
                      <p>Estimasi waktu tempuh 8 jam lagi: 60 menit</p>
                    </div>
                  </Dialog>
                </div>
              </Box>
            </Container>
          </div>
        </center>
      </div>
    )
  }
}

export default TollCalculator
