import React from 'react'
import * as M from '@mui/material'
import { useFormik } from 'formik'
import { Content, InputField } from '@/components'
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

    const {  values,
        errors,
        // touched,
        // isValid,
        handleChange,
        // handleSubmit,
        // setFieldValue,
        // isSubmitting,
     } = useFormik({
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
                    <GridItem
                        label="Nome"
                        value={values?.cliente?.nome ?? ''}
                        name={'cliente.nome'}
                        id='nome'
                        onChange={handleChange}
                        // disabled
                    />
                    <GridItem
                        label="CPF"
                        value={values?.cliente?.cpf.replace(
                            /(\d{3})(\d{3})(\d{3})(\d{2})/,
                            '$1.$2.$3-$4'
                        ) ?? ''}
                        name={'cliente.cpf'}
                        id='cpf'
                        onChange={handleChange}
                        // disabled
                    />
                    <GridItem
                        label="Nascimento"
                        value={
                            values
                                ? formatDate(values?.cliente?.dataNascimento)
                                : ''
                        }
                        name={'cliente.dataNascimento'}
                        id='dataNascimento'
                        onChange={handleChange}
                        // disabled
                    />
                    <GridItem
                        label="Email"
                        value={values?.cliente?.email ?? ''}
                        name={'cliente.Email'}
                        id='email'
                        onChange={handleChange}
                        // disabled
                    />
                </M.Grid>
                <M.Grid mt={4}>
                <M.Typography
                    fontWeight={700}
                    color={(theme) => theme.palette.secondary.main}
                >
                    Dividas
                </M.Typography>
                </M.Grid>
                <M.Grid display={'flex'} justifyContent={'center'} alignItems={'center'} mt={12}>
                   <M.Typography
                    // fontWeight={700}
                    // color={(theme) => theme.palette.secondary.main}
                >
                    Cliente não possui dívidas. 
                </M.Typography>
                </M.Grid>
            </Content>
        </form>
    )
}

const GridItem: React.FC<{
    label: string
    value: string
    name: string
    id?: string
    disabled?: boolean
    onChange?: React.ChangeEventHandler
}> = ({ label, value, name, id, disabled = false, onChange }) => (
    
    <M.Grid item xs={12} sm={4}>
        <M.Typography
            fontWeight={700}
            color={(theme) => theme.palette.secondary.main}
        >
            {label}
        </M.Typography>
        <InputField
            name={name}
            id={id}
            value={value}
            disabled={disabled}
            onChange={onChange}
        />
    </M.Grid>
)

export default ClientDetails
