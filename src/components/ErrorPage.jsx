function ErrorPage() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "3rem" }}>
        Something went wrong!
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            width: "80%",
            height: "auto",
            maxWidth: "60rem",
            margin: "2rem",
          }}
          src="/error404.jpeg"
          alt=""
        />
      </div>
    </>
  );
}

export default ErrorPage;
