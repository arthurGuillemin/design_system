import React from "react";
import Avatar from "../../components/Avatar/Avatar"; // Assurez-vous que le chemin est correct
import RoundedInput from "../../components/FormInput/RoundedInput"; // Import du RoundedInput
import Button from "../../components/Button/Button"; // Import du composant Button
import styles from "./ProfilePage.module.css";
import Header from "../../components/Header/Header"; // Assurez-vous du bon chemin

const ProfilePage = () => {
  return (
    <div className={styles.profileContainer}>
      <Header/>
      {/* Carte profil */}
      <div className={styles.profileCard}>
        <Avatar
          src="https://via.placeholder.com/120" // Image placeholder, ou mettre le chemin réel
          alt="Avatar"
          size="large"
          className={styles.avatar}
        />
        <h2 className={styles.name}>Emilie Caverne</h2>
        <p className={styles.info}>25/09/2001</p>
        <p className={styles.info}>emilie.caverne@outlook.fr</p>
      </div>
      {/* Formulaire */}
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <RoundedInput
            label="Mot de passe actuel"
            placeholder="Mot de passe actuel"
            type="password"
            isPassword={true}
          />
        </div>
        <div className={styles.formGroup}>
          <RoundedInput
            label="Nouveau mot de passe"
            placeholder="Nouveau mot de passe"
            type="password"
            isPassword={true}
          />
        </div>
        <div className={styles.formGroup}>
          <RoundedInput
            label="Confirmation nouveau mot de passe"
            placeholder="Confirmation nouveau mot de passe"
            type="password"
            isPassword={true}
          />
        </div>
        {/* Remplacement du bouton "Sauvegarder" par le composant Button */}
        <Button
          type="submit"
          variant="active"
          size="slim"
          width="medium-width"
        >
          Sauvegarder
        </Button>
      </form>

      {/* Section suppression */}
      <div className={styles.deleteSection}>
        <p>
          La suppression de votre compte entraînera la suppression définitive de vos
          données personnelles. Assurez-vous de sauvegarder toutes les données importantes
          avant de procéder.
        </p>
        {/* Remplacement du bouton "Supprimer" par le composant Button */}
        <Button
          type="button"
          variant="default"
          size="slim"
          width="medium-width"
        
        >
          Supprimer
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
