import React, {useState,useEffect} from "react";
import {Button,Modal, Table} from "react-bootstrap";
import {ErrorMessage, Field, Formik} from "formik";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import axios from "axios";
// json-server db.json --port 4000
const CrudEjemplo = () => {
    const apiUrl = 'http://localhost:4000/';
    const [animals, setAnimals] = useState([]);
    const [animal, setAnimal] = useState({
        id: 0,
        name: '',
        tipoanimal:'',
        peligroso: '',
        raza: ''
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    useEffect(() => {
        obtenerAnimales();
    }, [])
    const obtenerAnimales = async () => {
        const data = await axios.get(apiUrl + 'animales').then((response => response));
        const animal1 = data.data || [];
        setAnimals(animal1)


    }

    const addanimal2 = async (data) => {
        axios.post(apiUrl + 'animales', data).then((reponse) => {
            console.log(reponse.data)
            setAnimals(prevState => {
                const copyPrev = prevState
                copyPrev.push(reponse.data)
                return copyPrev;
            })
            obtenerAnimales();
        })

        setShow(false)
    }

    const updateAnimales = (data) => {
        axios.put(apiUrl + 'animales/' + data.id, data).then((reponse) => {
            console.log(reponse.data)
            setAnimals(prevState => {
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

    const removeAnimales = (data) => {
        axios.delete(apiUrl + 'animales/' + data.id).then((reponse) => {
            console.log(reponse.data)
            setAnimals(prevState => {
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
        setAnimal(data);
        setShow(true)
    }

    const resetData = () => {
        setAnimal({
            id: 0,
            name: '',
            tipoanimal:'',
             peligroso: '',
             raza: ''

        })
    }

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    {JSON.stringify(animal)}
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={animal}
                        validationSchema={Yup.object().shape({
                            name: Yup.string()
                                .min(2, 'Too Short!')
                                .max(50, 'Too Long!')
                                .required('Required'),
                            tipoanimal: Yup.string()
                                .min(2, 'Too Short!')
                                .max(50, 'Too Long!')
                                .required('Required'),
                                peligroso: Yup.string()
                                .min(2, 'Too Short!')
                                .max(50, 'Too Long!')
                                .required('Required'),
                                raza: Yup.string()
                                .min(2, 'Too Short!')
                                .max(50, 'Too Long!')
                                .required('Required')
 
 
                        })}
                        onSubmit={(values, actions) => {

                            //
                            if (values.id === 0) {
                                addanimal2(values)
                            } else {
                                updateAnimales(values)
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
                                        placeholder="Enter "
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
                                    <label htmlFor="email">Tipo</label>
                                    <Field
                                        type="text"
                                        name="tipoanimal"
                                        placeholder="Enter"
                                        className={`form-control ${
                                            touched.tipoanimal && errors.tipoanimal ? "is-invalid" : ""
                                        }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="tipoanimal"
                                        className="invalid-feedback"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Peligroso</label>
                                    <Field
                                        type="text"
                                        name="peligroso"
                                        placeholder="Enter"
                                        className={`form-control ${
                                            touched.peligroso && errors.peligros ? "is-invalid" : ""
                                        }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="peligroso"
                                        className="invalid-feedback"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Raza</label>
                                    <Field
                                        type="text"
                                        name="raza"
                                        placeholder="Enter"
                                        className={`form-control ${
                                            touched.raza && errors.raza ? "is-invalid" : ""
                                        }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="raza"
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

            <Button variant="primary" onClick={obtenerAnimales}>
                Obtener
            </Button>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Peligroso</th>
                    <th>Raza</th>

                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>

                {animals.map(item => (
                    // Without the `key`, React will fire a key warning
                    <React.Fragment key={item.id}>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.tipoanimal}</td>
                            <td>{item.peligroso}</td>
                            <td>{item.raza}</td>
                            <td>
                                <Button variant="primary" onClick={() => {
                                    editar(item)
                                }}>Editar</Button>
                                <Button variant="danger" onClick={() => {
                                    removeAnimales(item)
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