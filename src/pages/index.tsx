import useClientData from '@/hooks/useClientData'

export default function Home() {
    const { ClientQuery, ClientMutation } = useClientData()
    console.log(ClientQuery.data, 'ClientQuery')

    return (
        <>         
            OLA
        </>
    )
}
