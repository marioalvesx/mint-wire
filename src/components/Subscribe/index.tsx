import styles from "./styles.module.scss";

interface SubscribeProps {
  priceId: string;
}

export function Subscribe({ priceId }: SubscribeProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
