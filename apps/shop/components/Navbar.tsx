export function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "8px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ fontWeight: "bold", fontSize: "20px" }}>
        React India Shop
      </span>
      <ul style={{ display: "flex", gap: "8px", listStyle: "none" }}>
        <li>
          <a href="#">t-shirts</a>
        </li>
        <a href="#">Stickers</a>
      </ul>
    </nav>
  );
}
