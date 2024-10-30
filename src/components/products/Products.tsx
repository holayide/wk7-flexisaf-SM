import { datas } from "../../lib/datas";
import Product from "./Product";
import styles from "./Products.module.css";

// const

export default function Products() {
  return (
    <div className={styles.mainWrapper}>
      <div className="gContainer">
        <h1 className={styles.products}>Products</h1>
        <div className={styles.wrapper}>
          {datas.map((data) => (
            <Product
              key={data.id}
              name={data.name}
              image={data.image}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
