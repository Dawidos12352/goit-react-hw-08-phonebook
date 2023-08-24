const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",

  },
  title: {
    fontWeight: 700,
    fontSize: 60,
    textAlign: "center",
  },
};

export default function Home() {
  return (
    <div style={styles.box}>
      <h1 style={styles.title}>
        Phonebook ☎️

      </h1>
    </div>
  );
}