import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar, Phone, Shield, Download } from 'lucide-react'
import { Patient } from "@/types/patient"

interface PatientDetailsProps {
  patient: Patient
}

export function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="w-80 border-l p-4">
      <div className="text-center">
        <Avatar className="mx-auto h-32 w-32">
          <AvatarImage src={`/placeholder.svg?height=128&width=128`} />
          <AvatarFallback>{patient.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
        </Avatar>
        <h2 className="mt-4 text-2xl font-semibold">{patient.name}</h2>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <div>
            <div className="text-sm font-medium">Date Of Birth</div>
            <div className="text-sm text-muted-foreground">{patient.dateOfBirth}</div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <div>
            <div className="text-sm font-medium">Contact Info</div>
            <div className="text-sm text-muted-foreground">
              {patient.contactInfo ? patient.contactInfo.primary : 'N/A'}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Shield className="h-4 w-4 text-muted-foreground" />
          <div>
            <div className="text-sm font-medium">Insurance Provider</div>
            <div className="text-sm text-muted-foreground">
              {patient.insurance ? patient.insurance.provider : 'N/A'}
            </div>
          </div>
        </div>

        <Button className="w-full">Show All Information</Button>
      </div>

      <div className="mt-6">
        <h3 className="mb-4 text-lg font-semibold">Lab Results</h3>
        <div className="space-y-2">
          {patient.labResults && patient.labResults.length > 0 ? (
            patient.labResults.map((result, index) => (
              <Button key={index} variant="outline" className="w-full justify-between">
                <span>{result.type}</span>
                <Download className="h-4 w-4" />
              </Button>
            ))
          ) : (
            <div className="text-sm text-muted-foreground">No lab results available.</div>
          )}
        </div>
      </div>
    </div>
  )
}

