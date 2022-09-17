import Image from "next/image";
import products from "./products.json";
import { Button } from "ui";
import toast from "react-hot-toast";

export function Products() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      {products.products.map((p) => {
        return (
          <div
            key={p.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px 0",
            }}
          >
            <Image src={p.imgUrl} alt={p.name} width={250} height={250} />
            <span style={{ padding: "8px 0" }}>
              {p.name} - ${p.price}
            </span>
            <Button onClick={() => toast.success(`${p.name} added to cart!`)}>
              Add to cart
            </Button>
          </div>
        );
      })}
    </div>
  );
}
