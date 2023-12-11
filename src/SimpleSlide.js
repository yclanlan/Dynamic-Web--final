export default function SimpleSlide(props) {
  const { children, viewportPosition } = props;
  return (
    <h2
      style={{
        color: "white",
        position: "absolute",
        minWidth: "100vw",
         // To offset slides a tiny bit from the left side of the screen
        top: `${viewportPosition}vh`,
        margin: "auto",
        zIndex: "50",
      }}
    >
      {children}
    </h2>
  );
}




