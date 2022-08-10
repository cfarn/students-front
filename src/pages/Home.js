import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [students, setStudents] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/students')
    //     .then(response => response.json())
    //     .then(data => setStudents(data))
    // }, [])

    useEffect(() => {
        fetchStudents()
    }, [])

    const fetchStudents = async () => {
        const request = await fetch('http://localhost:5000/students')
        const response = await request.json()
        setStudents(response)
    }

    return (
        <>
            <h1>Home</h1>
            <section>
                {
                    students.map(student => (
                        // <p>{student.name}</p>
                        <p><Link to={`/success/${student.name}`}>{student.name}</Link></p>
                    ))
                }
            </section>
        </>
    )
}

export default Home