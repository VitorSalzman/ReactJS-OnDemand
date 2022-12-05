import React, { useState, FormEvent, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
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
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import {
  FormControlLabel,
  FormGroup,
  Select,
  Switch,
  TextField,
} from "@material-ui/core";
import { Navbartop } from "../../components/navbartop/navbartest";
//import pool from "../../db/database";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MenuItem } from "react-pro-sidebar";
import styles from "./styles.module.css";
import Link from "@mui/material/Link";

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

interface State {
  name: string;
  user_owner: string;
  classroom: string;
  instances: number;
  image: string;
  description: string;
  internetaccess: true;
  creation_date: string;
  removal_date: string;
  sites_allow: string;
  sites_deny: string;
  ports_allow: string;
  ports_deny: string;
  vnf: string;
  networkfunctions: Record<string, unknown>;
}

function CadastroProject() {
  // O userState guarda váriaveis dinamicamente
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  // variavel auxiliar que funciona como histório de navegação
  const history = useHistory();
  const classes = UseStyles();
  const time = new Date();

  const [checked, setChecked] = React.useState(true);
  const [name, setNome] = React.useState("");
  const [classroom, setClassroom] = React.useState("");
  const [vm, setVms] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [access_network, setAccess] = React.useState(true);
  const [selectValue, setSelectValue] = useState("");
  const [values, setValues] = React.useState<State>({
    name: "Lab_Banco_de_dados_2",
    user_owner: "vitor",
    classroom: "Sistemas de Informação",
    instances: 5,
    image: "tiny_desktop_vnfd",
    description:
      "Laboratório dedicado a prática de Banco de Dados 2, com uso do MySQL WorkBench",
    internetaccess: true,
    creation_date: "1655773901",
    removal_date: "1663045921",
    vnf: "image: 'tiny_vnfd', order: 0, configs: 'texto json'",
    sites_allow: "w3school.com",
    sites_deny: "facebook.com",
    ports_allow: "5060",
    ports_deny: "5070",
    networkfunctions: {
      vnf1: { configs: "TEXTO JSON", image: "squid_vnfd", order: 1 },
    },
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

  //const handleChange =
  // (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  // setValues({ ...values, [prop]: event.target.value });
  //setChecked(event.target.checked);
  //};

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectValue(event.target.value as string);
  };

  //const handleClickShowPassword = () => {
  //setValues({ ...values, showPassword: !values.showPassword });
  //};

  //async function registraProf(values) {
  //var dados = values

  // var query = database.insert(values).into("professor");
  //  }

  //const time = new Date();
  const data = {
    //nome,
    //vmware,
    //password,
    //time,
  };

  const enviar = async (e: FormEvent) => {
    e.preventDefault();
    const dados = values;

    //const selecao = await pool("professor").select("*").where("id", "=", 2);
    //const query = await pool("professor").insert(dados).returning("*");

    console.log(dados);
    // pegar a hora atual

    //console.log(data);

    // POST QUANDO MINHA API ESTIVER ONLINE
    // ROTA PARA CRIAÇÃO DE USUÁRIO
    const response = await api
      //.post("/beta/laboratory", values)
      .post("/create_laboratory", JSON.stringify(dados), {
        headers: { "Content-Type": "application/json" },
      })
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
    console.log(response);
  };
  return (
    // importante, sempre retornar um componente
    // exemplo: ou uma div inteira, ou um h1
    // tambem posso só abrir ou fechar uma tag <></>

    <>
      <Navbartop />
      <div className={styles.create_lab}>
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

          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nome"
              label="Nome do laboratório"
              name="email"
              autoComplete="Nome do laboratório"
              autoFocus
              onChange={(e) => setNome(e.target.value)}
              type="text"
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nome"
              label="Turma"
              name="email"
              autoComplete="Turma"
              autoFocus
              onChange={(e) => setClassroom(e.target.value)}
              type="text"
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="vms"
              label="Quantidade de máquinas virtuais"
              name="email"
              autoComplete="Quantidade de máquinas virtuais"
              autoFocus
              onChange={(e) => setVms(e.target.value)}
              type="text"
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="description"
              label="Descrição"
              name="email"
              autoComplete="Descrição"
              autoFocus
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            />

            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Imagens
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={selectValue}
                  onChange={handleChange}
                  label="Imagens"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {options.map((option) => (
                    <MenuItem value={option.value}> {option.label} </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>{selectValue}</div>
          </form>

          {/* <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1"></InputGroup.Text>
          <Form.Control
            placeholder="Máquinas virtuais"
            aria-label="Máquinas virtuais"
            aria-describedby="basic-addon1"
            value={values.vms}
            onChange={handleChange("vms")}
          />
        </InputGroup>*/}
        </Container>
      </div>
      <div className={styles.create_lab_config}>
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
                  focusVisibleClassName=".Mui-focusVisible"
                  defaultChecked
                />
              }
              label="Acesso a Internet"
              labelPlacement="start"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  focusVisibleClassName=".Mui-focusVisible"
                  defaultChecked
                />
              }
              label="Controle Parental"
              labelPlacement="start"
            />
          </FormGroup>

          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="sites_allow"
              label="IP/URL"
              name="email"
              autoComplete="IP/URL"
              autoFocus
              onChange={(e) => setVms(e.target.value)}
              type="text"
            />
          </FormControl>
          <Button
            style={{ height: 25, marginTop: 50, marginLeft: 30 }}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Adicionar
          </Button>

          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 300 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Regra</TableCell>
                  <TableCell align="left">Liberar</TableCell>
                  <TableCell align="left">Editar</TableCell>
                  <TableCell align="left">Remover</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {values.sites_allow}
                  </TableCell>
                  <TableCell align="right">
                    {
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={checked}
                              //onChange={handleChange("internetaccess")}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label=""
                        />
                      </FormGroup>
                    }
                  </TableCell>
                  <TableCell>
                    {" "}
                    <BsPencil />{" "}
                  </TableCell>
                  <TableCell>
                    <BsFillTrashFill />{" "}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  focusVisibleClassName=".Mui-focusVisible"
                  defaultChecked
                />
              }
              label="Firewall"
              labelPlacement="start"
            />
          </FormGroup>

          <FormControl variant="outlined" className={classes.formControl}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="sites_allow"
              label="Porta"
              name="email"
              autoComplete="Porta"
              autoFocus
              onChange={(e) => setVms(e.target.value)}
              type="text"
            />
          </FormControl>
          <Button
            style={{ height: 25, marginTop: 50, marginLeft: 30 }}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Adicionar
          </Button>

          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 300 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Regra</TableCell>
                  <TableCell align="left">Liberar</TableCell>
                  <TableCell align="left">Editar</TableCell>
                  <TableCell align="left">Remover</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {values.ports_deny}
                  </TableCell>
                  <TableCell align="right">
                    {
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={checked}
                              //onChange={handleChange("sites_deny")}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label=""
                        />
                      </FormGroup>
                    }
                  </TableCell>
                  <TableCell>
                    {" "}
                    <BsPencil />{" "}
                  </TableCell>
                  <TableCell>
                    <BsFillTrashFill />{" "}
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
      </div>
    </>
  );
}

export default CadastroProject;
