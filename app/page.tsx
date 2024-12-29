'use client'

import { useEffect, useState } from "react"
import { NavBar } from "@/components/ nav-bar"
import { PatientsList } from "@/components/patients-list"
import { DiagnosisHistory } from "@/components/diagnosis-history"
import { PatientDetails } from "@/components/patient-details"
import { Patient } from "@/types/patient"

export default function Home() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: {
            'Authorization': 'Basic ' + btoa('coalition:skills-test')
          }
        })
        const data = await response.json()
        setPatients(data)
        console.log("These are the patients", data)
        setSelectedPatient(data[0])
      } catch (error) {
        console.error('Error fetching patients:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPatients()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex flex-1">
        <PatientsList
          patients={patients}
          selectedPatient={selectedPatient}
          onSelectPatient={setSelectedPatient}
        />
        <main className="flex-1 p-6">
          {selectedPatient && <DiagnosisHistory patient={selectedPatient} />}
        </main>
        {selectedPatient && <PatientDetails patient={selectedPatient} />}
      </div>
    </div>
  )
}

