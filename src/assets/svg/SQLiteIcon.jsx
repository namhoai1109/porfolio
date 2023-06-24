const SQLiteIcon = (props) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={-118.318}
        y1={45.638}
        x2={-116.751}
        y2={45.638}
        gradientTransform="matrix(0 11.486 11.486 0 -510.889 1363.307)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#97d9f6" />
        <stop offset={0.92} stopColor="#0f80cc" />
        <stop offset={1} stopColor="#0f80cc" />
      </linearGradient>
    </defs>
    <path
      d="M23.192 3.242H5.623a2.147 2.147 0 0 0-2.141 2.141v19.376A2.147 2.147 0 0 0 5.623 26.9h11.572c-.132-5.758 1.835-16.932 5.997-23.658Z"
      style={{
        fill: "#0f80cc",
      }}
    />
    <path
      d="M22.554 3.867H5.623a1.518 1.518 0 0 0-1.516 1.516v17.962a42.01 42.01 0 0 1 13.569-2.684 123.555 123.555 0 0 1 4.878-16.794Z"
      style={{
        fill: "url(#a)",
      }}
    />
    <path
      d="M27.29 2.608c-1.2-1.073-2.66-.642-4.1.634-.213.19-.426.4-.638.625A25.4 25.4 0 0 0 17.1 15a10.178 10.178 0 0 1 .634 1.822c.036.14.069.272.1.384.062.265.1.437.1.437s-.022-.083-.113-.346l-.059-.17a2.083 2.083 0 0 0-.038-.094c-.16-.373-.6-1.16-.8-1.5-.167.493-.315.954-.438 1.371a12.131 12.131 0 0 1 .908 2.8s-.03-.115-.171-.515a19.037 19.037 0 0 0-.9-1.708 4.037 4.037 0 0 0-.264 1.724 6.009 6.009 0 0 1 .493 1.383c.334 1.283.566 2.846.566 2.846l.02.263a26.145 26.145 0 0 0 .065 3.205 11.362 11.362 0 0 0 .584 3.1l.18-.1a13.859 13.859 0 0 1-.478-4.628 35.269 35.269 0 0 1 1.938-9.688c2.01-5.308 4.8-9.568 7.35-11.6-2.326 2.1-5.474 8.9-6.417 11.418a45.656 45.656 0 0 0-2.254 8A6.211 6.211 0 0 1 21.39 20s1.233-1.521 2.674-3.693a26.206 26.206 0 0 0-2.755.733c-.7.294-.889.394-.889.394a23.939 23.939 0 0 1 4.215-2.007c2.676-4.215 5.592-10.2 2.656-12.824"
      style={{
        fill: "#003b57",
      }}
    />
  </svg>
);
export default SQLiteIcon;
