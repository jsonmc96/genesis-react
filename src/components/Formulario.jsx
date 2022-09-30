import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Selector from "./ComboBox";
import Label from "./Label";
import SubCard from "../cards/SubCard";
import TexfieldC from "./Input";
import CheckboxC from "./Checkbox";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
//import TableActions from "./Table";
import { useForm } from "react-hook-form";

export default function Formulario() {
  const [misionList, setMisionList] = useState([]);
  const [distritoList, setDistritoList] = useState([]);
  const [iglesiaList, setIglesiaList] = useState([]);
  const [grupoPequenoList, setGrupoPequenoTipoList] = useState([]);

  const [iglesia, setIglesia] = useState(0);

  const [columns, setColumns] = useState([
    {
      title: "Primer Nombre",
      field: "primerNombre",
    },
    {
      title: "Segundo Nombre",
      field: "segundoNombre",
    },
    {
      title: "Apellido Paterno",
      field: "Apaterno",
    },
    {
      title: "Apellido Materno",
      field: "AMaterno",
    },
    {
      title: "¿Da estudio?",
      field: "estudios",
      type: "boolean",
    },
    {
      title: "¿Esta bautizado?",
      field: "bautizado",
      type: "boolean",
    },
    {
      title: "¿Recibe estudio biblico?",
      field: "RecibEstudio",
      type: "boolean",
    },
    {
      title: "¿Esta suscrito al folleto Escuela Sabatica?",
      field: "folleto",
      type: "boolean",
    },
    {
      title: "¿Es lider?",
      field: "lider",
      type: "boolean",
    },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState([]); // Aqui se almacena los datos insertados en las tablas

  useEffect(() => {
    async function misionGet() {
      fetch("http://localhost:3000/api/v1/mision")
        .then(async (result) => {
          const response = await result.json();
          if (response.code === 1) {
            setMisionList(response.payload ? JSON.parse(response.payload) : []);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    misionGet();

    async function grupoPequenoTipoGet() {
      fetch("http://localhost:3000/api/v1/gp/tipo")
        .then(async (result) => {
          const response = await result.json();
          if (response.code === 1) {
            setGrupoPequenoTipoList(
              response.payload ? JSON.parse(response.payload) : []
            );

            console.log(response.payload ? JSON.parse(response.payload) : []);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    grupoPequenoTipoGet();
  }, []);

  const distritoGet = (event) => {
    fetch(`http://localhost:3000/api/v1/distrito/${event.target.value}`)
      .then(async (result) => {
        const response = await result.json();
        if (response.code === 1) {
          setDistritoList(response.payload ? JSON.parse(response.payload) : []);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const iglesiaGet = (event) => {
    fetch(`http://localhost:3000/api/v1/iglesia/${event.target.value}`)
      .then(async (result) => {
        const response = await result.json();
        if (response.code === 1) {
          setIglesiaList(response.payload ? JSON.parse(response.payload) : []);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (event) => {
    console.log(event);

    let config = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      //mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: "same-origin", //"same-origin", include, *same-origin, omit
      headers: {
        Accept: "*/*", //application/json
        "Content-Type": "application/json; charset=utf-8", // application/x-www-form-urlencoded,F
        // Authorization: TOKEN,
      },
      //redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(event), // body data type must match "Content-Type" header
    };

    console.log(config);
    fetch("http://localhost:3000/api/v1/gp/save", config)
      .then(async (result) => {
        const response = await result.json();
        if (response.code === 1) {
          alert("okayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
          return;
        }
        alert("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
      })
      .catch((error) => {
        console.log(error);
        alert("vales artaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box margin={5}>
          <SubCard
            className="col-12"
            container={true}
            title="Formulario"
            style={{ textAlign: "center" }}
            sx={{ borderColor: "black" }}
          >
            <Grid container={true} spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={3}>
                <Selector
                  label="Seleccione Mision"
                  list={misionList}
                  id={"idMision"}
                  register={register}
                  nombre={"nombre"}
                  name={"idMision"}
                  onChange={distritoGet}
                ></Selector>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={3}>
                <Selector
                  label="Seleccione Distrito"
                  list={distritoList}
                  id={"idDistrito"}
                  register={register}
                  name={"idDistrito"}
                  nombre={"descripcion"}
                  onChange={iglesiaGet}
                ></Selector>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={3}>
                <Selector
                  label="Seleccione Iglesia"
                  list={iglesiaList}
                  id={"idIglesia"}
                  register={register}
                  name={"idIglesia"}
                  nombre={"descripcion"}
                  onChange={setIglesia}
                ></Selector>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={3}>
                <Selector
                  label="Seleccione Tipo grupo pequeño"
                  list={grupoPequenoList}
                  id={"idGrupoPequenoTipo"}
                  register={register}
                  name={"idGrupoPequenoTipo"}
                  nombre={"nombre"}
                  onChange={setIglesia}
                ></Selector>
              </Grid>
              <Grid container rowSpacing={2} spacing={3}>
                <Box
                  sx={{
                    "& > :not(style)": { m: 4, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    required
                    id="nombreGp"
                    error={false}
                    name="nombreGp"
                    helperText="Campo obligatorio*"
                    label="Nombre de su grupo pequeño"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="outlined"
                  />
                </Box>
              </Grid>

              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                  <Label texto="¿Cuántas personas su GP ya llevó al bautismo este año? "></Label>
                  <TexfieldC
                    name={"gpBautismo"}
                    nombre="Ingrese la cantidad"
                    id="cantGPbautizados"
                    type="number"
                  />
                </Grid>
                <Grid item xs={10} sm={6} md={6} lg={4}>
                  <Label texto="¿Su GP se reune el sábado como Unidad de Acción en la Escuela Sabática?"></Label>
                </Grid>
                <Grid item xs={2} sm={6} md={6} lg={2}>
                  <CheckboxC name={"gpUnidadAccionES"} id="opcion"></CheckboxC>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6} sm={12} md={6}>
                <Label texto="¿Cuántos miembros de su GP están dando estudios bíblicos? "></Label>
                <TexfieldC
                  name={"gpEstudioBiblico"}
                  nombre="Ingrese la cantidad"
                  id="cantEstudiosBiblicos"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} lg={6} sm={6} md={6}>
                <Label texto="¿Cuántos miembros de su GP poseen la suscripción del folleto de la Escuela Sabática?"></Label>
                <TexfieldC
                  nombre="Ingrese la cantidad"
                  id="CantSuscri"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} lg={6} sm={6} md={6}>
                <Label texto="¿Cuántos amigos no adventistas frecuentan su GP? "></Label>
                <TexfieldC
                  name={"gpSuscritoEscuelaSabatica"}
                  nombre="Ingrese la cantidad"
                  id="CantNoAdventistas"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Label texto="¿Cuántas personas están recibiendo estudios bíblicos de los miembros de su GP?  "></Label>
                <TexfieldC
                  name={"gpIntegranteRecibeEstudio"}
                  nombre="Ingrese la cantidad"
                  id="CantEstudiosBiblicos"
                  type="number"
                />
              </Grid>

              {/* simulacion de br */}
              <Grid container margin={1}></Grid>
              <Grid container padding={2} spacing={2}>
                {/* <TableActions
                  titulo="Miembros del grupo"
                  columnas={columns}
                  infor={data}
                  agregar={{
                    onRowAdd: (newData) =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          setData([...data, newData]);

                          resolve();
                        }, 1000);
                      }),
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          const dataUpdate = [...data];
                          const index = oldData.tableData.id;
                          dataUpdate[index] = newData;
                          setData([...dataUpdate]);

                          resolve();
                        }, 1000);
                      }),
                    onRowDelete: (oldData) =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          const dataDelete = [...data];
                          const index = oldData.tableData.id;
                          dataDelete.splice(index, 1);
                          setData([...dataDelete]);

                          resolve();
                        }, 1000);
                      }),
                  }}
                ></TableActions> */}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button variant="contained" type="submit">
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </SubCard>
        </Box>
      </form>
    </React.Fragment>
  );
}
