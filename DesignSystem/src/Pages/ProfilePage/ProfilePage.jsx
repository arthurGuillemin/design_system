import React from "react";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <div className={styles.profileContainer}>
      {/* Header */}
      <header className={styles.header}>
        <h1>Votre profil</h1>
      </header>

      {/* Carte profil */}
      <div className={styles.profileCard}>
        <img
          src="https://via.placeholder.com/120"
          alt="Avatar"
          className={styles.avatar}
        />
        <h2 className={styles.name}>Emilie Caverne</h2>
        <p className={styles.info}>25/09/2001</p>
        <p className={styles.info}>emilie.caverne@outlook.fr</p>
      </div>

      {/* Formulaire */}
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Mot de passe actuel</label>
          <input type="password" placeholder="Mot de passe actuel" />
        </div>
        <div className={styles.formGroup}>
          <label>Nouveau mot de passe</label>
          <input type="password" placeholder="Nouveau mot de passe" />
        </div>
        <div className={styles.formGroup}>
          <label>Confirmation nouveau mot de passe</label>
          <input type="password" placeholder="Confirmation nouveau mot de passe" />
        </div>
        <button type="submit" className={styles.button}>
          Sauvegarder
        </button>
      </form>

      {/* Section suppression */}
      <div className={styles.deleteSection}>
        <p>
          La suppression de votre compte entraînera la suppression définitive de vos
          données personnelles. Assurez-vous de sauvegarder toutes les données importantes
          avant de procéder.
        </p>
        <button type="button" className={styles.deleteButton}>
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
