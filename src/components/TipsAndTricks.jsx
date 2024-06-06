import styles from "../css/TipsAndTricks.module.css";

export default function TipsAndTricks() {
  return (
    <div>
      <div className={styles.heroImage}>
        <h1 className={styles.Heading}>
          Adopt with Confidence: Essential Tips for Happy Pets!
        </h1>
      </div>
      <div className={styles.IntroContainer}>
        <p className={styles.introPara}>
          Welcome to our Pet Adoption Tips and Tricks page! We're delighted to
          offer guidance and support as you embark on the exciting journey of
          pet adoption. Bringing a new furry friend into your life is a joyous
          occasion, and we're here to help you navigate every step of the
          process with confidence and ease.
        </p>
      </div>

      <div className={styles.TipsContainer}>
        <div className={styles.ContainerImage}>
          <img src="/cat-hand.jpg" className={styles.Image} />
        </div>
        <div className={styles.TextContainer}>
          <h2>Before you adopt</h2>
          <p>
            Before taking the leap into pet ownership, it's essential to
            consider various factors to ensure a successful and fulfilling
            adoption experience. Take the time to reflect on your lifestyle,
            living situation, and personal preferences. Researching different
            breeds and understanding their unique characteristics can also help
            you find a pet that aligns well with your lifestyle and personality.
            Additionally, it's crucial to budget for the financial
            responsibilities associated with pet ownership, including food,
            veterinary care, grooming, and unexpected expenses.
          </p>
        </div>
      </div>
      <div className={styles.TipsContainer2}>
        <div className={styles.TextContainer}>
          <h2>Finding Your Perfect Companion</h2>
          <p>
            Finding the perfect companion involves more than just browsing
            through pictures online or visiting your local shelter. It's about
            taking the time to truly connect with potential pets and understand
            their individual personalities and needs. Visiting shelters and
            attending adoption events allows you to meet a variety of animals
            and get a sense of their temperaments. Don't be afraid to ask
            questions and seek guidance from shelter staff or volunteers—they're
            there to help you find the perfect match.
            {/* Remember, the right pet is
            out there waiting for you; it's just a matter of finding them! */}
          </p>
        </div>
        <div className={styles.ContainerImage}>
          <img src="/dogWperson.jpg" className={styles.Image} />
        </div>
      </div>
      <div className={styles.TipsContainer}>
        <div className={styles.ContainerImage}>
          <img src="/HappyOwner.jpg" className={styles.Image} />
        </div>
        <div className={styles.TextContainer}>
          <h2>Building a Strong Bond</h2>
          <p>
            Building a strong bond with your pet is key to fostering a happy and
            harmonious relationship. Spend quality time together engaging in
            activities you both enjoy, whether it's going for walks, playing
            games, or simply cuddling on the couch. Investing in training and
            socialization not only strengthens your bond but also helps your pet
            become a well-behaved and confident companion. Additionally,
            prioritize regular veterinary care to keep your pet healthy and
            address any health issues promptly.
          </p>
        </div>
      </div>
    </div>
  );
}
