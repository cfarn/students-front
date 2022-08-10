import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Success = () => {
  const params = useParams()
  const [student, setStudent] = useState(null)

  useEffect(() => {
    fetchStudent()
  }, [])

  const fetchStudent = async () => {
    const request = await fetch(`http://localhost:5000/students/${params.name}`)
    const response = await request.json()
    setStudent(response)
  }

  if (!student) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>{student.name}</h1>
      <p>{student.age}</p>
    </>
  )
}

export default Success