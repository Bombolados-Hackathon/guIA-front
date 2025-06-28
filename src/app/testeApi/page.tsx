'use client'
import { useGetUserXpApiV1UsersUserIdXpGet } from '@/hooks/generated/useGetUserXpApiV1UsersUserIdXpGet'

export default function TesteApi() {
  const { data, isLoading, error } = useGetUserXpApiV1UsersUserIdXpGet(1)

  return (
    <div>
      <h1>Teste de API</h1>
      <p>Esta página é um teste para verificar a integração com a API.</p>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Dados do Usuário</h2>
          <p>Nome: {data.name}</p>
          <p>XP: {data.xp}</p>
        </div>
      )}
    </div>
  )
}
