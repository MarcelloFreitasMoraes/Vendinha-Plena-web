import React, { ChangeEvent } from 'react'
import * as M from '@mui/material'
import theme from '@/styles/themes/theme'

interface SelectProps {
    label: string
    name?: string
    id?: string
    placeholder: string
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
    onInputChange: (event: ChangeEvent<{}>, value: string) => void
    options: any
    iconLeft?: React.ReactNode
    getOptionLabel: any
    renderOption: any
    onBlur?: () => void
    error?: any
    values: any
}

const Select: React.FC<SelectProps> = ({
    iconLeft,
    label,
    placeholder,
    options,
    handleChange,
    onInputChange,
    getOptionLabel,
    renderOption,
    onBlur,
    name,
    id,
    error,
    values,
}) => {
    return (
        <>
            <M.Grid display={'flex'}>
                {iconLeft}
                <M.Typography>{label}</M.Typography>
            </M.Grid>
            <M.Autocomplete
                sx={{
                    '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot':
                        { backgroundColor: theme.palette.primary.light },
                }}
                options={options}
                getOptionLabel={getOptionLabel}
                renderOption={renderOption}
                renderInput={(params) => (
                    <M.TextField
                        {...params}
                        id={id}
                        name={name}
                        error={error}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        variant="outlined"
                        fullWidth
                        size="small"
                        margin="dense"
                        onChange={handleChange}
                        value={values}
                    />
                )}
                onInputChange={onInputChange}
            />
        </>
    )
}

export default Select
