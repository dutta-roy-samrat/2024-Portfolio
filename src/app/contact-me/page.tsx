import ContactMeForm from "@components/contact-me-form";
import BulletPoint from "@components/ui/bullet-point";

import { poppins } from "@assets/fonts";

import styles from "./main.module.scss";

const ContactMePage = () => {
  return (
    <div className={styles.contactMePage}>
      <h1 className={poppins.className}>
        <BulletPoint>Let&apos;s Talk</BulletPoint>
      </h1>
      <ContactMeForm />
    </div>
  );
};

export default ContactMePage;
