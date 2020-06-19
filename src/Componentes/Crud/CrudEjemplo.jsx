import React, {useState} from "react";
import {Button, FormControl, FormLabel, Modal, Table} from "react-bootstrap";
import {ErrorMessage, Field, Formik} from "formik";
import Form from "react-bootstrap/Form";
import FormGroup from "@material-ui/core/FormGroup";
import * as Yup from "yup";
import axios from "axios";
// json-server db.json --port 4000
const CrudEjemplo = () => {
    const apiUrl = 'https://jsonserver2314.herokuapp.com/';
    const [student, setStudent] = useState([]);
    const [alumno, setAlumno] = useState({
        id: 0,
        name: '',
        grado: '',
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const obtenerAlumnos = async () => {
        const data = await axios.get(apiUrl + 'alumnos').then((response => response));
        const alum = data.data || [];
        setStudent(alum)


    }

    const addAlumnos = async (data) => {
        axios.post(apiUrl + 'alumnos', data).then((reponse) => {
            console.log(reponse.data)
            setStudent(prevState => {
                const copyPrev = prevState
                copyPrev.push(reponse.data)
                return copyPrev;
            })
            obtenerAlumnos();
        })

        setShow(false)
    }

    const updateAlumnos = (data) => {
        axios.put(apiUrl + 'alumnos/' + data.id, data).then((reponse) => {
            console.log(reponse.data)
            setStudent(prevState => {
                const copyPrev = prevState
                const index = copyPrev.findIndex((copy) => copy.id === data.id)
                if (index > -1) {
                    copyPrev.splice(index, 1, reponse.data)
                }
                resetData();
                return copyPrev;
            })
            setShow(false)
        })
    }

    const removeAlumnos = (data) => {
        axios.delete(apiUrl + 'alumnos/' + data.id).then((reponse) => {
            console.log(reponse.data)
            setStudent(prevState => {
                const copyPrev = prevState
                const index = copyPrev.findIndex((copy) => copy.id === data.id)
                if (index > -1) {
                    copyPrev.splice(index, 1)
                }
                resetData();
                return copyPrev;
            })
            setShow(false)
        })
    }

    const editar = (data) => {
        setAlumno(data);
        setShow(true)
    }

    const resetData = () => {
        setAlumno({
            id: 0,
            name: '',
            grado: ''
        })
    }

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    {JSON.stringify(alumno)}
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={alumno}
                        validationSchema={Yup.object().shape({
                            name: Yup.string()
                                .min(2, 'Too Short!')
                                .max(50, 'Too Long!')
                                .required('Required'),
                            grado: Yup.string()
                                .min(2, 'Too Short!')
                                .max(50, 'Too Long!')
                                .required('Required')
                        })}
                        onSubmit={(values, actions) => {

                            //
                            if (values.id === 0) {
                                addAlumnos(values)
                            } else {
                                updateAlumnos(values)
                            }
                            actions.setSubmitting(false);
                        }}
                    >
                        {({handleSubmit, touched, errors, isSubmitting}) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="email">Nombre</label>
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Enter email"
                                        className={`form-control ${
                                            touched.name && errors.name ? "is-invalid" : ""
                                        }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="name"
                                        className="invalid-feedback"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Grado</label>
                                    <Field
                                        type="text"
                                        name="grado"
                                        placeholder="Enter password"
                                        className={`form-control ${
                                            touched.grado && errors.grado ? "is-invalid" : ""
                                        }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="grado"
                                        className="invalid-feedback"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    disabled={isSubmitting}
                                    onClick={handleSubmit}
                                >
                                    {isSubmitting ? "Please wait..." : "Submit"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>

            <Button variant="primary" onClick={() => {
                setShow(true)
            }}>
                Agregar
            </Button>

            <Button variant="primary" onClick={obtenerAlumnos}>
                Obtener
            </Button>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>

                {student.map(item => (
                    // Without the `key`, React will fire a key warning
                    <React.Fragment key={item.id}>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.grado}</td>
                            <td>
                                <Button variant="primary" onClick={() => {
                                    editar(item)
                                }}>Editar</Button>
                                <Button variant="danger" onClick={() => {
                                    removeAlumnos(item)
                                }}>Eliminar</Button>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}

                </tbody>
            </Table>
        </>
    )
}
export default CrudEjemplo;