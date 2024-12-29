import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { Patient } from "@/types/patient"

interface PatientsListProps {
  patients: Patient[]
  selectedPatient: Patient | null
  onSelectPatient: (patient: Patient) => void
}

export function PatientsList({ patients, selectedPatient, onSelectPatient }: PatientsListProps) {
  return (
    <div className="w-80 border-r p-4">
      <h2 className="mb-4 text-xl font-semibold">Patients</h2>
      <div className="relative mb-4">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search patients..." className="pl-8" />
      </div>
      <div className="space-y-2">
        {patients.map((patient) => (
          <button
            key={patient.id}
            onClick={() => onSelectPatient(patient)}
            className={`w-full rounded-lg p-2 text-left transition-colors hover:bg-accent ${
              selectedPatient?.id === patient.id ? "bg-accent" : ""
            }`}
          >
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                <AvatarFallback>{patient.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{patient.name}</div>
                <div className="text-sm text-muted-foreground">
                  {patient.gender}, {patient.age}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

