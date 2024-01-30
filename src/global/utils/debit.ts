import { ResultItem } from '../types/types'

export const calculateTotals = (data: ResultItem[] | undefined) => {
    const filteredData = (data || []).filter(
        (x: ResultItem | undefined): x is ResultItem => x !== undefined
    )

    const totalDebits = filteredData.length
    const totalValue = filteredData.reduce(
        (acc, item) => acc + (item.valor || 0),
        0
    )

    return { totalDebits, totalValue }
}
