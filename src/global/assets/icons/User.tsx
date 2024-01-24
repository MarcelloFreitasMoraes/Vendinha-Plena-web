interface UserProps {
    width?: number
    height?: number
    color?: string
}

export const User = ({ width, height, color }: UserProps) => {
    return (
        <svg
            data-testid="arrow-botton-Red-id"
            width={width ? width : 80}
            height={height ? height : 80}
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_273_404)">
                <path
                    d="M62.1333 45.1333C65.7173 45.6269 68.9993 47.4077 71.3668 50.1432C73.7344 52.8788 75.0257 56.3823 75 60V66.6667C75 68.8768 74.122 70.9964 72.5592 72.5592C70.9964 74.122 68.8768 75 66.6667 75H13.3333C11.1232 75 9.00358 74.122 7.44078 72.5592C5.87797 70.9964 5 68.8768 5 66.6667V60C5.00658 56.4052 6.31256 52.934 8.67715 50.2263C11.0417 47.5187 14.3055 45.7572 17.8667 45.2667C23.7994 51.0175 31.7375 54.2335 40 54.2335C48.2625 54.2335 56.2006 51.0175 62.1333 45.2667V45.1333ZM60 40C57.4976 42.8375 54.42 45.1101 50.9717 46.6667C47.5234 48.2233 43.7833 49.0283 40 49.0283C36.2167 49.0283 32.4766 48.2233 29.0283 46.6667C25.58 45.1101 22.5024 42.8375 20 40C14.6957 40 9.60859 42.1071 5.85786 45.8579C2.10714 49.6086 0 54.6957 0 60L0 66.6667C0 70.2029 1.40476 73.5943 3.90524 76.0948C6.40573 78.5952 9.79711 80 13.3333 80H66.6667C70.2029 80 73.5943 78.5952 76.0947 76.0948C78.5952 73.5943 80 70.2029 80 66.6667V60C80 54.6957 77.8929 49.6086 74.1421 45.8579C70.3914 42.1071 65.3043 40 60 40Z"
                    fill={color || '#62A856'}
                />
                <path
                    d="M40.0002 5C43.2844 4.99842 46.5013 5.93172 49.2747 7.6908C52.0481 9.44988 54.2635 11.9621 55.6619 14.9337C57.0603 17.9053 57.584 21.2136 57.1717 24.4719C56.7593 27.7301 55.4281 30.8037 53.3335 33.3333C51.7124 35.2984 49.6758 36.8797 47.3703 37.9633C45.0647 39.0469 42.5477 39.6059 40.0002 39.6C38.8826 39.5933 37.7676 39.493 36.6669 39.3C32.4858 38.4276 28.774 36.0422 26.2435 32.6014C23.7131 29.1606 22.5421 24.9066 22.9552 20.6555C23.3684 16.4044 25.3365 12.4555 28.4821 9.56632C31.6278 6.67711 35.7294 5.05103 40.0002 5ZM40.0002 0C34.4588 0.00283373 29.1164 2.06564 25.0111 5.78757C20.9058 9.5095 18.3307 14.6247 17.7863 20.1393C17.2419 25.6538 18.7671 31.1738 22.0654 35.6266C25.3637 40.0794 30.1997 43.147 35.6335 44.2333C37.0742 44.4971 38.5356 44.631 40.0002 44.6333C45.5415 44.6305 50.8839 42.5677 54.9893 38.8458C59.0946 35.1238 61.6697 30.0086 62.2141 24.4941C62.7585 18.9795 61.2333 13.4595 57.935 9.0067C54.6366 4.55389 49.8007 1.48629 44.3669 0.4C42.9262 0.136239 41.4648 0.00236836 40.0002 0V0Z"
                    fill={color || '#62A856'}
                />
            </g>
            <defs>
                <clipPath id="clip0_273_404">
                    <rect width="80" height="80" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}