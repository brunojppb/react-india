import { Button } from "ui";
import orders from "./orders.json";
import { toast } from "react-hot-toast";

export function Orders() {
  return (
    <div>
      {orders.orders.map((o) => {
        return (
          <div
            key={o.id}
            style={{
              padding: "16px 8px",
              margin: "4px 0",
              border: "1px solid #999",
              borderRadius: "4px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Order #{o.id}</div>
              <div>Total: ${o.total}</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <div>Total products: {o.products.length}</div>
              <Button
                onClick={() =>
                  toast(`Refund for order ${o.id} is being processed...`, {
                    icon: "💸",
                  })
                }
              >
                Refund
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
