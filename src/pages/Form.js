import { useState } from 'react'
// import { link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const student = {name: name}

        const request = await fetch('http://localhost:5000/students', {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(student)
        })

        const response = await request.json()

        if (request.status === 201) {
            navigate(`/success/${response.name}`)
        } else {
            setError(response)
        }
    }

    return (
        <div>
            <h1>Create Student</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder='name' onChange={handleNameChange}/>
                <button type='submit'>Validate</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Form