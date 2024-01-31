import React from 'react'
import * as M from '@mui/material'
import { useFormik } from 'formik'
import { Content } from '@/components'
import { Back } from '@/global/assets/icons'
import Link from 'next/link'
import useDebitData from '@/hooks/useDebitData'
import { useRouter } from 'next/router'
import { formatDate } from '@/global/utils/client'

const ClientDetails: React.FC = () => {
    const { DebitQuery } = useDebitData()
    const { query } = useRouter()
    const selectedItemId = query.id
        ? parseInt(query.id as string, 10)
        : undefined

    const { values } = useFormik({
        initialValues: DebitQuery?.data?.d?.results.find(
            (item) => item.id === selectedItemId
        ),
        validateOnChange: false,
        enableReinitialize: true,
        onSubmit: async () => {},
    })

    return (
        <form>
            <Content title={'Clientes'}>
                <Link href={'/Client'}>
                    <M.Grid margin={'-27px 0 50px 0'}>
                        <Back width={20} height={20} />
                    </M.Grid>
                </Link>
                <M.Grid container spacing={5}>
                    <GridItem label="Nome" value={values?.cliente?.nome} />
                    <GridItem
                        label="CPF"
                        value={values?.cliente?.cpf.replace(
                            /(\d{3})(\d{3})(\d{3})(\d{2})/,
                            '$1.$2.$3-$4'
                        )}
                    />
                    <GridItem
                        label="Nascimento"
                        value={
                            values
                                ? formatDate(values?.cliente?.dataNascimento)
                                : ''
                        }
                    />
                    <GridItem label="Email" value={values?.cliente?.email} />
                </M.Grid>
            </Content>
        </form>
    )
}

const GridItem: React.FC<{ label: string; value: string }> = ({
    label,
    value,
}) => (
    <M.Grid item xs={12} sm={4}>
        <M.Typography
            fontWeight={700}
            color={(theme) => theme.palette.secondary.main}
        >
            {label}
        </M.Typography>
        <M.Typography>{value}</M.Typography>
    </M.Grid>
)

export default ClientDetails
