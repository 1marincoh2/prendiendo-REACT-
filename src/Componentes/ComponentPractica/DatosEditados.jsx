import React, {useState} from 'react'
import {Button, Card, Row, Table, Modal, Badge, Form,} from 'react-bootstrap'


const DatosEditados = () => {

    const [alumno, setAlumno] = useState([

        {
            id: 1,
            Matricula: 'J13A04M93C',
            Nombre: 'Pedro',
            PrimerApellido: 'Pech',
            SegundoApellido: 'Canul',
            Semestre: '6to',
            Activo: true
        },
        {
            id: 2,
            Matricula: 'A23S09M14C',
            Nombre: 'Raul',
            PrimerApellido: 'Chi',
            SegundoApellido: 'Can',
            Semestre: '4to',
            Activo: false
        },
        {
            id: 3,
            Matricula: 'M21B12C94T',
            Nombre: 'Gustavo',
            PrimerApellido: 'Martinez',
            SegundoApellido: 'gutierrez',
            Semestre: '1ro',
            Activo: true
        },
        {
            id: 4,
            Matricula: 'A17M10M96C',
            Nombre: 'Tito',
            PrimerApellido: 'Lopez',
            SegundoApellido: 'Lopez',
            Semestre: '3ro',
            Activo: false
        },
    ])

    const [alumnos, setAlumnos] = useState({
        id: 0,
        Matricula: '',
        Nombre: '',
        PrimerApellido: '',
        SegundoApellido: '',
        Semestre: '',
        Activo: false,


    });

    const Guardar = (event) => {
        setAlumno(prevState => {
            const dato = [...prevState]
            const nuevainfo = {...alumnos}
            nuevainfo.id = dato.length + 1
            dato.push(nuevainfo)
            reiniciar()
            return dato
        })

        CerrarModal()
    }

    const Actualizar = () => {
        setAlumno(prevState => {
            const nuevainfo = [...prevState]
            const index = nuevainfo.findIndex((nuevodato) => nuevodato.id === alumnos.id)
            if (index > -1) {
                nuevainfo.splice(index, 1, alumnos)
            }
            reiniciar()
            return nuevainfo
        })
        CerrarModal()
    }

    const Eliminar = (info) => {
        setAlumno(prevState => {
            const borrardatos = [...prevState]
            const index = borrardatos.findIndex((borrar) => borrar.id === info.id)
            if (index > -1) {
                borrardatos.splice(index, 1)
            }
            return borrardatos
        })
    }

    const reiniciar = () => {
        setAlumnos(prevState => {
            const reinicio = {...prevState}
            reinicio.id = 0
            reinicio.Matricula = ''
            reinicio.Nombre = ''
            reinicio.PrimerApellido = ''
            reinicio.SegundoApellido = ''
            reinicio.Semestre = ''
            reinicio.Activo = ''
            return reinicio
        })
    }

    const changeInput = (evt, clave) => {

        const {name, value} = evt.target;
        setAlumnos(prevState => {
            const ingresarinf = {...prevState}
            ingresarinf[name] = value
            return ingresarinf
        })

    }
    const editar = (datoEditar) => {
        setAlumnos(datoEditar)
        AbrirModal()
    }

    const [abrir, setAbrir] = useState(false);

    const CerrarModal = () => setAbrir(false);
    const AbrirModal = () => setAbrir(true);


    return (

        <>
            <Button color="primary" aria-label="add to shopping cart" variant="primary" onClick={AbrirModal}>
                Ingrasar Datos
            </Button>

            <Modal show={abrir} onHide={CerrarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Informacion alumnos</Modal.Title>
                </Modal.Header>
                <Card style={{width: '18rem'}}>
                    {JSON.stringify(alumnos)}
                    <Card.Body class="card-header">
                        <Modal.Body> Matricula <input type="text"
                                                      value={alumnos.Matricula}
                                                      name="Matricula"
                                                      onChange={changeInput}/>
                        </Modal.Body>
                    </Card.Body>

                    <Card.Body class="card-header">
                        <Modal.Body>Nombres <input type="text"
                                                   value={alumnos.Nombre}
                                                   name="Nombre"
                                                   onChange={changeInput}/>
                        </Modal.Body>
                    </Card.Body>

                    <Card.Body class="card-header">
                        <Modal.Body> Primer Apellido <input type="text"
                                                            value={alumnos.PrimerApellido}
                                                            name="PrimerApellido"
                                                            onChange={changeInput}/>
                        </Modal.Body>
                    </Card.Body>

                    <Card.Body class="card-header">
                        <Modal.Body>Segundo Apellido<input type="text"
                                                           value={alumnos.SegundoApellido}
                                                           name="SegundoApellido"
                                                           onChange={changeInput}/>
                        </Modal.Body>
                    </Card.Body>

                    <Card.Body class="card-header">
                        <Modal.Body>Semestre <input type="text"
                                                    value={alumnos.Semestre}
                                                    name="Semestre"
                                                    onChange={changeInput}/>
                        </Modal.Body>
                    </Card.Body>
                    <Form.Check
                        type="switch"
                        checked={alumnos.Activo}
                        name="Activo"
                        onChange={() => {
                            setAlumnos(prevState => {
                                const copy = {...prevState}
                                copy.Activo = !alumnos.Activo;
                                return copy;
                            })
                        }}
                            id="custom-switch"
                            label="Activo"
                            />
                            <Card.Body class="card-header">

                            </Card.Body>
                            </Card>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={CerrarModal}>
                            Close
                            </Button>
                            <Button variant="primary" onClick={() => {
                            if (alumnos.id === 0) {
                            Guardar()
                            } else {
                            Actualizar()
                            }
                            }}>
                            {alumnos.id === 0 ? 'Agregar' : 'Actualizar'}
                            </Button>
                            </Modal.Footer>
                            </Modal>

                            <Row>
                            <style>{`
                            table, th, td {
                            border: 1px solid black;
                            border-collapse: collapse;
                            } `}</style>


                            <Table striped bordered hover class="table-responsive">

                            <thead>
                            <tr>

                            <th scope="col"> Id</th>
                            <th scope="col">MATRICULA</th>
                            <th scope="col">NOMBRES</th>
                            <th scope="col">PRIMER APELLIDO</th>
                            <th scope="col">SEGUN APELLIDO</th>
                            <th scope="col">SEMESTRE</th>
                            <th scope="col"> ACTIVO</th>

                            <th scope="col"> Opciones</th>


                            </tr>

                            </thead>

                            <tbody>
                            {
                            alumno.map((info) => (
                            <tr key={info.id}>
                            <td class="active">{info.id}</td>
                            <td class="success">{info.Matricula}</td>
                            <td class="warning">{info.Nombre}</td>
                            <td class="danger">{info.PrimerApellido}</td>
                            <td class="success">{info.SegundoApellido}</td>
                            <td class="danger">{info.Semestre}</td>
                            <td class="warning"> {info.Activo == true ? <Badge variant="success">Activo</Badge> :
                            <Badge variant="danger">Baja</Badge>}</td>


                            <td class="warning"><Button onClick={() => {
                            editar(info)
                            }}>Editar</Button>
                            <Button onClick={() => {
                            Eliminar(info)
                            }}>eliminar</Button>
                            </td>
                            </tr>
                            ))
                            }
                            </tbody>
                            </Table>


                            </Row>

                            </>
                            )
                            }
                            export default DatosEditados;