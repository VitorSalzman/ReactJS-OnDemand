import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./style.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import Fingerprint from "@material-ui/icons/Fingerprint";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Assignment from "@material-ui/icons/Assignment";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "../../components/footer/footer";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
// PAGINA DE AUTTENTICAÇÃO DO SERVIÇO
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  FormControlLabel,
  FormGroup,
  Select,
  Switch,
  TextField,
} from "@material-ui/core";
import { Navbartop } from "../../components/navbartop/navbartest";
import pool from "../../db/database";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MenuItem } from "react-pro-sidebar";

// Componente sempre com letra maiúscula--
const UseStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    // margin: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
    width: "100%",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    // width: "25ch",
    width: "100%",
    height: "150%",
    marginTop: theme.spacing(3),
  },
}));

interface State {
  labname: string;
  class: string;
  vms: 0;
  images: string;
  access_network: boolean;
  parental_control: boolean;
  ipurl: string;
  firewall: boolean;
  showPassword: boolean;
  porta: string;
}

function Laboratory() {
  // O userState guarda váriaveis dinamicamente
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  // variavel auxiliar que funciona como histório de navegação
  const history = useHistory();
  const classes = UseStyles();
  const time = new Date();

  const [checked, setChecked] = React.useState(true);

  const [values, setValues] = React.useState<State>({
    labname: "",
    class: "",
    vms: 0,
    images: "",
    access_network: false,
    parental_control: false,
    ipurl: "192.168.0.1",
    firewall: true,
    showPassword: false,
    porta: "5060",
  });

  const options = [
    {
      label: "Ubuntu 20.04",
      value: "Ubuntu 20.04",
    },
    {
      label: "Windows 10",
      value: "Windows 10",
    },
    {
      label: "Ubuntu Server",
      value: "Ubuntu Server",
    },
  ];

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      setChecked(event.target.checked);
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  //async function registraProf(values) {
  //var dados = values

  // var query = database.insert(values).into("professor");
  //  }

  const enviar = async (e: FormEvent) => {
    e.preventDefault();
    const dados = { values };

    //const selecao = await pool("professor").select("*").where("id", "=", 2);
    const query = await pool("professor").insert(dados).returning("*");

    console.log(dados);
    // pegar a hora atual
    const time = new Date();
    //const data = {
    //name,
    // username,
    // password,
    // time,
    //};
    //console.log(data);

    // POST QUANDO MINHA API ESTIVER ONLINE
    // ROTA PARA CRIAÇÃO DE USUÁRIO
    api
      .post("/beta/laboratory", values)
      // depois que rodar o post, roda o then
      // CASO SUCESSO
      .then(() => {
        alert("Cadastrado com sucesso");

        history.push("/");
      })
      // CASO ERRO
      .catch(() => {
        alert("erro na criação");
      });
    console.log(values);
  };
  return (
    // importante, sempre retornar um componente
    // exemplo: ou uma div inteira, ou um h1
    // tambem posso só abrir ou fechar uma tag <></>

    <>
      <Navbartop />

      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Assignment />
          </Avatar>
          <Typography component="h1" variant="h5">
            Informações de Laboratório
          </Typography>
        </div>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1"></InputGroup.Text>
          <Form.Control
            placeholder="Nome do laboratório"
            aria-label="Laboratório"
            aria-describedby="basic-addon1"
            value={values.labname}
            onChange={handleChange("labname")}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1"></InputGroup.Text>
          <Form.Control
            placeholder="Máquinas virtuais"
            aria-label="Máquinas virtuais"
            aria-describedby="basic-addon1"
            value={values.vms}
            onChange={handleChange("vms")}
          />
        </InputGroup>
      </Container>

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Assignment />
        </Avatar>
        <Typography component="h1" variant="h5">
          Configuraçõs de Rede
        </Typography>
      </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={handleChange("access_network")}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Acesso à internet"
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={handleChange("parental_control")}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Controle Parental"
          />
        </FormGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1"></InputGroup.Text>
          <Form.Control
            placeholder="IP/URL"
            aria-label="Máquinas virtuais"
            aria-describedby="basic-addon1"
            value={values.ipurl}
            onChange={handleChange("ipurl")}
          />
        </InputGroup>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Regra</TableCell>
                <TableCell align="left">Liberar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {values.ipurl}
                </TableCell>
                <TableCell align="right">
                  {
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={checked}
                            onChange={handleChange("parental_control")}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label=""
                      />
                    </FormGroup>
                  }
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={handleChange("firewall")}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Firewall"
          />
        </FormGroup>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Regra</TableCell>
                <TableCell align="left">Liberar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {values.porta}
                </TableCell>
                <TableCell align="right">
                  {
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={checked}
                            onChange={handleChange("firewall")}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label=""
                      />
                    </FormGroup>
                  }
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          // onCLinc chama a função enviar criada la em cima

          onClick={enviar}
        >
          Cadastrar
        </Button>
      </Container>
    </>
  );
}

export default Laboratory;
