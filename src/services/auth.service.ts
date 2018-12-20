import * as firebase from 'firebase';

export class AuthService {
    //creation nouvel user
    signUpUser(email: string, password: string) {
        return new Promise(
            (resolve, reject) => {
                firebase.auth().createUserWithEmailAndPassword(email, password).then(
                    (user) => {
                        resolve(user);
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    //connexion user
    signInUser(email: string, password: string) {
        return new Promise(
            (resolve, reject) => {
                firebase.auth().signInWithEmailAndPassword(email, password).then(
                    (user) => {
                        resolve(user);
                    }
                ).catch(
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    //deconnexion user
    signOut() {
        firebase.auth().signOut();
    }
}