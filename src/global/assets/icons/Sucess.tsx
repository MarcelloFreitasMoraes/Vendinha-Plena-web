interface SucessProps {
    width?: number
    height?: number
    color?: string
}

export const Sucess = ({ width, height, color }: SucessProps) => {
    return (
        <svg
            data-testid="arrow-botton-Red-id"
            width={width ? width : 16}
            height={height ? height : 16}
            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_227_875)">
            <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 15C4.14 15 1 11.86 1 8C1 4.14 4.14 1 8 1C11.86 1 15 4.14 15 8C15 11.86 11.86 15 8 15Z" fill={color ||"#AFDA51"}/>
            <path d="M10.9399 5.61334C10.7733 5.44 10.4933 5.44 10.3266 5.61334L7.09327 8.88L5.67327 7.45334C5.5066 7.28 5.2266 7.28 5.05994 7.45334L4.7666 7.75334C4.59993 7.92 4.59993 8.19334 4.7666 8.36L6.7866 10.4C6.95327 10.5733 7.23327 10.5733 7.39994 10.4L11.2399 6.52667C11.4066 6.36 11.4066 6.08667 11.2399 5.92L10.9466 5.62L10.9399 5.61334Z" fill={color ||"#AFDA51"}/>
            </g>
            <defs>
            <clipPath id="clip0_227_875">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
    )
}
