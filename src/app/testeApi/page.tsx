'use client'

import { useGetUserXpApiV1UsersUserIdXpGet } from '@/http/generated/endpoints/aPIHackathonAVA'

export default function TesteApi() {
  const { data, error, isLoading } = useGetUserXpApiV1UsersUserIdXpGet(1)

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar dados</div>
  return <div>Dados do usuário: {JSON.stringify(data)}</div>
}
