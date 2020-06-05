import React, {useState} from 'react'


const FormComponent = () => {

    const [usuario, setValue] = useState({
        name: '',
        email: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(usuario)
    }


    const changeState = (evt, clave) => {
        const {name, value} = evt.target;


        setValue(prevState => {
            const object = {...prevState}
            object[name] = value
            return object
        })
    }

    return (
        <>

            {JSON.stringify(usuario)}
            <form onSubmit={handleSubmit}>

                <label>
                    ingresa nombre
                    <input
                        type="text"
                        value={usuario.name}
                        name="name"
                        onChange={(e) => {
                            changeState(e)
                        }}
                    />
                </label>

                <label>
                    ingresa nombre
                    <input
                        type="text"
                        value={usuario.email}
                        name="email"
                        onChange={(e) => {
                            changeState(e)
                        }}
                    />
                </label>
            </form>


        </>
    )
}

export default FormComponent