import React from 'react'
import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { MUIProps } from '../../../application/protocols/mui-props'
import {} from '@emotion/react'
import theme from '@/styles/themes/theme'
import { Search } from '@/global/assets/icons/Search'

export type InputFieldProps = {
    id?: string
    name: string
    value?: any
    label?: string
    error?: any
    disabled?: boolean
    onBlur?: (e: any) => void
    onChange?: (e: any) => void
    flag?: boolean
} & MUIProps

export const InputField: React.FC<InputFieldProps> = ({
    id,
    name,
    value,
    label,
    error,
    helperText,
    inputProps = {},
    InputProps = {},
    disabled = false,
    onChange,
    onBlur,
    flag,
    ...otherProps
}) => {

    return (
        <Box {...otherProps} sx={{ width: '100%' }}>
            {label && (
                <Box display={'flex'} gap={2} marginBottom={'2px'}>
                    <Typography color={error ? 'error' : 'grey20'} mb={1}>
                        {label}
                    </Typography>
                </Box>
            )}
            <TextField
                id={id}
                name={name}
                value={value}
                variant="outlined"
                error={!!error}
                fullWidth
                onChange={onChange}
                onBlur={onBlur}
                type="text"
                disabled={disabled}
                inputProps={{
                    'data-testid': id,
                }}
                // InputProps={{
                //     ...InputProps,
                //     endadornment: (
                //         <InputAdornment position="end">
                //             <Search />
                //         </InputAdornment>
                //     ),
                // }}
                InputProps={{
                    ...InputProps,
                    endAdornment: flag ? (
                      <InputAdornment position="end"><Search /></InputAdornment>
                    ) : null,
                  }}
                {...inputProps}
                {...otherProps}
                sx={{
                    backgroundColor: theme.palette.background.default,
                    borderRadius: '3px',
                    '& input': {
                        height: '23px',
                    },
                    '.MuiInputBase-root': {
                        borderRadius: '3px',
                    },
                    '.MuiInputBase-input': {
                        padding: '6px 10px',
                        fontSize: '0.9rem',
                        color: theme.palette.primary.dark,
                        '&:disabled': {
                            '-webkit-text-fill-color': 'inherit !important',
                            borderColor: '#d4d4d4',
                            backgroundColor: 'rgba(239, 239, 239, 0.3)',
                        },
                    },
                    '.MuiInputBase-multiline': {
                        padding: '4px',
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.dark,
                    },
                }}
            />
            <Grid
                display={'flex'}
                justifyContent={'space-between'}
                marginTop={'3px'}
            >
                {helperText && (
                    <Typography
                        color={error ? 'error' : 'grey15'}
                        data-testid={`${id}-error`}
                    >
                        {helperText}
                    </Typography>
                )}
            </Grid>
        </Box>
    )
}

export default InputField
