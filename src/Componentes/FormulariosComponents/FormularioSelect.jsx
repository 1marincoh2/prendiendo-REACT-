import React, {useState} from 'react'


const FormularioSelect = () => {

    const [frutas, setFrutas] = useState('coco');
    const fruts = ['naranja', 'limon', 'coco', 'mango', 'uva']

    const handleonChange = (event) => {
        setFrutas(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <>
            {frutas}

            <form onSubmit={handleSubmit}>
                <label>
                    selecione tu preferido:
                    <select value={frutas} onChange={handleonChange}>
                        <option value="naranja">naranja</option>
                        <option value="limon">Limon</option>
                        <option value="coco">Coco</option>
                        <option value="mango">Mango</option>
                        <option value="uva">uva</option>
                    </select>
                </label>
            <br/>
                <label>
                    selecione tu segundi preferido:
                    <select value={frutas} onChange={handleonChange}>
                        {fruts.map(fruts =>
                            <option key={fruts} value={fruts}>{fruts}</option>
                        )};
                    </select>
                </label>

            </form>


        </>
    );

}

export default FormularioSelect;
