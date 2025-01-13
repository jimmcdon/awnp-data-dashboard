"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { Upload } from 'lucide-react'

export function SidebarCSVUpload() {
  const [file, setFile] = useState<File | null>(null)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a CSV file to upload.",
        variant: "destructive",
      })
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/upload-csv', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        // Here you would update your application state with the new data
        // For example, using a state management solution like Redux or Zustand
        // updateRollingQuarterlyData(data.rollingQuarterlyData)
        
        toast({
          title: "Upload successful",
          description: "Your CSV file has been uploaded and processed. The dashboard will update shortly.",
        })
      } else {
        throw new Error('Upload failed')
      }
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your CSV file. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-2">
      <Input 
        type="file" 
        accept=".csv" 
        onChange={handleFileChange} 
        className="text-xs"
      />
      <Button onClick={handleUpload} className="w-full">
        <Upload className="mr-2 h-4 w-4" />
        Upload CSV
      </Button>
    </div>
  )
}

