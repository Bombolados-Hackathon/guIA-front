import { IterationCcw } from 'lucide-react'
import React from 'react'
import { Progress } from '@/components/ui/progress'
import { SidebarTrigger } from '@/components/ui/sidebar'
export default function PendenciasPage() {
  return (
    <div
      className="font-sans px-10"
      style={{
        background:
          'linear-gradient(180deg, rgba(119, 240, 127, 0.00) 24.7%, rgba(54, 102, 156, 0.50) 98.79%), #FFF',
        width: '100%',
        height: '100vh',
      }}
    >
      <SidebarTrigger />
      <h1 style={{ fontSize: '2.3rem', color: '#3A2F6B' }}>
        Desafios Semanais
      </h1>
      <div
        style={{
          backgroundColor: '#41A0AE',
          width: '100%',
          height: '2px',
          marginBottom: '10px',
        }}
      />
      <p style={{ fontSize: '20px', marginBottom: '20px' }}>
        Restam x dias para acabar com essas pendencias
      </p>
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            width: '80%',
            border: '2px solid #36669C',
            borderRadius: '20px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: '#fff',
            gap: '10px',
          }}
        >
          <IterationCcw size={32} color="#3A2F6B" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p style={{ fontSize: '1.1rem' }}>Conclua 5 pendências</p>
            <Progress value={40} color="#0E7C7B" />
          </div>
          <p style={{ fontSize: '1.3rem', color: '#3EC995' }}>300 XP</p>
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            width: '80%',
            border: '2px solid #36669C',
            borderRadius: '20px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: '#fff',
            gap: '10px',
          }}
        >
          <IterationCcw size={32} color="#3A2F6B" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p style={{ fontSize: '1.1rem' }}>Conclua 5 pendências</p>
            <Progress value={40} color="#0E7C7B" />
          </div>
          <p style={{ fontSize: '1.3rem', color: '#3EC995' }}>300 XP</p>
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            width: '80%',
            border: '2px solid #36669C',
            borderRadius: '20px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: '#fff',
            gap: '10px',
          }}
        >
          <IterationCcw size={32} color="#3A2F6B" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p style={{ fontSize: '1.1rem' }}>Conclua 5 pendências</p>
            <Progress value={40} color="#0E7C7B" />
          </div>
          <p style={{ fontSize: '1.3rem', color: '#3EC995' }}>300 XP</p>
        </div>
      </div>
    </div>
  )
}
