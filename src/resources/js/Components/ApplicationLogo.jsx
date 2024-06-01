export default function ApplicationLogo(props) {
    return (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <clipPath id="a">
                <circle cx="50" cy="50" r="50" />
            </clipPath>

            <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#a)">
                <circle fill="#316EAC" cx="50" cy="50" r="50" />

                <path
                    fill="#ffffff"
                    d="M14.084 107.072a2 2 0 0 1-2-1.977L12.023 100H7a2 2 0 0 1-2-2V78c0-.323.078-.642.229-.928l11-21c.16-.306.396-.564.685-.751l16.375-10.596L40.08 21.44a2 2 0 0 1 1.617-1.417L42 20a2 2 0 0 1 1.664.891l5.62 8.429 5.349 1.783c.452.151.837.459 1.082.869l13.971 23.285 8.285-4.971a1.997 1.997 0 0 1 2.629.514l12 16c.083.11.154.229.213.354l7 15a2.002 2.002 0 0 1-.599 2.436l-28.916 22.072c-.349.266-.775.41-1.214.41h-55z"
                />

                <path
                    fill="#ffffff"
                    d="M69.084 105.073h-55L14 98H7V78l11-21 17-11 7-24 6 9 6 2 15 25 10-6 12 16 7 15-28.916 22.073z"
                />

                <path
                    fill="#6BC8F2"
                    d="M8 108a2 2 0 0 1-2-2V76a2 2 0 0 1 .211-.895l10-20a1.99 1.99 0 0 1 .703-.784l16.328-10.565 5.813-24.222A2 2 0 0 1 41 18h.039a2 2 0 0 1 1.923 1.607l3 15c.038.196.048.395.028.593l-1 10a2.012 2.012 0 0 1-.111.484l-4 11-4.81 13.468 2.891 14.456c.068.342.046.695-.063 1.025L35 97.324V106a2 2 0 0 1-2 2H8zm62.998-25c-.337 0-.678-.085-.99-.264l-7-4a2.001 2.001 0 0 1-.924-2.311l6-20c.15-.5.489-.921.944-1.174l9-5a2.014 2.014 0 0 1 1.987.025c.61.36.985 1.015.985 1.724v17c0 .395-.117.781-.336 1.109l-8 12a2 2 0 0 1-1.666.891z"
                />

                <path
                    fill="#6BC8F2"
                    d="M70 57l-6 20 7 4 8-12V52l-9 5zM35 45L18 56 8 76v30h25v-9l4-12-3-15 5-14 4-11 1-10-3-15-6 25z"
                />

                <circle
                    opacity=".2"
                    fill="#ffffff"
                    cx="76.5"
                    cy="29.5"
                    r="1.5"
                />

                <circle
                    opacity=".1"
                    fill="#ffffff"
                    cx="14.5"
                    cy="40.5"
                    r="1.5"
                />

                <circle
                    opacity=".43"
                    fill="#ffffff"
                    cx="56.5"
                    cy="15.5"
                    r="1.5"
                />
            </g>
        </svg>
    );
}
