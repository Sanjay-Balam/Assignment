import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Patient } from "@/types/patient"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TreesIcon as Lungs, Thermometer, Heart } from 'lucide-react'

interface DiagnosisHistoryProps {
  patient: Patient
}

interface DiagnosisEntry {
  month: string;
  year: number;
  blood_pressure: {
    systolic: {
      value: number;
      levels: string;
    };
    diastolic: {
      value: number;
      levels: string;
    };
  };
  heart_rate: {
    value: number;
    levels: string;
  };
  respiratory_rate: {
    value: number;
    levels: string;
  };
  temperature: {
    value: number;
    levels: string;
  };
}

export function DiagnosisHistory({ patient }: DiagnosisHistoryProps) {
  const { diagnosis_history } = patient;

  // Transform the diagnosis_history to match the expected format for the chart
  const bloodPressureData = diagnosis_history.map((entry: DiagnosisEntry) => ({
    date: `${entry.month} ${entry.year}`,
    systolic: entry.blood_pressure.systolic.value,
    diastolic: entry.blood_pressure.diastolic.value,
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Diagnosis History</h2>
        <Select defaultValue="6">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="6">Last 6 months</SelectItem>
            <SelectItem value="12">Last 12 months</SelectItem>
            <SelectItem value="24">Last 24 months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blood Pressure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bloodPressureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="systolic"
                  stroke="#8884d8"
                  name="Systolic"
                />
                <Line
                  type="monotone"
                  dataKey="diastolic"
                  stroke="#82ca9d"
                  name="Diastolic"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Respiratory Rate</CardTitle>
            <Lungs className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {diagnosis_history.length > 0 && diagnosis_history[0].respiratory_rate 
                ? `${diagnosis_history[0].respiratory_rate.value} bpm` 
                : 'N/A'}
            </div>
            <p className="text-xs text-muted-foreground">
              {diagnosis_history.length > 0 && diagnosis_history[0].respiratory_rate 
                ? diagnosis_history[0].respiratory_rate.levels 
                : 'N/A'}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
            <Thermometer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {diagnosis_history.length > 0 && diagnosis_history[0].temperature 
                ? `${diagnosis_history[0].temperature.value}°F` 
                : 'N/A'}
            </div>
            <p className="text-xs text-muted-foreground">
              {diagnosis_history.length > 0 && diagnosis_history[0].temperature 
                ? diagnosis_history[0].temperature.levels 
                : 'N/A'}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {diagnosis_history.length > 0 && diagnosis_history[0].heart_rate 
                ? `${diagnosis_history[0].heart_rate.value} bpm` 
                : 'N/A'}
            </div>
            <p className="text-xs text-muted-foreground">
              {diagnosis_history.length > 0 && diagnosis_history[0].heart_rate 
                ? diagnosis_history[0].heart_rate.levels 
                : 'N/A'}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

