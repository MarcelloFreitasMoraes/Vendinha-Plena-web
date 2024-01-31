import useDebitData from '@/hooks/useDebitData'
import { useRouter } from 'next/router'
import * as M from '@mui/material'
import { useFormik } from 'formik'

const ClientDetails: React.FC = () => {
    const { DebitQuery } = useDebitData()
    const { query } = useRouter()
    const selectedItemId = query.id
        ? parseInt(query.id as string, 10)
        : undefined
    const {
        values,
        errors,
        touched,
        isValid,
        handleChange,
        handleSubmit,
        setFieldValue,
        isSubmitting,
    } = useFormik({
        initialValues: DebitQuery?.data?.d?.results.find(
            (item) => item.id === selectedItemId
        ),
        // validationSchema: validationSchemas,
        validateOnChange: false,
        enableReinitialize: true,
        onSubmit: async () => {},
    })
    console.log(values, 'values')

    return (
        <M.Grid width={'90%'} padding={'40px'}>
            <div>{values && values?.cliente?.nome}</div>
            <div>{values && values?.cliente?.cpf}</div>
            <div>{values && values?.cliente?.dataNascimento}</div>
            <div>{values && values?.cliente?.email}</div>
        </M.Grid>
    )
}

export default ClientDetails
