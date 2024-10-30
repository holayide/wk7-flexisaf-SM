import styles from "./Products.module.css";

interface productProps {
  name: string;
  image: string;
  price: string;
}

export default function Product({ name, image, price }: productProps) {
  return (
    <div className={styles.innerContainer}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.miniContainer}>
        <div className={styles.nameContainer}>
          <h5>{name}</h5>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
            </svg>
          </div>
        </div>

        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
}
